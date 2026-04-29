<template>
  <section id="cta-section" ref="sectionRef" class="bg-gray-50 py-8 md:py-[60px] px-[10px] md:px-0">
    <div class="container max-w-7xl mx-auto">
      <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between flex-wrap">
        <!-- Left Column: Text Content -->
        <div class="basis-full lg:basis-[50%] p-[10px] flex flex-col gap-5">
          <h2 class="fadeInUp font-outfit text-[28px] md:text-4xl font-extrabold uppercase leading-[40px] text-center md:text-left" style="color: #00274D;">
            START YOUR CLAIM – QUICK, SECURE, AND FREE
          </h2>
          <p class="fadeInUp text-[16px] mb-[18px] text-gray-700 leading-relaxed">
            Whether your funds are connected to Louisiana or another state, Legacy Solutions LLC makes it easy to recover what’s rightfully yours. There are no upfront costs, and your information remains private. Complete the brief form below to verify eligibility and start your recovery process.
          </p>
          <p class="fadeInUp text-[16px] mb-[18px] text-gray-700 leading-relaxed">
            Serving all 64 Louisiana parishes and clients nationwide. Even if you’re unsure where your funds are located, our team can assist you from start to finish.
          </p>
          <div class="fadeInUp md:flex md:justify-center lg:justify-start">
            <img 
              src="/images/contact-section/CONTACT-FORM-SECTION-2.png" 
              alt="Contact form illustration"
              class="max-w-[85%]"
            />
          </div>
        </div>

        <!-- Right Column: Form Card -->
        <div class="fadeInUp2s bg-white rounded-2xl shadow-sm basis-full lg:basis-[50%] p-[25px]">
          <!--
            IMPORTANT for GoHighLevel (LC Tracking) form sync:
            - Must be a real HTML <form> submission (no JS-bound submit handler).
            - Must include an <input type="email"> and a standard submit button.
          -->
          <!--
            Use GET with a no-op action so:
            - The browser still performs a standard HTML form submit (required for LC Tracking).
            - Your SPA dev server isn't required to handle a POST route (avoids "Cannot POST /" errors).
          -->
          <form class="space-y-6" @submit.prevent="onSubmit">
            <!-- First / Last Name -->
            <div class="grid md:grid-cols-2 gap-4">
              <div class="space-y-2">
                <label for="cta_first_name" class="font-outfit block text-sm font-semibold text-gray-800">
                  First Name <span class="text-[#c02b0a] text-xs">(Required)</span>
                </label>
                <input
                  id="cta_first_name"
                  type="text"
                  name="first_name"
                  autocomplete="given-name"
                  required
                  v-model.trim="form.firstName"
                  class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                  placeholder="Enter your full legal name."
                />
              </div>
              <div class="space-y-2">
                <label for="cta_last_name" class="font-outfit block text-sm font-semibold text-gray-800">
                  Last Name <span class="text-[#c02b0a] text-xs">(Required)</span>
                </label>
                <input
                  id="cta_last_name"
                  type="text"
                  name="last_name"
                  autocomplete="family-name"
                  required
                  v-model.trim="form.lastName"
                  class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                  placeholder="Enter your full legal name."
                />
              </div>
            </div>

            <!-- Email / Confirm Email -->
            <div class="grid md:grid-cols-2 gap-4">
              <div class="space-y-2">
                <label for="cta_email" class="font-outfit block text-sm font-semibold text-gray-800">
                  Email Address <span class="text-[#c02b0a] text-xs">(Required)</span>
                </label>
                <input
                  id="cta_email"
                  type="email"
                  name="email"
                  autocomplete="email"
                  required
                  v-model.trim="form.email"
                  class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                  placeholder="Enter Email"
                />
              </div>
              <div class="space-y-2">
                <label for="cta_confirm_email" class="font-outfit block text-sm font-semibold text-gray-800">
                  Confirm Email
                </label>
                <input
                  id="cta_confirm_email"
                  type="email"
                  name="confirm_email"
                  autocomplete="email"
                  v-model.trim="form.confirmEmail"
                  class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                  placeholder="Confirm Email"
                />
              </div>
            </div>

            <!-- Phone / Other Claimants -->
            <div class="grid md:grid-cols-2 gap-4">
              <div class="space-y-2">
                <label for="cta_phone" class="font-outfit block text-sm font-semibold text-gray-800">
                  Phone Number <span class="text-[#c02b0a] text-xs">(Required)</span>
                </label>
                <input
                  id="cta_phone"
                  type="tel"
                  name="phone"
                  autocomplete="tel"
                  required
                  v-model.trim="form.phone"
                  class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                  placeholder="Write Phone Number without +1"
                />
                <p class="text-[11px] text-gray-500">
                  Please enter your phone number without +1.
                </p>
              </div>
              <div class="space-y-2">
                <label for="cta_other_claimants" class="font-outfit block text-sm font-semibold text-gray-800">
                  Other Potential Claimants
                </label>
                <input
                  id="cta_other_claimants"
                  type="text"
                  name="other_claimants"
                  v-model.trim="form.otherClaimants"
                  class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                  placeholder="List any family members"
                />
              </div>
            </div>

            <!-- Parish / Preferred Contact -->
            <div class="grid md:grid-cols-2 gap-4">
              <div class="space-y-2">
                <label for="cta_parish_or_county" class="font-outfit block text-sm font-semibold text-gray-800">
                  Parish or County (if known)
                </label>
                <input
                  id="cta_parish_or_county"
                  type="text"
                  name="parish_or_county"
                  v-model.trim="form.parishOrCounty"
                  class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                  placeholder="Parish or County (if known)"
                />
              </div>
              <div class="space-y-2">
                <label for="cta_preferred_contact_method" class="font-outfit block text-sm font-semibold text-gray-800">
                  Preferred Contact Method
                </label>
                <input
                  id="cta_preferred_contact_method"
                  type="text"
                  name="preferred_contact_method"
                  v-model.trim="form.preferredContactMethod"
                  class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                  placeholder="Call, text, or email"
                />
              </div>
            </div>

            <!-- State / Approximate Amount -->
            <div class="grid md:grid-cols-2 gap-4">
              <div class="space-y-2">
                <label for="cta_funds_state" class="font-outfit block text-sm font-semibold text-gray-800">
                  State Where Funds Are Located <span class="text-[#c02b0a] text-xs">(Required)</span>
                </label>
                <select
                  id="cta_funds_state"
                  name="funds_state"
                  required
                  v-model="form.fundsState"
                  class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                >
                  <option value="Louisiana">Louisiana</option>
                  <option value="Other / Not Sure">Other / Not Sure</option>
                </select>
              </div>
              <div class="space-y-2">
                <label for="cta_approx_claim_amount" class="font-outfit block text-sm font-semibold text-gray-800">
                  Approximate Claim Amount
                </label>
                <select
                  id="cta_approx_claim_amount"
                  name="approx_claim_amount"
                  v-model="form.approxClaimAmount"
                  class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                >
                  <option value="">Approximate Claim Amount</option>
                  <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                  <option value="$16,000 - $32,000">$16,000 - $32,000</option>
                  <option value="$33,000 - $58,000">$33,000 - $58,000</option>
                  <option value="$58,000+">$58,000+</option>
                  <option value="Not Sure">Not Sure</option>
                </select>
              </div>
            </div>

            <!-- Type of Funds -->
            <div class="space-y-2">
              <label class="font-outfit block text-sm font-semibold text-gray-800">
                Type of Funds <span class="text-[#c02b0a] text-xs">(Required)</span>
              </label>
              <div class="grid grid-cols-1 gap-2 text-sm text-gray-700">
                <label class="flex items-center space-x-2">
                  <input v-model="form.fundType" type="radio" name="fund_type" value="Property Settlement" required class="text-[#FF9900] border-gray-300" />
                  <span>Property Settlement</span>
                </label>
                <label class="flex items-center space-x-2">
                  <input v-model="form.fundType" type="radio" name="fund_type" value="Inheritance" class="text-[#FF9900] border-gray-300" />
                  <span>Inheritance</span>
                </label>
                <label class="flex items-center space-x-2">
                  <input v-model="form.fundType" type="radio" name="fund_type" value="Tax Sale Surplus" class="text-[#FF9900] border-gray-300" />
                  <span>Tax Sale Surplus</span>
                </label>
                <label class="flex items-center space-x-2">
                  <input v-model="form.fundType" type="radio" name="fund_type" value="401(k) or Retirement Account" class="text-[#FF9900] border-gray-300" />
                  <span>401(k) or Retirement Account</span>
                </label>
                <label class="flex items-center space-x-2">
                  <input v-model="form.fundType" type="radio" name="fund_type" value="Insurance Payout" class="text-[#FF9900] border-gray-300" />
                  <span>Insurance Payout</span>
                </label>
                <label class="flex items-center space-x-2">
                  <input v-model="form.fundType" type="radio" name="fund_type" value="Expropriation or Taking" class="text-[#FF9900] border-gray-300" />
                  <span>Expropriation or Taking</span>
                </label>
                <label class="flex items-center space-x-2">
                  <input v-model="form.fundType" type="radio" name="fund_type" value="Other" class="text-[#FF9900] border-gray-300" />
                  <span>Other</span>
                </label>
              </div>
            </div>

            <!-- Brief Description -->
            <div class="space-y-2">
              <label for="cta_funds_description" class="block text-sm font-semibold text-gray-800">
                Brief Description of Funds (if known)
              </label>
              <textarea
                id="cta_funds_description"
                rows="3"
                name="funds_description"
                v-model.trim="form.fundsDescription"
                class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                placeholder="Enter a brief description of the funds"
              ></textarea>
            </div>

            <!-- How Did You Hear / Who Are You Contacting As -->
            <!-- <div class="grid md:grid-cols-2 gap-4"> -->
              <div class="space-y-2">
                <label for="cta_referral_source" class="block text-sm font-semibold text-gray-800">
                  How Did You Hear About Us?
                </label>
                <select
                  id="cta_referral_source"
                  name="referral_source"
                  v-model="form.referralSource"
                  class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                >
                  <option value="Friend or Family">Friend or Family</option>
                  <option value="Online Search">Online Search</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Attorney / Professional">Attorney / Professional</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div class="space-y-2">
                <label class="block text-sm font-semibold text-gray-800">
                  Who Are You Contacting Us As? <span class="text-[#c02b0a] text-xs">(Required)</span>
                </label>
                <div class="space-y-2 text-sm text-gray-700">
                  <label class="flex items-center space-x-2">
                    <input v-model="form.contactingAs" type="radio" name="contacting_as" value="Individual or Family" required class="text-[#FF9900] border-gray-300" />
                    <span>Individual or Family</span>
                  </label>
                  <label class="flex items-center space-x-2">
                    <input v-model="form.contactingAs" type="radio" name="contacting_as" value="Business or Recovery Specialist" class="text-[#FF9900] border-gray-300" />
                    <span>Business or Recovery Specialist</span>
                  </label>
                </div>
              </div>
            <!-- </div> -->

            <!-- Company / Website -->
            <div class="grid md:grid-cols-2 gap-4">
              <div class="space-y-2">
                <label for="cta_company_name" class="block text-sm font-semibold text-gray-800">
                  Company Name
                </label>
                <input
                  id="cta_company_name"
                  type="text"
                  name="company_name"
                  autocomplete="organization"
                  v-model.trim="form.companyName"
                  class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                  placeholder="Company Name"
                />
              </div>
              <div class="space-y-2">
                <label for="cta_website" class="block text-sm font-semibold text-gray-800">
                  Website (optional)
                </label>
                <input
                  id="cta_website"
                  type="url"
                  name="website"
                  v-model.trim="form.website"
                  class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                  placeholder="Website (optional)"
                />
              </div>
            </div>

            <!-- How can we work together? -->
            <div class="space-y-2">
              <label for="cta_how_can_we_work_together" class="block text-sm font-semibold text-gray-800">
                How can we work together? <span class="text-[#c02b0a] text-xs">(Required)</span>
              </label>
              <textarea
                id="cta_how_can_we_work_together"
                rows="7"
                name="how_can_we_work_together"
                required
                v-model.trim="form.howCanWeWorkTogether"
                class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                placeholder="Briefly explain how ?"
              ></textarea>
            </div>

            <!-- Authorization Checkbox -->
           <!-- Authorization Checkbox -->
