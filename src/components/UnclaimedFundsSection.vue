<template>
  <section ref="sectionRef" class="bg-white py-8 md:py-[60px]">
    <div class="container max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row flex-wrap md:items-center">
        <!-- Mobile: Image First, Desktop: Image Left -->
        <div class="fadeInLeft w-full md:basis-[40%] order-1 md:order-1 p-[10px] flex justify-center md:justify-start">
          <img 
            src="/images/Unclaimed-funds-section/UNCLAIMED-FUNDS-COULD-BE-WAITING-copy.png" 
            alt="Hands holding money and check" 
            class="w-full max-w-md h-auto rounded-xl object-cover"
          />
        </div>

        <div class="w-full md:basis-[60%] order-2 md:order-2 px-[20px] md:pr-[20px] md:pl-[30px] flex flex-col gap-5">
          <div class="flex flex-col md:flex-row md:items-center gap-4">
            <div class="flex justify-center md:justify-start">
              <svg width="42" height="37" viewBox="0 0 42 37" fill="none"><path d="M21 0C9.40242 0 0 7.69071 0 17.1786C0 21.2717 1.75629 25.0254 4.67742 27.9763C3.64711 32.1314 0.221484 35.8413 0.180469 35.885C0.0921399 35.9787 0.0330323 36.0964 0.0104632 36.2235C-0.0121059 36.3507 0.00285446 36.4817 0.0534923 36.6003C0.10413 36.719 0.188222 36.8201 0.295358 36.8912C0.402493 36.9622 0.527969 37 0.65625 37C6.09164 37 10.1711 34.3778 12.1898 32.7566C14.8714 33.7732 17.8492 34.3571 21 34.3571C32.5976 34.3571 42 26.6664 42 17.1786C42 7.69071 32.5976 0 21 0ZM22.9688 24.9783V26.4286C22.9688 27.1587 22.3814 27.75 21.6562 27.75H20.3438C19.6186 27.75 19.0312 27.1587 19.0312 26.4286V24.9643C18.0945 24.8528 17.2036 24.5356 16.4243 24.0178C15.9141 23.6783 15.8648 22.935 16.2971 22.4998L17.7343 21.0528C18.0411 20.744 18.498 20.7027 18.8918 20.8852C19.1527 21.0058 19.4381 21.0685 19.7334 21.0685H22.4224C22.8047 21.0685 23.1148 20.7563 23.1148 20.3731C23.1148 20.0634 22.908 19.7884 22.6127 19.7033L18.5054 18.5223C16.6802 17.9979 15.2234 16.4815 14.9855 14.5853C14.6532 11.9366 16.5465 9.67699 19.0312 9.37801V7.92857C19.0312 7.19848 19.6186 6.60714 20.3438 6.60714H21.6562C22.3814 6.60714 22.9688 7.19848 22.9688 7.92857V9.39288C23.9055 9.50437 24.7964 9.82152 25.5757 10.3394C26.0859 10.6788 26.1352 11.4221 25.7029 11.8573L24.2657 13.3043C23.9589 13.6132 23.502 13.6545 23.1082 13.472C22.8441 13.3504 22.557 13.2878 22.2666 13.2886H19.5776C19.1953 13.2886 18.8852 13.6008 18.8852 13.984C18.8852 14.2937 19.092 14.5687 19.3873 14.6538L23.4946 15.8348C25.3198 16.3601 26.7766 17.8756 27.0145 19.7719C27.3468 22.4197 25.4535 24.6793 22.9688 24.9783Z" fill="#00274D"></path></svg>
            </div>
  
            <h2 class="font-outfit text-[28px] md:text-4xl md:leading-[46px] font-bold uppercase leading-tight text-center md:text-left" style="color: #00274D;">
              UNCLAIMED FUNDS COULD BE WAITING FOR YOU
            </h2>
          </div>

          <p class="fadeInUp md:text-lg text-gray-700 leading-relaxed text-left mb-[18px]">
            Across all 64 Louisiana parishes and nationwide, thousands of people every year have money sitting unclaimed from property settlements, forgotten bank accounts, insurance payouts, 401(k) balances, inheritances, and other transactions. Many never realize these funds exist because records change and the process can feel overwhelming. At Legacy Solutions LLC, we make it simple to find and recover what's rightfully yours. Our team of experienced researchers and specialists use advanced tracking methods to locate eligible funds and guide you through a secure recovery process that requires no upfront costs.
          </p>

          <h3 class="fadeInUp font-outfit text-[18px] text-xl font-bold uppercase text-left" style="color: #00274D;">
            UNCLAIMED FUNDS COULD BE WAITING FOR YOU.
          </h3>

          <p class="fadeInUp text-base md:text-lg text-gray-700 leading-relaxed text-left">
            Our mission is straightforward. We help you recover your money without stress or confusion. Most steps can be completed online for your convenience. If we need additional information or a notarized form, our team will reach out personally by phone, email, or text to keep the process moving smoothly.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'UnclaimedFundsSection',
  setup() {
    onMounted(() => {
      const elements = document.querySelectorAll('.fadeInLeft, .fadeInUp');

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
@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translate3d(0, 60px, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}

/* Initial hidden state */
.fadeInLeft,
.fadeInUp {
  opacity: 0;
}

/* Animation only when animate class is added */
.animate.fadeInLeft {
  animation: fadeInLeft 1.2s ease forwards;
}

.animate.fadeInUp {
  animation: fadeInUp 1.2s ease forwards;
}
</style>
