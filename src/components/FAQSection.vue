<template>
  <section ref="sectionRef" class="bg-white px-[10px] md:px-0 py-8 md:py-[60px]">
    <div class="container max-w-7xl mx-auto">

      <div class="flex flex-col md:flex-row flex-wrap">
        <!-- Left Column: FAQ Items -->
        <div class="basis-[60%] px-[10px] md:pl-[30px] md:pr-[20px] flex flex-col gap-5">
          <h2 class="font-outfit text-[28px] leading-[39.2px] md:text-4xl font-bold uppercase text-center md:text-left" style="color: #00274D;">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p class="text-[16px] text-gray-600 mb-[18px] text-center md:text-left">
            Common Questions, Straight Answers
          </p>
          <div>
            <!-- FAQ Item 1 -->
            <div class="bg-[#FAFBFC] rounded-lg border border-gray-200 p-5 mb-[10px]">
              <button 
                @click="toggleFAQ(0)"
                class="font-outfit text-[16px] font-semibold text-[#00274d] w-full flex items-center justify-between text-left"
              >
                <h3 class="">
                  What does Legacy Solutions LLC do?
                </h3>
                <span style="font-size: x-large;">
                  <span v-if="openFAQ === 0">-</span>
                  <span v-else>+</span>
                </span>
              </button>
              <div v-if="openFAQ === 0" class="mt-4 text-sm md:text-base text-gray-700">
                <p>We help individuals and businesses recover funds that may be owed to them through structured, compliant recovery services. Our team manages the research, verification, and claims process from start to finish.</p>
              </div>
            </div>
  
            <!-- FAQ Item 2 -->
            <div class="bg-[#FAFBFC] rounded-lg border border-gray-200 p-5 mb-[10px]">
              <button 
                @click="toggleFAQ(1)"
                class="font-outfit text-[16px] font-semibold text-[#00274d] w-full flex items-center justify-between text-left"
              >
                <h3 class="">
                  Who qualifies for recovery services?
                </h3>
                <span style="font-size: x-large;">
                  <span v-if="openFAQ === 1">-</span>
                  <span v-else>+</span>
                </span>
              </button>
              <div v-if="openFAQ === 1" class="mt-4 text-sm md:text-base text-gray-700">
                <p>Anyone who believes they may have unclaimed, misdirected, or recoverable funds can submit a request. Each case is reviewed individually and we provide clear next steps after evaluation.</p>
              </div>
            </div>
  
            <!-- FAQ Item 3 -->
            <div class="bg-[#FAFBFC] rounded-lg border border-gray-200 p-5 mb-[10px]">
              <button 
                @click="toggleFAQ(2)"
                class="font-outfit text-[16px] font-semibold text-[#00274d] w-full flex items-center justify-between text-left"
              >
                <h3 class="">
                  Is there an upfront cost?
                </h3>
                <span style="font-size: x-large;">
                  <span v-if="openFAQ === 2">-</span>
                  <span v-else>+</span>
                </span>
              </button>
              <div v-if="openFAQ === 2" class="mt-4 text-sm md:text-base text-gray-700">
                <p>No. Our services are performance-based. If we do not recover funds, you do not pay. Compensation is tied to successful recovery.</p>
              </div>
            </div>
  
            <!-- FAQ Item 4 -->
            <div class="bg-[#FAFBFC] rounded-lg border border-gray-200 p-5 mb-[10px]">
              <button 
                @click="toggleFAQ(3)"
                class="font-outfit text-[16px] font-semibold text-[#00274d] w-full flex items-center justify-between text-left"
              >
                <h3 class="">
                  How long does the process take?
                </h3>
                <span style="font-size: x-large;">
                  <span v-if="openFAQ === 3">-</span>
                  <span v-else>+</span>
                </span>
              </button>
              <div v-if="openFAQ === 3" class="mt-4 text-sm md:text-base text-gray-700">
                <p>Timeframes vary depending on the complexity of the claim, but we begin review immediately and keep clients informed throughout the process.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Illustration -->
        <div class="fadeIn basis-[40%] p-[10px]">
          <img 
            src="/images/FAQ/FREQUENTLY-ASKED-QUESTIONS-1.png" 
            alt="FAQ illustration"
            class="w-full max-w-md h-auto object-contain"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'FAQSection',
  setup() {
    onMounted(() => {
      const elements = document.querySelectorAll('.fadeIn');

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
    const openFAQ = ref<number | null>(null);

    const toggleFAQ = (index: number) => {
      openFAQ.value = openFAQ.value === index ? null : index;
    };

    return {
      openFAQ,
      toggleFAQ,
    };
  },
});
</script>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
/* Hidden initially */
.fadeIn {
  opacity: 0;
}
/* Animate only when .animate is added */
.animate.fadeIn {
  animation: fadeIn 1.2s ease forwards;
}
</style>
