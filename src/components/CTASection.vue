<template>
  <section id="cta-section" class="bg-gray-50 py-8 md:py-[60px] px-[10px] md:px-0">
    <div class="container max-w-7xl mx-auto">
      <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between flex-wrap">
        <div class="basis-full lg:basis-[50%] p-[10px] flex flex-col gap-5">
          <h2
            class="fadeInUp font-outfit text-[28px] md:text-4xl font-extrabold uppercase leading-[40px] text-center md:text-left"
            style="color: #00274D;"
          >
            START YOUR CLAIM - QUICK, SECURE, AND FREE
          </h2>

          <p class="fadeInUp text-[16px] mb-[18px] text-gray-700 leading-relaxed">
            Whether your funds are connected to Louisiana or another state,
            Legacy Solutions LLC makes it easy to recover what's rightfully yours.
          </p>

          <p class="fadeInUp text-[16px] mb-[18px] text-gray-700 leading-relaxed">
            Serving all 64 Louisiana parishes and clients nationwide.
          </p>

          <div class="fadeInUp md:flex md:justify-center lg:justify-start">
            <img
              src="/images/contact-section/CONTACT-FORM-SECTION-2.png"
              alt="Contact form illustration"
              class="max-w-[85%]"
            />
          </div>
        </div>

        <div class="fadeInUp2s bg-white rounded-2xl shadow-sm basis-full lg:basis-[50%] p-[10px]">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/cengkrYrQoPVSoTyKhLf"
            style="width: 100%; height: 700px; border: none; border-radius: 8px;"
            id="inline-cengkrYrQoPVSoTyKhLf"
            data-layout='{"id":"INLINE"}'
            data-trigger-type="alwaysShow"
            data-form-name="Form 2"
            data-height="2287"
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

.fadeInUp {
  opacity: 0;
}

.animate.fadeInUp {
  animation: fadeInUp 1.2s ease forwards;
}

.animate.fadeInUp2s {
  animation: fadeInUp 2s ease forwards;
}
</style>
