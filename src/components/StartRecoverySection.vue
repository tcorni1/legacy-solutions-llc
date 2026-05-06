<template>
  <section id="cta-section" class="bg-white py-8 md:py-[60px] px-[10px] md:px-0">
    <div class="container max-w-7xl mx-auto">
      <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between flex-wrap">
        <div class="basis-full lg:basis-[50%] p-[10px] flex flex-col gap-5">
          <h2
            class="font-outfit text-[28px] leading-[40px] md:text-4xl font-extrabold uppercase text-center md:text-left"
            style="color: #00274D;"
          >
            START YOUR RECOVERY TODAY
          </h2>

          <p class="text-[16px] mb-[18px] text-gray-700 leading-relaxed">
            You've seen what's possible - recoveries of $16,000, $32,000, $58,000, even $78,000 from property settlements, insurance payouts, 401(k)s, inheritances, and other forgotten assets.
          </p>

          <p class="text-[16px] mb-[18px] text-gray-700 leading-relaxed">
            The process is quick, secure, and designed to save you time. Once you complete the short form, our verification team reviews your information to confirm eligibility. If additional details are needed, you'll receive a message by text, email, or phone.
          </p>

          <p class="text-[16px] mb-[18px] text-gray-700 leading-relaxed">
            There's no risk and no upfront payment required. Whether you're located in one of Louisiana's 64 parishes or anywhere in the U.S., our team ensures your claim is handled efficiently and professionally.
          </p>

          <div class="md:flex md:justify-center lg:justify-start">
            <img
              src="/images/Start-recovery-section/UNCLAIMED-FUNDS-COULD-BE-WAITING-1-1-1.png"
              alt="People shaking hands"
              class="w-full max-w-md h-auto object-contain rounded-lg"
            />
          </div>
        </div>

        <div
          id="ghl-form-section"
          class="bg-white rounded-2xl shadow-sm basis-full lg:basis-[50%] p-[10px] scroll-mt-24"
        >
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/cengkrYrQoPVSoTyKhLf"
            style="width: 100%; height: 2217px; border: none; border-radius: 8px;"
            id="inline-cengkrYrQoPVSoTyKhLf"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Form 2"
            data-height="2217"
            data-layout-iframe-id="inline-cengkrYrQoPVSoTyKhLf"
            data-form-id="cengkrYrQoPVSoTyKhLf"
            title="Form 2"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  const existingScript = document.getElementById('ghl-form-embed-script');

  if (!existingScript) {
    const script = document.createElement('script');
    script.id = 'ghl-form-embed-script';
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
  }
});
</script>
