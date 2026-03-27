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
          <form class="space-y-6" method="get" action="#">
            <!-- First / Last Name -->
            <div class="grid md:grid-cols-2 gap-4">
              <div class="space-y-2">
                <label class="font-outfit block text-sm font-semibold text-gray-800">
                  First Name <span class="text-[#c02b0a] text-xs">(Required)</span>
                </label>
                <input
                  type="text"
                  name="first_name"
                  autocomplete="given-name"
                  required
                  class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                  placeholder="Enter your full legal name."
                />
              </div>
              <div class="space-y-2">
                <label class="font-outfit block text-sm font-semibold text-gray-800">
                  Last Name <span class="text-[#c02b0a] text-xs">(Required)</span>
                </label>
                <input
                  type="text"
                  name="last_name"
                  autocomplete="family-name"
                  required
                  class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                  placeholder="Enter your full legal name."
                />
              </div>
            </div>

            <!-- Email / Confirm Email -->
            <div class="grid md:grid-cols-2 gap-4">
              <div class="space-y-2">
                <label class="font-outfit block text-sm font-semibold text-gray-800">
                  Email Address <span class="text-[#c02b0a] text-xs">(Required)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  autocomplete="email"
                  required
                  class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                  placeholder="Enter Email"
                />
              </div>
              <div class="space-y-2">
                <label class="font-outfit block text-sm font-semibold text-gray-800">
                  Confirm Email
                </label>
                <input
                  type="email"
                  name="confirm_email"
                  autocomplete="email"
                  class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                  placeholder="Confirm Email"
                />
              </div>
            </div>

            <!-- Phone / Other Claimants -->
            <div class="grid md:grid-cols-2 gap-4">
              <div class="space-y-2">
                <label class="font-outfitblock text-sm font-semibold text-gray-800">
                  Phone Number <span class="text-[#c02b0a] text-xs">(Required)</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  autocomplete="tel"
                  required
                  class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                  placeholder="Write Phone Number without +1"
                />
                <p class="text-[11px] text-gray-500">
                  Please enter your phone number without +1.
                </p>
              </div>
              <div class="space-y-2">
                <label class="font-outfit block text-sm font-semibold text-gray-800">
                  Other Potential Claimants
                </label>
                <input
                  type="text"
                  name="other_claimants"
                  class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                  placeholder="List any family members"
                />
              </div>
            </div>

            <!-- Parish / Preferred Contact -->
            <div class="grid md:grid-cols-2 gap-4">
              <div class="space-y-2">
                <label class="font-outfit block text-sm font-semibold text-gray-800">
                  Parish or County (if known)
                </label>
                <input
                  type="text"
                  name="parish_or_county"
                  class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                  placeholder="Parish or County (if known)"
                />
              </div>
              <div class="space-y-2">
                <label class="font-outfit block text-sm font-semibold text-gray-800">
                  Preferred Contact Method
                </label>
                <input
                  type="text"
                  name="preferred_contact_method"
                  class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                  placeholder="Write Phone Number"
                />
              </div>
            </div>

            <!-- State / Approximate Amount -->
            <div class="grid md:grid-cols-2 gap-4">
              <div class="space-y-2">
                <label class="font-outfit block text-sm font-semibold text-gray-800">
                  State Where Funds Are Located <span class="text-[#c02b0a] text-xs">(Required)</span>
                </label>
                <select
                  name="funds_state"
                  required
                  class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                >
                  <option>Louisiana</option>
                  <option>Other / Not Sure</option>
                </select>
              </div>
              <div class="space-y-2">
                <label class="font-outfit block text-sm font-semibold text-gray-800">
                  Approximate Claim Amount
                </label>
                <select
                  name="approx_claim_amount"
                  class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                >
                  <option>Approximate Claim Amount</option>
                  <option>$5,000 - $15,000</option>
                  <option>$16,000 - $32,000</option>
                  <option>$33,000 - $58,000</option>
                  <option>$58,000+</option>
                  <option>Not Sure</option>
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
                  <input type="radio" name="fund_type" value="Property Settlement" required class="text-[#FF9900] border-gray-300" />
                  <span>Property Settlement</span>
                </label>
                <label class="flex items-center space-x-2">
                  <input type="radio" name="fund_type" value="Inheritance" class="text-[#FF9900] border-gray-300" />
                  <span>Inheritance</span>
                </label>
                <label class="flex items-center space-x-2">
                  <input type="radio" name="fund_type" value="Tax Sale Surplus" class="text-[#FF9900] border-gray-300" />
                  <span>Tax Sale Surplus</span>
                </label>
                <label class="flex items-center space-x-2">
                  <input type="radio" name="fund_type" value="401(k) or Retirement Account" class="text-[#FF9900] border-gray-300" />
                  <span>401(k) or Retirement Account</span>
                </label>
                <label class="flex items-center space-x-2">
                  <input type="radio" name="fund_type" value="Insurance Payout" class="text-[#FF9900] border-gray-300" />
                  <span>Insurance Payout</span>
                </label>
                <label class="flex items-center space-x-2">
                  <input type="radio" name="fund_type" value="Expropriation or Taking" class="text-[#FF9900] border-gray-300" />
                  <span>Expropriation or Taking</span>
                </label>
                <label class="flex items-center space-x-2">
                  <input type="radio" name="fund_type" value="Other" class="text-[#FF9900] border-gray-300" />
                  <span>Other</span>
                </label>
              </div>
            </div>

            <!-- Brief Description -->
            <div class="space-y-2">
              <label class="block text-sm font-semibold text-gray-800">
                Brief Description of Funds (if known)
              </label>
              <textarea
                rows="3"
                name="funds_description"
                class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                placeholder="Enter a brief description of the funds"
              ></textarea>
            </div>

            <!-- How Did You Hear / Who Are You Contacting As -->
            <!-- <div class="grid md:grid-cols-2 gap-4"> -->
              <div class="space-y-2">
                <label class="block text-sm font-semibold text-gray-800">
                  How Did You Hear About Us?
                </label>
                <select
                  name="referral_source"
                  class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                >
                  <option>Friend or Family</option>
                  <option>Online Search</option>
                  <option>Social Media</option>
                  <option>Attorney / Professional</option>
                  <option>Other</option>
                </select>
              </div>
              <div class="space-y-2">
                <label class="block text-sm font-semibold text-gray-800">
                  Who Are You Contacting Us As? <span class="text-[#c02b0a] text-xs">(Required)</span>
                </label>
                <div class="space-y-2 text-sm text-gray-700">
                  <label class="flex items-center space-x-2">
                    <input type="radio" name="contacting_as" value="Individual or Family" required class="text-[#FF9900] border-gray-300" />
                    <span>Individual or Family</span>
                  </label>
                  <label class="flex items-center space-x-2">
                    <input type="radio" name="contacting_as" value="Business or Recovery Specialist" class="text-[#FF9900] border-gray-300" />
                    <span>Business or Recovery Specialist</span>
                  </label>
                </div>
              </div>
            <!-- </div> -->

            <!-- Company / Website -->
            <div class="grid md:grid-cols-2 gap-4">
              <div class="space-y-2">
                <label class="block text-sm font-semibold text-gray-800">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company_name"
                  autocomplete="organization"
                  class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                  placeholder="Company Name"
                />
              </div>
              <div class="space-y-2">
                <label class="block text-sm font-semibold text-gray-800">
                  Website (optional)
                </label>
                <input
                  type="url"
                  name="website"
                  class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                  placeholder="Website (optional)"
                />
              </div>
            </div>

            <!-- How can we work together? -->
            <div class="space-y-2">
              <label class="block text-sm font-semibold text-gray-800">
                How can we work together? <span class="text-[#c02b0a] text-xs">(Required)</span>
              </label>
              <textarea
                rows="7"
                name="how_can_we_work_together"
                required
                class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent"
                placeholder="Briefly explain how ?"
              ></textarea>
            </div>

            <!-- Authorization Checkbox -->
            <div class="flex items-start space-x-3">
              <input
                type="checkbox"
                name="authorization"
                required
                class="mt-1 h-4 w-4 rounded border-gray-300 text-[#FF9900] focus:ring-[#FF9900]"
              />
              <p class="text-xs md:text-sm text-gray-700">
                I authorize Legacy Solutions LLC to review my eligibility for available funds and contact me regarding my claim.
              </p>
            </div>

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
                class="w-full bg-[#FF9900] hover:bg-[#e58600] text-white font-bold uppercase rounded-xl py-3 md:py-4 text-sm md:text-base tracking-wide shadow-md transition-colors"
              >
                CONTINUE TO AUTHORIZATION
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'CTASection',
  setup() {
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
