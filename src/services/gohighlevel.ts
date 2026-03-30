export type GhlFormPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  otherClaimants?: string;
  parishOrCounty?: string;
  preferredContactMethod?: string;
  fundsState?: string;
  approxClaimAmount?: string;
  fundType?: string;
  fundsDescription?: string;
  referralSource?: string;
  contactingAs?: string;
  companyName?: string;
  website?: string;
  howCanWeWorkTogether?: string;
  authorization?: boolean;
};

export async function upsertGhlContact(payload: GhlFormPayload): Promise<void> {
  const basePath = ((process.env as any).VUE_APP_API_BASE_URL as string | undefined) ?? '';
  const res = await fetch(`${basePath}/api/lead`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    let detail = '';
    try {
      detail = JSON.stringify(await res.json());
    } catch {
      // ignore
    }
    throw new Error(`GoHighLevel submission failed (${res.status}). ${detail}`.trim());
  }
}