<!-- Authorization Checkbox -->
<div class="flex items-start space-x-3">
  <input
    id="cta_authorization"
    type="checkbox"
    name="authorization"
    required
    v-model="form.authorization"
    class="mt-1 h-4 w-4 rounded border-gray-300 text-[#FF9900] focus:ring-[#FF9900]"
  />
  <label for="cta_authorization" class="text-xs md:text-sm text-gray-700">
    I authorize Legacy Solutions LLC to review my eligibility for available funds and contact me regarding my claim.
  </label>
</div>

<!-- SMS Consent Checkbox -->
<div class="flex items-start space-x-3">
  <input
    id="cta_sms_consent"
    type="checkbox"
    name="sms_consent"
    required
    v-model="form.smsConsent"
    class="mt-1 h-4 w-4 rounded border-gray-300 text-[#FF9900] focus:ring-[#FF9900]"
  />
  <label for="cta_sms_consent" class="text-xs md:text-sm text-gray-700">
    I agree to receive SMS text messages from Legacy Solutions LLC. Message frequency varies. Message and data rates may apply. Reply STOP to opt out. Reply HELP for help. Consent is not a condition of purchase.
  </label>
</div>

<p class="text-xs text-gray-500">
  By submitting this form, you agree to our 
  <a href="/privacy-policy" class="underline">Privacy Policy</a>.
