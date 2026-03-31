function requiredEnv(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing server env var: ${name}`);
  return value;
}

function parseJsonEnv(name, fallback) {
  const raw = process.env[name];
  if (!raw) return fallback;
  try {
    return JSON.parse(raw);
  } catch {
    throw new Error(`Invalid JSON in server env var: ${name}`);
  }
}

function buildCustomFields(payload, map) {
  const pairs = [
    ['otherClaimants', payload.otherClaimants],
    ['parishOrCounty', payload.parishOrCounty],
    ['preferredContactMethod', payload.preferredContactMethod],
    ['fundsState', payload.fundsState],
    ['approxClaimAmount', payload.approxClaimAmount],
    ['fundType', payload.fundType],
    ['fundsDescription', payload.fundsDescription],
    ['referralSource', payload.referralSource],
    ['contactingAs', payload.contactingAs],
    ['companyName', payload.companyName],
    ['website', payload.website],
    ['howCanWeWorkTogether', payload.howCanWeWorkTogether],
    ['authorization', payload.authorization],
  ];

  return pairs
    .map(([key, value]) => {
      const id = map[key];
      if (!id) return null;
      if (value === undefined || value === '' || value === false) return null;
      return { id, value };
    })
    .filter(Boolean);
}

async function readJsonSafe(res) {
  const text = await res.text();
  if (!text) return { text: '', json: null };
  try {
    return { text, json: JSON.parse(text) };
  } catch {
    return { text, json: { raw: text } };
  }
}

function isDuplicateContactError(details) {
  if (!details || typeof details !== 'object') return false;
  const message = typeof details.message === 'string' ? details.message : '';
  const meta = details.meta && typeof details.meta === 'object' ? details.meta : null;
  return (
    message.toLowerCase().includes('does not allow duplicated contacts') &&
    meta &&
    typeof meta.contactId === 'string' &&
    meta.contactId.length > 0
  );
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const token = requiredEnv('GHL_API_KEY');
    const locationId = requiredEnv('GHL_LOCATION_ID');
    const baseUrl = process.env.GHL_BASE_URL || 'https://services.leadconnectorhq.com';
    const tags = (process.env.GHL_TAGS || 'Website Form')
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);
    const customFieldMap = parseJsonEnv('GHL_CUSTOM_FIELD_IDS', {});

    const payload = req.body || {};

    if (!payload.firstName || !payload.lastName || !payload.email || !payload.phone) {
      return res.status(400).json({
        error: 'Missing required fields: firstName, lastName, email, phone',
      });
    }

    const contactBody = {
      locationId,
      firstName: payload.firstName,
      lastName: payload.lastName,
      email: payload.email,
      phone: payload.phone,
      source: 'Legacy Solutions Website',
      tags,
      customFields: buildCustomFields(payload, customFieldMap),
    };

    const ghlRes = await fetch(`${baseUrl.replace(/\/$/, '')}/contacts/`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Version: '2021-07-28',
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(contactBody),
    });

    const { json: responseJson } = await readJsonSafe(ghlRes);

    if (!ghlRes.ok) {
      // If the location blocks duplicates, GHL returns 400 + a meta.contactId.
      // In that case, treat the submission as an upsert and update the existing contact.
      if (ghlRes.status === 400 && isDuplicateContactError(responseJson)) {
        const existingId = responseJson.meta.contactId;
        // Update endpoint does not require locationId; avoid sending it to reduce validation issues.
        const updateBody = {
          firstName: payload.firstName,
          lastName: payload.lastName,
          email: payload.email,
          phone: payload.phone,
          source: 'Legacy Solutions Website',
          tags,
          customFields: buildCustomFields(payload, customFieldMap),
        };

        const updRes = await fetch(`${baseUrl.replace(/\/$/, '')}/contacts/${existingId}`, {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
            Version: '2021-07-28',
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(updateBody),
        });

        const { json: updJson } = await readJsonSafe(updRes);
        if (!updRes.ok) {
          return res.status(updRes.status).json({
            error: 'GoHighLevel update failed',
            details: updJson,
          });
        }

        return res.status(200).json({
          ok: true,
          upserted: true,
          contactId: existingId,
          data: updJson,
        });
      }

      return res.status(ghlRes.status).json({
        error: 'GoHighLevel submission failed',
        details: responseJson,
      });
    }

    return res.status(200).json({ ok: true, data: responseJson });
  } catch (error) {
    return res.status(500).json({
      error: error instanceof Error ? error.message : 'Server error',
    });
  }
}

