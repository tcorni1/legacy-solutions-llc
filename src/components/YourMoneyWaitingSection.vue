<template>
  <section ref="sectionRef" class="bg-gray-50 py-8 md:py-[60px]">
    <div class="container max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row flex-wrap">
        <!-- Left Column: Image -->
        <div class="fadeInLeft basis-[40%] order-1 p-[10px]">
          <img 
            src="/images/Money-is-waiting-section/YOUR-MONEY-IS-WAITING-LETS-BRING-IT-HOME.png" 
            alt="People reviewing documents"
            class="w-full rounded-lg"
          />
        </div>

        <!-- Right Column: Text Content -->
        <div class="basis-[60%] order-2 p-[10px] md:pl-[20px] flex flex-col gap-5">
          <h2 class="fadeInUp font-outfit text-[28px] leading-[46px] md:text-4xl text-center md:text-left font-extrabold uppercase" style="color: #00274D;">
            YOUR MONEY IS WAITING. LET'S BRING IT HOME
          </h2>

          <p class="fadeInUp text-[16px] mb-[18px] text-gray-700 leading-relaxed">
            Every day, people across Louisiana and the United States miss out on funds that rightfully belong to them. These funds may be connected to property settlements, insurance payouts, 401(k)s, inheritances, and other financial assets. Many people hesitate to act because they think the process is complicated or risky. In reality, it’s simple when you work with professionals who know exactly how to get it done.
          </p>

          <p class="fadeInUp text-[16px] mb-[18px] text-gray-700 leading-relaxed">
            At Legacy Solutions LLC, our mission is simple. We locate what’s owed, manage the process, and reunite people with their money—efficiently, securely, and without any upfront cost. Whether you recently learned about available funds or simply want to see if you qualify, there may be money waiting for you right now.
          </p>
          <p class="fadeInUp text-[16px] mb-[18px] text-gray-700 leading-relaxed">
            Once you complete the form and sign electronically, we handle the recovery from start to finish. If additional information is needed, we’ll reach out by email, phone, or text. When your claim is verified, we finalize the recovery and notify you once your funds are ready.
          </p>
          <p class="fadeInUp text-[16px] mb-[18px] text-gray-700 leading-relaxed">
            Legacy Solutions proudly serves all 64 Louisiana parishes and clients across the nation. Whether your recovery involves property settlements, insurance refunds, or unclaimed financial accounts, our team knows how to locate, document, and deliver results.
          </p>

          <!-- Feature List -->
          <ul class="fadeInUp space-y-3">
            <li class="flex items-start space-x-3">
              <div class="flex-shrink-0 mt-1" style="color: #00274D;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 22 22" fill="none"><path d="M13.75 14.4375C13.75 14.8173 13.4423 15.125 13.0625 15.125H8.9375C8.55766 15.125 8.25 14.8173 8.25 14.4375V12.375H0V18.5625C0 19.6625 0.9625 20.625 2.0625 20.625H19.9375C21.0375 20.625 22 19.6625 22 18.5625V12.375H13.75V14.4375ZM19.9375 5.5H16.5V3.4375C16.5 2.3375 15.5375 1.375 14.4375 1.375H7.5625C6.4625 1.375 5.5 2.3375 5.5 3.4375V5.5H2.0625C0.9625 5.5 0 6.4625 0 7.5625V11H22V7.5625C22 6.4625 21.0375 5.5 19.9375 5.5ZM13.75 5.5H8.25V4.125H13.75V5.5Z" fill="#00274D"></path></svg>
              </div>
              <p class="text-[16px] text-gray-700">We handle everything from verification to final release so you only sign once, and we take care of the rest.</p>
            </li>
            <li class="flex items-start space-x-3">
              <div class="flex-shrink-0 mt-1" style="color: #00274D;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 42 37" fill="none"><path d="M21 0C9.40242 0 0 7.69071 0 17.1786C0 21.2717 1.75629 25.0254 4.67742 27.9763C3.64711 32.1314 0.221484 35.8413 0.180469 35.885C0.0921399 35.9787 0.0330323 36.0964 0.0104632 36.2235C-0.0121059 36.3507 0.00285446 36.4817 0.0534923 36.6003C0.10413 36.719 0.188222 36.8201 0.295358 36.8912C0.402493 36.9622 0.527969 37 0.65625 37C6.09164 37 10.1711 34.3778 12.1898 32.7566C14.8714 33.7732 17.8492 34.3571 21 34.3571C32.5976 34.3571 42 26.6664 42 17.1786C42 7.69071 32.5976 0 21 0ZM22.9688 24.9783V26.4286C22.9688 27.1587 22.3814 27.75 21.6562 27.75H20.3438C19.6186 27.75 19.0312 27.1587 19.0312 26.4286V24.9643C18.0945 24.8528 17.2036 24.5356 16.4243 24.0178C15.9141 23.6783 15.8648 22.935 16.2971 22.4998L17.7343 21.0528C18.0411 20.744 18.498 20.7027 18.8918 20.8852C19.1527 21.0058 19.4381 21.0685 19.7334 21.0685H22.4224C22.8047 21.0685 23.1148 20.7563 23.1148 20.3731C23.1148 20.0634 22.908 19.7884 22.6127 19.7033L18.5054 18.5223C16.6802 17.9979 15.2234 16.4815 14.9855 14.5853C14.6532 11.9366 16.5465 9.67699 19.0312 9.37801V7.92857C19.0312 7.19848 19.6186 6.60714 20.3438 6.60714H21.6562C22.3814 6.60714 22.9688 7.19848 22.9688 7.92857V9.39288C23.9055 9.50437 24.7964 9.82152 25.5757 10.3394C26.0859 10.6788 26.1352 11.4221 25.7029 11.8573L24.2657 13.3043C23.9589 13.6132 23.502 13.6545 23.1082 13.472C22.8441 13.3504 22.557 13.2878 22.2666 13.2886H19.5776C19.1953 13.2886 18.8852 13.6008 18.8852 13.984C18.8852 14.2937 19.092 14.5687 19.3873 14.6538L23.4946 15.8348C25.3198 16.3601 26.7766 17.8756 27.0145 19.7719C27.3468 22.4197 25.4535 24.6793 22.9688 24.9783Z" fill="#00274D"></path></svg>
              </div>
              <p class="text-[16px] text-gray-700">No upfront costs ever—we only get paid when you do.</p>
            </li>
            <li class="flex items-start space-x-3">
              <div class="flex-shrink-0 mt-1" style="color: #00274D;">
                <svg aria-hidden="true" width="20" height="20" fill="#00274D" class="e-font-icon-svg e-fas-envelope-open-text" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"></path></svg>
              </div>
              <p class="text-[16px] text-gray-700">Email, text, or phone updates keep you informed every step of the way.</p>
            </li>
            <li class="flex items-start space-x-3">
              <div class="flex-shrink-0 mt-1" style="color: #00274D;">
                <svg aria-hidden="true" fill="#00274D" width="20" height="20" class="e-font-icon-svg e-fas-map-marker-alt" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
              </div>
              <p class="text-[16px] text-gray-700">Serving all 64 Louisiana parishes and clients nationwide.</p>
            </li>
            <li class="flex items-start space-x-3">
              <div class="flex-shrink-0 mt-1" style="color: #00274D;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_3912_59)"><path d="M8.03592 7.81177H5.04492V10.853V12.9095V15.9448H8.03592H15.8479H18.8802V12.911V10.85V7.81177H15.8479H8.03592ZM7.93767 15.101C7.67142 14.093 6.88917 13.3025 5.88867 13.0213V10.7428C6.89067 10.46 7.67442 9.66427 7.93917 8.65552H10.3062C9.20292 9.29152 8.45892 10.481 8.45892 11.8415C8.45892 13.259 9.26442 14.4883 10.4412 15.1018L7.93767 15.101ZM13.2154 12.8495C13.1697 12.9478 13.1067 13.034 13.0279 13.109C12.9477 13.1825 12.8539 13.2425 12.7437 13.289C12.6342 13.3333 12.5134 13.361 12.3859 13.3678V13.6355H11.7852V13.2853C11.7529 13.2695 11.7237 13.2575 11.6929 13.244C11.6622 13.229 11.6344 13.2163 11.6052 13.2028V13.3348H11.0059V12.437H11.6052C11.6562 12.494 11.7079 12.5428 11.7574 12.5848C11.8069 12.626 11.8587 12.6598 11.9112 12.6875C11.9637 12.7138 12.0222 12.7348 12.0867 12.7475C12.1512 12.761 12.2247 12.7663 12.3064 12.7663C12.4159 12.7663 12.5044 12.7445 12.5742 12.7003C12.6462 12.6553 12.6829 12.5975 12.6829 12.5263C12.6829 12.4663 12.6657 12.4153 12.6274 12.3695C12.5907 12.3253 12.5442 12.2893 12.4857 12.257C12.4287 12.2263 12.3627 12.2023 12.2937 12.182C12.2224 12.1633 12.1534 12.1483 12.0859 12.1378C11.8444 12.0995 11.6494 12.044 11.5047 11.966C11.3599 11.888 11.2482 11.8048 11.1694 11.7125C11.0907 11.6218 11.0389 11.528 11.0157 11.4328C10.9909 11.3375 10.9789 11.2528 10.9789 11.1778C10.9789 11.069 10.9992 10.9685 11.0389 10.8703C11.0787 10.7735 11.1357 10.6873 11.2077 10.6123C11.2812 10.5358 11.3659 10.4728 11.4657 10.4233C11.5639 10.3738 11.6704 10.34 11.7882 10.322V10.0408H12.3882V10.3648C12.4752 10.391 12.5577 10.4248 12.6259 10.469V10.34H13.2252V11.2378H12.6214C12.5742 11.1838 12.5262 11.1365 12.4804 11.0945C12.4347 11.0533 12.3867 11.0195 12.3372 10.9933C12.2862 10.9655 12.2284 10.9453 12.1684 10.9303C12.1054 10.9153 12.0327 10.91 11.9509 10.91C11.8309 10.91 11.7387 10.9378 11.6742 10.9948C11.6112 11.0503 11.5789 11.1118 11.5789 11.1778C11.5789 11.3638 11.7784 11.4853 12.1782 11.5468C12.4257 11.5835 12.6237 11.6435 12.7699 11.7283C12.9162 11.8115 13.0302 11.9023 13.1052 12.002C13.1832 12.0988 13.2312 12.197 13.2522 12.2923C13.2739 12.3875 13.2844 12.4648 13.2844 12.5263C13.2844 12.644 13.2627 12.7498 13.2154 12.8495ZM18.0364 10.7533V13.0085C17.0187 13.277 16.2169 14.0803 15.9462 15.0988H13.8222C14.9982 14.4875 15.8059 13.256 15.8059 11.8385C15.8059 10.478 15.0619 9.28852 13.9572 8.65252H15.9447C16.2139 9.67777 17.0157 10.4803 18.0364 10.7533Z" fill="#00274D"></path><path d="M24.0005 2.21164L17.4733 0.608887L17.123 7.34989L19.0408 5.93014C19.0408 5.93014 21.5413 8.55364 19.8433 13.3086C25.7713 8.05864 22.2913 3.47839 22.2913 3.47839L24.0005 2.21164Z" fill="#00274D"></path><path d="M4.15725 10.6875C-1.76925 15.9375 1.70925 20.5192 1.70925 20.5192L0 21.7882L6.52875 23.391L6.8775 16.6485L4.96125 18.0675C4.96125 18.0675 2.45925 15.4455 4.15725 10.6875Z" fill="#00274D"></path></g><defs><clipPath id="clip0_3912_59"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>
              </div>
              <p class="text-[16px] text-gray-700">Recoveries often range from $16,000 to $78,000—real funds for real people.</p>
            </li>
            <li class="flex items-start space-x-3">
              <div class="flex-shrink-0 mt-1" style="color: #00274D;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 22 22" fill="none"><path d="M18.15 19.25H12.1V6.58496C12.8019 6.20082 13.3409 5.45832 13.5912 4.54523L18.1287 2.64344C18.4167 2.5227 18.5718 2.13297 18.4752 1.77289L18.1256 0.469219C18.029 0.109141 17.7172 -0.0846484 17.4292 0.0360937L13.3757 1.73465C12.9009 0.702969 12.0206 0 11 0C9.48131 0 8.25 1.53914 8.25 3.4375C8.25 3.58488 8.27028 3.72582 8.28472 3.86848L3.87131 5.71828C3.58325 5.83902 3.42822 6.22875 3.52481 6.58883L3.87441 7.8925C3.971 8.25258 4.28278 8.44637 4.57084 8.32562L9.45381 6.27902C9.59372 6.39805 9.74359 6.49902 9.90034 6.58496V21.3125C9.90034 21.6923 10.1465 22 10.4503 22H18.1503C18.4542 22 18.7003 21.6923 18.7003 21.3125V19.9375C18.7 19.5577 18.4539 19.25 18.15 19.25ZM21.9993 13.0625C21.9993 12.3673 22.0454 12.6874 19.0757 5.26324C18.469 3.74687 16.7317 3.74387 16.1239 5.26324C13.1292 12.751 13.2007 12.3892 13.2007 13.0625H13.2C13.2 14.9609 15.17 16.5 17.6 16.5C20.03 16.5 22 14.9609 22 13.0625H21.9993ZM15.125 12.375L17.6 6.1875L20.075 12.375H15.125ZM5.87572 10.7632C5.269 9.24687 3.53169 9.24387 2.92394 10.7632C-0.0708127 18.251 0.0006875 17.8892 0.0006875 18.5625H0C0 20.4609 1.97003 22 4.4 22C6.82997 22 8.8 20.4609 8.8 18.5625H8.79931C8.79931 17.8673 8.84538 18.1874 5.87572 10.7632ZM1.925 17.875L4.4 11.6875L6.875 17.875H1.925Z" fill="#00274D"></path></svg>
              </div>
              <p class="text-[16px] text-gray-700">Property settlements, insurance claims, 401(k)s, inheritances, and more.</p>
            </li>
            <li class="flex items-start space-x-3">
              <div class="flex-shrink-0 mt-1" style="color: #00274D;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 22 22" fill="none"><path d="M21.7047 0.820692C21.6771 0.692109 21.6129 0.574236 21.5199 0.481242C21.4269 0.388248 21.309 0.32409 21.1804 0.29648C19.7964 0 18.7137 0 17.6349 0C13.1993 0 10.5389 2.37184 8.5536 5.49992H4.07506C3.69258 5.50025 3.31772 5.60686 2.99234 5.80786C2.66697 6.00885 2.40389 6.29632 2.23249 6.63815L0.108405 10.8834C0.0299628 11.0407 -0.00697869 11.2154 0.00108649 11.3909C0.00915168 11.5665 0.061956 11.737 0.154488 11.8864C0.24702 12.0359 0.37621 12.1591 0.529796 12.2446C0.683383 12.3301 0.856271 12.3749 1.03205 12.3748H5.49212L4.52635 13.3403C4.26848 13.5982 4.12362 13.9479 4.12362 14.3125C4.12362 14.6771 4.26848 15.0268 4.52635 15.2846L6.71405 17.4721C6.84177 17.5998 6.9934 17.7012 7.16029 17.7703C7.32717 17.8394 7.50605 17.875 7.68669 17.875C7.86733 17.875 8.04621 17.8394 8.21309 17.7703C8.37998 17.7012 8.53162 17.5998 8.65933 17.4721L9.6251 16.5066V20.9685C9.62505 21.1441 9.66989 21.3169 9.75536 21.4704C9.84084 21.6239 9.96412 21.753 10.1135 21.8455C10.2629 21.938 10.4335 21.9908 10.609 21.9989C10.7845 22.007 10.9592 21.9702 11.1165 21.8918L15.3587 19.7696C15.7012 19.5986 15.9892 19.3355 16.1904 19.0099C16.3916 18.6843 16.498 18.309 16.4977 17.9263V13.44C19.6176 11.4506 21.9991 8.78226 21.9991 4.36986C22.0034 3.28706 22.0034 2.20427 21.7047 0.820692ZM16.5019 7.21865C16.1619 7.21865 15.8295 7.11785 15.5468 6.92899C15.2641 6.74014 15.0437 6.47171 14.9136 6.15765C14.7835 5.8436 14.7494 5.49802 14.8158 5.16462C14.8821 4.83122 15.0458 4.52497 15.2863 4.2846C15.5267 4.04423 15.8331 3.88054 16.1665 3.81422C16.5 3.7479 16.8457 3.78194 17.1599 3.91203C17.474 4.04211 17.7425 4.26241 17.9314 4.54505C18.1203 4.82769 18.2212 5.15999 18.2212 5.49992C18.2212 5.95576 18.04 6.39292 17.7176 6.71525C17.3952 7.03757 16.9579 7.21865 16.5019 7.21865Z" fill="#00274D"></path></svg>
              </div>
              <p class="text-[16px] text-gray-700">A fast, secure process built to eliminate delays and confusion.</p>
            </li>
          </ul>

          <!-- Call to Action Button -->
          <div class="pt-4 slideInUp">
            <button @click="$emit('scrollToCTA')" class="bg-[#FF9900] text-white font-bold uppercase px-10 py-5 md:px-8 py-3 md:py-4 rounded-lg transition-colors text-[16px] shadow-lg">
              START MY FREE FUNDS CHECK
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'YourMoneyWaitingSection',
  emits: ['scrollToCTA'],
  setup() {
    onMounted(() => {
      const elements = document.querySelectorAll('.fadeInLeft, .fadeInUp, .slideInUp');

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
@keyframes slideInUp {
  0% {
    opacity: 0;
    transform: translate3d(0, 80px, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
/* Initial hidden state */
.fadeInLeft,
.fadeInUp, .slideInUp {
  opacity: 0;
}

/* Animation only when animate class is added */
.animate.fadeInLeft {
  animation: fadeInLeft 1.2s ease forwards;
}

.animate.fadeInUp {
  animation: fadeInUp 1.2s ease forwards;
}
.animate.slideInUp {
  animation: slideInUp 1.2s ease forwards;
}
</style>