</p>

<!-- SMS Consent Checkbox -->
<div class="flex items-start space-x-3">
  <input
    id="cta_sms_consent"
    type="checkbox"
    name="sms_consent"
    required
    v-model="form.smsConsent"
    class="mt-1 h-4 w-4 rounded border-gray-300 text-[#FF9900] focus:ring-[#FF9900]"
  />
  <label for="cta_sms_consent" class="text-xs md:text-sm text-gray-700">
    I agree to receive SMS text messages from Legacy Solutions LLC. Message frequency varies. Message and data rates may apply. Reply STOP to opt out. Reply HELP for help. Consent is not a condition of purchase.
  </label>
</div>

<p class="text-xs text-gray-500">
  By submitting this form, you agree to our 
  <a href="/privacy-policy" class="underline">Privacy Policy</a>.
</p>

            <!-- Next Step Notice -->
            <div class="border-l-6 border-[#FF9900] bg-[#FFF5E6] px-4 py-[14px] text-xs md:text-sm text-gray-800 rounded-md">
              <span class="font-semibold text-[#FF6600]">Next step:</span>
              <span class="ml-1">
                You will be prompted to review and sign a secure authorization.
              </span>
            </div>

            <!-- Submit Button -->
            <div class="pt-2">
              <button
                type="submit"
                :disabled="submitting"
                class="w-full bg-[#FF9900] hover:bg-[#e58600] text-white font-bold uppercase rounded-xl py-3 md:py-4 text-sm md:text-base tracking-wide shadow-md transition-colors"
              >
                {{ submitting ? 'SUBMITTING…' : 'CONTINUE TO AUTHORIZATION' }}
              </button>
            </div>

            <p v-if="submitSuccess" class="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
              Thanks — we received your information and will reach out shortly.
            </p>
            <p v-if="submitError" class="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
              {{ submitError }}
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue';
import { upsertGhlContact } from '@/services/gohighlevel';

