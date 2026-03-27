<template>
  <section ref="sectionRef" class="bg-white py-8 md:py-[60px] px-[10px] md:px-0">
    <div class="container max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row md:justify-between flex-wrap">
        <!-- Left Column: Text Content -->
        <div class="basis-[59.214%] p-[10px] flex flex-col gap-5">
          <h2 class="fadeInUp font-outfit text-[28px] leading-[40px] md:text-4xl font-extrabold uppercase text-center md:text-left" style="color: #00274D;">
            START YOUR RECOVERY TODAY
          </h2>

          <p class="fadeInUp text-[16px] mb-[18px] text-gray-700 leading-relaxed">
            You've seen what's possible—recoveries of $16,000, $32,000, $58,000, even $78,000 from property settlements, insurance payouts, 401(k)s, inheritances, and other forgotten assets.
          </p>

          <p class="fadeInUp text-[16px] mb-[18px] text-gray-700 leading-relaxed">
            The process is quick, secure, and designed to save you time. Once you complete the short form below, our verification team reviews your information to confirm eligibility. If additional details are needed, you'll receive a message by text, email, or phone. Once verified, your recovery moves forward automatically under the authority of your signed agreement.
          </p>

          <p class="fadeInUp text-[16px] mb-[18px] text-gray-700 leading-relaxed">
            There's no risk and no upfront payment required. Legacy Solutions LLC is committed to making the process as effortless as possible. Whether you're located in one of Louisiana's 64 parishes or anywhere in the U.S., our team ensures your claim is handled efficiently and professionally.
          </p>
        </div>

        <!-- Right Column: Image -->
        <div class="fadeInRight basis-[40%] p-[10px]">
          <img 
            src="/images/Start-recovery-section/UNCLAIMED-FUNDS-COULD-BE-WAITING-1-1-1.png" 
            alt="People shaking hands"
            class="w-full max-w-md h-auto object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'StartRecoverySection',
  setup() {
    onMounted(() => {
      const elements = document.querySelectorAll('.fadeInUp, .fadeInRight');

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
@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
/* Hidden initially */
.fadeInUp,
.fadeInRight {
  opacity: 0;
}
/* Animate only when .animate is added */
.animate.fadeInUp {
  animation: fadeInUp 1.2s ease forwards;
}

.animate.fadeInRight {
  animation: fadeInRight 1.2s ease forwards;
}
</style>