export default defineComponent({
  name: 'CTASection',
  setup() {
    const submitting = ref(false);
    const submitError = ref<string | null>(null);
    const submitSuccess = ref(false);

    const form = reactive({
      firstName: '',
      lastName: '',
      email: '',
      confirmEmail: '',
      phone: '',
      otherClaimants: '',
      parishOrCounty: '',
      preferredContactMethod: '',
      fundsState: 'Louisiana',
      approxClaimAmount: '',
      fundType: '',
      fundsDescription: '',
      referralSource: 'Friend or Family',
      contactingAs: '',
      companyName: '',
      website: '',
      howCanWeWorkTogether: '',
      authorization: false,
      smsConsent: false,
    });

    const onSubmit = async () => {
      submitError.value = null;
      submitSuccess.value = false;

      if (form.confirmEmail && form.confirmEmail !== form.email) {
        submitError.value = 'Please make sure your email and confirm email match.';
        return;
      }

      submitting.value = true;
      try {
        await upsertGhlContact({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          otherClaimants: form.otherClaimants,
          parishOrCounty: form.parishOrCounty,
          preferredContactMethod: form.preferredContactMethod,
          fundsState: form.fundsState,
          approxClaimAmount: form.approxClaimAmount,
          fundType: form.fundType,
          fundsDescription: form.fundsDescription,
          referralSource: form.referralSource,
          contactingAs: form.contactingAs,
          companyName: form.companyName,
          website: form.website,
          howCanWeWorkTogether: form.howCanWeWorkTogether,
          authorization: form.authorization,
        });

        submitSuccess.value = true;
      } catch (e) {
        submitError.value = e instanceof Error ? e.message : 'Something went wrong submitting the form.';
      } finally {
        submitting.value = false;
      }
    };

    onMounted(() => {
      const elements = document.querySelectorAll('.fadeInUp, .fadeInUp2s');

      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate');
              observer.unobserve(entry.target); // run once per element
            }
          });
        },
        {
          threshold: 0.1, // triggers as soon as element starts entering
        }
      );

      elements.forEach((el) => observer.observe(el));
    });

    return {
      form,
      submitting,
      submitError,
      submitSuccess,
      onSubmit,
    };
  },
});
</script>
<style scoped>
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
/* Hidden initially */
.fadeInUp {
  opacity: 0;
}
/* Animate only when .animate is added */
.animate.fadeInUp {
  animation: fadeInUp 1.2s ease forwards;
}
.animate.fadeInUp2s {
  animation: fadeInUp 2s ease forwards;
}
</style>
