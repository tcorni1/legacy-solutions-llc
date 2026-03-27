<template>
  <section ref="sectionRef" class="bg-white py-8 md:pt-[40px] md:pb-[60px] px-[10px] md:px-0">
    <div class="container max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row flex-wrap">
        <!-- Left Column: Text Content -->
        <div class="basis-[62%] p-[10px] flex flex-col gap-5">
          <h2 class="fadeInUp font-outfit text-3xl leading-[39.2px] text-center md:text-4xl md:text-left font-bold uppercase" style="color: #00274D;">
            WHY CHOOSE LEGACY SOLUTIONS LLC
          </h2>

          <p class="fadeInUp text-[16px] text-gray-600 mb-2 md:mb-[18px]">
            Trusted by property owners across all 64 Louisiana parishes and nationwide.
          </p>
          <p class="fadeInUp text-[16px] text-gray-700 leading-relaxed">
            When it comes to recovering unclaimed property, surplus proceeds, or forgotten financial assets, experience and precision matter. Legacy Solutions LLC stands apart because we make a complicated process simple, secure, and successful.
          </p>
          <p class="fadeInUp text-[16px] text-gray-700 leading-relaxed">
            Clients choose us because they value speed, security, and confidence that their claims are managed by experts who understand every aspect of recovery—from documentation and verification to communication and follow-through.
          </p>

          <!-- Feature Blocks -->
          <div class="space-y-6">
            <!-- Comprehensive Expertise -->
            <div class="fadeInUp border border-gray-200 rounded-lg p-[25px] my-[10px] mr-[10px]">
              <div class="flex flex-col items-center text-center md:text-left md:flex-row md:items-start gap-5">
                <div class="flex-shrink-0" style="color: #00274D;">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#00274D" width="30" height="30" viewBox="0 0 39 39"><g clip-path="url(#clip0_3915_210)"><path d="M38.2093 7.01619L20.3562 0.155388C19.8045 -0.0517961 19.1963 -0.0517961 18.6446 0.155388L0.790664 7.01619C0.558417 7.10333 0.358287 7.25926 0.217006 7.46315C0.0757246 7.66704 1.86067e-05 7.90919 0 8.15724L0 10.9687C0 11.6421 0.545391 12.1875 1.21875 12.1875H37.7812C38.4546 12.1875 39 11.6421 39 10.9687V8.15724C39 7.64918 38.6846 7.19443 38.2093 7.01619ZM4.875 14.625V26.8125H3.65625C2.98289 26.8125 2.4375 27.3579 2.4375 28.0312V31.6875H36.5625V28.0312C36.5625 27.3579 36.0171 26.8125 35.3438 26.8125H34.125V14.625H29.25V26.8125H21.9375V14.625H17.0625V26.8125H9.75V14.625H4.875ZM37.7812 34.125H1.21875C0.545391 34.125 0 34.6704 0 35.3437V37.7812C0 38.4546 0.545391 39 1.21875 39H37.7812C38.4546 39 39 38.4546 39 37.7812V35.3437C39 34.6704 38.4546 34.125 37.7812 34.125Z" fill="#00274D"></path></g><defs><clipPath id="clip0_3915_210"><rect width="39" height="39" fill="white"></rect></clipPath></defs></svg>
                </div>
                <div>
                  <h3 class="font-outfit text-[20px] md:text-xl font-bold mt-[8px] mb-[18px]" style="color: #00274D;">
                    Comprehensive Expertise
                  </h3>
                  <p class="text-[16px] text-gray-700 leading-relaxed">
                    We specialize in surplus recovery, unclaimed settlements, government takings, insurance payouts, and retirement account recoveries. Our experience extends across Louisiana and beyond, helping clients navigate the process with accuracy and ease.
                  </p>
                </div>
              </div>
            </div>
            <div class="fadeInUp border border-gray-200 rounded-lg p-[25px] my-[10px] mr-[10px]">
              <div class="flex flex-col items-center text-center md:text-left md:flex-row md:items-start gap-5">
                <div class="flex-shrink-0" style="color: #00274D;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="#00274D"><path d="M18.8574 19.9913C18.8574 18.7294 18.411 17.652 17.5181 16.7591C16.6253 15.8663 15.5479 15.4199 14.286 15.4199C13.0241 15.4199 11.9467 15.8663 11.0539 16.7591C10.161 17.652 9.71456 18.7294 9.71456 19.9913C9.71456 21.2532 10.161 22.3306 11.0539 23.2234C11.9467 24.1163 13.0241 24.5627 14.286 24.5627C15.5479 24.5627 16.6253 24.1163 17.5181 23.2234C18.411 22.3306 18.8574 21.2532 18.8574 19.9913ZM32.5717 29.1341C32.5717 28.5151 32.3455 27.9794 31.8931 27.527C31.4408 27.0746 30.905 26.8484 30.286 26.8484C29.6669 26.8484 29.1312 27.0746 28.6788 27.527C28.2265 27.9794 28.0003 28.5151 28.0003 29.1341C28.0003 29.7651 28.2235 30.3038 28.6699 30.7502C29.1164 31.1966 29.655 31.4199 30.286 31.4199C30.9169 31.4199 31.4556 31.1966 31.902 30.7502C32.3485 30.3038 32.5717 29.7651 32.5717 29.1341ZM32.5717 10.8484C32.5717 10.2294 32.3455 9.69366 31.8931 9.24128C31.4408 8.7889 30.905 8.56271 30.286 8.56271C29.6669 8.56271 29.1312 8.7889 28.6788 9.24128C28.2265 9.69366 28.0003 10.2294 28.0003 10.8484C28.0003 11.4794 28.2235 12.0181 28.6699 12.4645C29.1164 12.9109 29.655 13.1341 30.286 13.1341C30.9169 13.1341 31.4556 12.9109 31.902 12.4645C32.3485 12.0181 32.5717 11.4794 32.5717 10.8484ZM25.7146 18.3663V21.6699C25.7146 21.7889 25.6728 21.905 25.5894 22.0181C25.506 22.1312 25.4108 22.1937 25.3037 22.2055L22.5358 22.6341C22.4048 23.0507 22.2143 23.5031 21.9644 23.9912C22.3692 24.5627 22.9049 25.2472 23.5716 26.0448C23.655 26.1638 23.6967 26.2829 23.6967 26.4019C23.6967 26.5448 23.655 26.6579 23.5716 26.7412C23.2978 27.0984 22.8067 27.6311 22.0983 28.3394C21.39 29.0478 20.9228 29.4019 20.6966 29.4019C20.5655 29.4019 20.4405 29.3602 20.3216 29.2768L18.268 27.6697C17.8275 27.8958 17.3692 28.0804 16.893 28.2232C16.7621 29.5089 16.6252 30.4316 16.4823 30.9911C16.3988 31.2768 16.2203 31.4197 15.9466 31.4197H12.6251C12.4941 31.4197 12.375 31.375 12.268 31.2857C12.1608 31.1963 12.1012 31.0922 12.0894 30.9731L11.6787 28.241C11.2739 28.1219 10.8275 27.9374 10.3394 27.6874L8.23228 29.2767C8.14904 29.3601 8.02999 29.4019 7.87514 29.4019C7.74428 29.4019 7.61928 29.3542 7.50014 29.259C5.78585 27.6757 4.92871 26.7233 4.92871 26.4019C4.92871 26.2946 4.97037 26.1815 5.05371 26.0626C5.17276 25.8959 5.4168 25.5804 5.78585 25.1161C6.1549 24.6519 6.43466 24.2888 6.62514 24.0269C6.35133 23.503 6.14299 23.0149 6.00014 22.5626L3.28585 22.134C3.1668 22.1226 3.06561 22.066 2.98228 21.9643C2.89904 21.8632 2.85742 21.7472 2.85742 21.6163V18.3127C2.85742 18.1937 2.89909 18.0776 2.98242 17.9645C3.06576 17.8513 3.16099 17.7889 3.26814 17.7771L6.03599 17.3485C6.16704 16.9318 6.35752 16.4794 6.60742 15.9913C6.20266 15.4199 5.66695 14.7354 5.00028 13.9378C4.91695 13.8067 4.87528 13.6877 4.87528 13.5806C4.87528 13.4378 4.91695 13.3187 5.00028 13.2235C5.26218 12.8663 5.75028 12.3366 6.46456 11.6342C7.17885 10.9318 7.64909 10.5806 7.87528 10.5806C8.00633 10.5806 8.13133 10.6222 8.25028 10.7055L10.3039 12.3126C10.7086 12.0983 11.1669 11.9079 11.6789 11.7412C11.8097 10.4555 11.9466 9.53882 12.0896 8.9912C12.173 8.70548 12.3516 8.56263 12.6253 8.56263H15.9467C16.0778 8.56263 16.1968 8.60729 16.3039 8.69663C16.4111 8.78596 16.4706 8.89012 16.4824 9.00911L16.8931 11.7413C17.2979 11.8603 17.7443 12.0448 18.2324 12.2948L20.3396 10.7055C20.4348 10.6223 20.5538 10.5807 20.6967 10.5807C20.8276 10.5807 20.9526 10.6283 21.0717 10.7235C22.786 12.3069 23.6431 13.2593 23.6431 13.5807C23.6431 13.6877 23.6014 13.8008 23.518 13.92C23.3751 14.1104 23.1251 14.4319 22.768 14.8843C22.4108 15.3366 22.143 15.6938 21.9644 15.9557C22.2382 16.5271 22.4406 17.0152 22.5716 17.42L25.2858 17.8307C25.4049 17.8545 25.5061 17.917 25.5894 18.0181C25.6728 18.1193 25.7146 18.2353 25.7146 18.3663ZM37.1431 27.8841V30.3841C37.1431 30.5746 36.2562 30.7591 34.4824 30.9377C34.3396 31.2591 34.161 31.5687 33.9467 31.8663C34.5538 33.2115 34.8574 34.0329 34.8574 34.3306C34.8574 34.3782 34.8336 34.4198 34.786 34.4554C33.3336 35.3007 32.5955 35.7233 32.5717 35.7233C32.4765 35.7233 32.2027 35.4435 31.7503 34.884C31.2979 34.3245 30.9884 33.9197 30.8217 33.6697C30.5836 33.6935 30.405 33.7054 30.286 33.7054C30.1669 33.7054 29.9884 33.6935 29.7503 33.6697C29.5836 33.9197 29.2741 34.3245 28.8217 34.884C28.3693 35.4435 28.0955 35.7233 28.0003 35.7233C27.9765 35.7233 27.2384 35.3007 25.786 34.4554C25.7384 34.4198 25.7146 34.3782 25.7146 34.3306C25.7146 34.0329 26.0181 33.2115 26.6253 31.8663C26.411 31.5687 26.2324 31.2591 26.0896 30.9377C24.3158 30.7592 23.4288 30.5747 23.4288 30.3841V27.8841C23.4288 27.6937 24.3158 27.5091 26.0896 27.3306C26.2444 26.9853 26.423 26.6758 26.6253 26.402C26.0181 25.0568 25.7146 24.2353 25.7146 23.9377C25.7146 23.8901 25.7384 23.8484 25.786 23.8126C25.8336 23.7888 26.0419 23.6697 26.411 23.4554C26.78 23.2411 27.1312 23.0388 27.4646 22.8483C27.7979 22.6578 27.9765 22.5626 28.0003 22.5626C28.0955 22.5626 28.3693 22.8394 28.8217 23.3929C29.2741 23.9465 29.5836 24.3483 29.7503 24.5983C29.9884 24.5745 30.1669 24.5626 30.286 24.5626C30.405 24.5626 30.5836 24.5745 30.8217 24.5983C31.4288 23.753 31.9765 23.0864 32.4646 22.5983L32.5717 22.5626C32.6193 22.5626 33.3574 22.9792 34.786 23.8126C34.8336 23.8484 34.8574 23.8901 34.8574 23.9377C34.8574 24.2353 34.5538 25.0568 33.9467 26.402C34.1491 26.6758 34.3277 26.9853 34.4824 27.3306C36.2562 27.509 37.1431 27.6936 37.1431 27.8841ZM37.1431 9.59843V12.0984C37.1431 12.2889 36.2562 12.4734 34.4824 12.652C34.3396 12.9734 34.161 13.2829 33.9467 13.5806C34.5538 14.9258 34.8574 15.7472 34.8574 16.0449C34.8574 16.0925 34.8336 16.1342 34.786 16.17C33.3336 17.0152 32.5955 17.4379 32.5717 17.4379C32.4765 17.4379 32.2027 17.1581 31.7503 16.5986C31.2979 16.039 30.9884 15.6343 30.8217 15.3843C30.5836 15.4081 30.405 15.42 30.286 15.42C30.1669 15.42 29.9884 15.4081 29.7503 15.3843C29.5836 15.6343 29.2741 16.039 28.8217 16.5986C28.3693 17.1581 28.0955 17.4379 28.0003 17.4379C27.9765 17.4379 27.2384 17.0152 25.786 16.17C25.7384 16.1342 25.7146 16.0925 25.7146 16.0449C25.7146 15.7472 26.0181 14.9258 26.6253 13.5806C26.411 13.2829 26.2324 12.9734 26.0896 12.652C24.3158 12.4735 23.4288 12.289 23.4288 12.0984V9.59843C23.4288 9.40795 24.3158 9.22343 26.0896 9.04485C26.2444 8.69962 26.423 8.39009 26.6253 8.11628C26.0181 6.77105 25.7146 5.94962 25.7146 5.652C25.7146 5.60438 25.7384 5.56266 25.786 5.52686C25.8336 5.50305 26.0419 5.384 26.411 5.16971C26.78 4.95543 27.1312 4.75305 27.4646 4.56257C27.7979 4.37209 27.9765 4.27686 28.0003 4.27686C28.0955 4.27686 28.3693 4.55364 28.8217 5.1072C29.2741 5.66078 29.5836 6.06257 29.7503 6.31257C29.9884 6.28876 30.1669 6.27686 30.286 6.27686C30.405 6.27686 30.5836 6.28876 30.8217 6.31257C31.4288 5.46733 31.9765 4.80066 32.4646 4.31257L32.5717 4.27686C32.6193 4.27686 33.3574 4.69352 34.786 5.52686C34.8336 5.56266 34.8574 5.60438 34.8574 5.652C34.8574 5.94962 34.5538 6.77105 33.9467 8.11628C34.1491 8.39009 34.3277 8.69962 34.4824 9.04485C36.2562 9.22333 37.1431 9.40786 37.1431 9.59843Z" fill="#00274D"></path></svg>
                </div>
                <div>
                  <h3 class="font-outfit text-[20px] md:text-xl font-bold mt-[8px] mb-[18px]" style="color: #00274D;">
                    Streamlined Process
                  </h3>
                  <p class="text-[16px] text-gray-700 leading-relaxed">
                    Every step is structured for speed and convenience. Once your agreement is signed, we confirm eligibility, prepare the necessary claim ocumentation, and keep you informed if additional details are needed. You never have to worry about missing a requirement or deadline.
                  </p>
                </div>
              </div>
            </div>
            <div class="fadeInUp border border-gray-200 rounded-lg p-[25px] my-[10px] mr-[10px]">
              <div class="flex flex-col items-center text-center md:text-left md:flex-row md:items-start gap-5">
                <div class="flex-shrink-0" style="color: #00274D;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 36 36" fill="#00274D"><path d="M32.1429 15.75H30.2143V10.6875C30.2143 4.79531 24.7339 0 18 0C11.2661 0 5.78571 4.79531 5.78571 10.6875V15.75H3.85714C1.72768 15.75 0 17.2617 0 19.125V32.625C0 34.4883 1.72768 36 3.85714 36H32.1429C34.2723 36 36 34.4883 36 32.625V19.125C36 17.2617 34.2723 15.75 32.1429 15.75ZM23.7857 15.75H12.2143V10.6875C12.2143 7.89609 14.8098 5.625 18 5.625C21.1902 5.625 23.7857 7.89609 23.7857 10.6875V15.75Z" fill="#00274D"></path></svg>
                </div>
                <div>
                  <h3 class="font-outfit text-[20px] md:text-xl font-bold mt-[8px] mb-[18px]" style="color: #00274D;">
                    Secure and Confidential
                  </h3>
                  <p class="text-[16px] text-gray-700 leading-relaxed">
                    We handle every client record and transaction with strict confidentiality and data protection measures. Your information is encrypted, never shared, and stored securely in compliance with industry standards.
                  </p>
                </div>
              </div>
            </div>
            <div class="fadeInUp border border-gray-200 rounded-lg p-[25px] my-[10px] mr-[10px]">
              <div class="flex flex-col items-center text-center md:text-left md:flex-row md:items-start gap-5">
                <div class="flex-shrink-0" style="color: #00274D;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="#00274D"><g clip-path="url(#clip0_3915_259)"><path d="M17.5 0.154785V22.5001H39.8452C38.615 32.3658 30.199 40.0001 20 40.0001C8.9543 40.0001 0 31.0458 0 20.0001C0 9.80101 7.63422 1.38503 17.5 0.154785Z" fill="#00274D"></path><path d="M22.5 0.154785V17.5001H39.8453C38.7173 8.45326 31.5468 1.2829 22.5 0.154785Z" fill="#00274D"></path></g><defs><clipPath id="clip0_3915_259"><rect width="40" height="40" fill="white"></rect></clipPath></defs></svg>
                </div>
                <div>
                  <h3 class="font-outfit text-[20px] md:text-xl font-bold mt-[8px] mb-[18px]" style="color: #00274D;">
                    Proven Results
                  </h3>
                  <p class="text-[16px] text-gray-700 leading-relaxed">
                    Thousands of claimants have successfully recovered funds through Legacy Solutions LLC. Whether it’s $5,000 or $100,000, our results demonstrate consistent accuracy, transparency, and success.
                  </p>
                </div>
              </div>
            </div>
            <div class="fadeInUp border border-gray-200 rounded-lg p-[25px] my-[10px] mr-[10px]">
              <div class="flex flex-col items-center text-center md:text-left md:flex-row md:items-start gap-5">
                <div class="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="#00274D"><g clip-path="url(#clip0_3915_255)"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 11.25C17.9288 11.25 16.25 12.9288 16.25 15C16.25 17.0712 17.9288 18.75 20 18.75C22.0712 18.75 23.75 17.0712 23.75 15C23.75 12.9288 22.0712 11.25 20 11.25ZM20 21.25C16.5487 21.25 13.75 18.4525 13.75 15C13.75 11.5475 16.5487 8.75 20 8.75C23.4513 8.75 26.25 11.5475 26.25 15C26.25 18.4525 23.4513 21.25 20 21.25ZM20 0C11.7163 0 5 6.71625 5 15C5 21.2725 17.5063 40.0137 20 40C22.455 40.0137 35 21.1875 35 15C35 6.71625 28.2838 0 20 0Z" fill="#00274D"></path></g><defs><clipPath id="clip0_3915_255"><rect width="40" height="40" fill="white"></rect></clipPath></defs></svg>
                </div>
                <div>
                  <h3 class="font-outfit text-[20px] md:text-xl font-bold mt-[8px] mb-[18px]" style="color: #00274D;">
                    Local Commitment, National Reach
                  </h3>
                  <p class="text-[16px] text-gray-700 leading-relaxed">
                    We proudly serve every Louisiana parish—Orleans, Jefferson, Caddo, East Baton Rouge, Lafayette, St. Tammany, and all others—while helping clients across the United States recover what’s rightfully theirs.
                  </p>
                </div>
              </div>
            </div>
            <div class="fadeInUp border border-gray-200 rounded-lg p-[25px] my-[10px] mr-[10px]">
              <div class="flex flex-col items-center text-center md:text-left md:flex-row md:items-start gap-5">
                <div class="flex-shrink-0" style="color: #00274D;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="#00274D"><g clip-path="url(#clip0_3915_251)"><path fill-rule="evenodd" clip-rule="evenodd" d="M30 20C28.62 20 27.5 18.88 27.5 17.5C27.5 16.12 28.62 15 30 15C31.38 15 32.5 16.12 32.5 17.5C32.5 18.88 31.38 20 30 20ZM20 20C18.62 20 17.5 18.88 17.5 17.5C17.5 16.12 18.62 15 20 15C21.38 15 22.5 16.12 22.5 17.5C22.5 18.88 21.38 20 20 20ZM10 20C8.62 20 7.5 18.88 7.5 17.5C7.5 16.12 8.62 15 10 15C11.38 15 12.5 16.12 12.5 17.5C12.5 18.88 11.38 20 10 20ZM20 0C8.955 0 0 7.83625 0 17.5C0 23.0238 2.93125 27.9425 7.5 31.1488V40L16.2613 34.6838C17.4738 34.8838 18.7213 35 20 35C31.045 35 40 27.165 40 17.5C40 7.83625 31.045 0 20 0Z" fill="#00274D"></path></g><defs><clipPath id="clip0_3915_251"><rect width="40" height="40" fill="white"></rect></clipPath></defs></svg>
                </div>
                <div>
                  <h3 class="font-outfit text-[20px] md:text-xl font-bold mt-[8px] mb-[18px]" style="color: #00274D;">
                    Simple Agreement. Fast Results. No Upfront Fees.
                  </h3>
                  <p class="text-[16px] text-gray-700 leading-relaxed">
                    Our agreement gives us authority to act on your behalf and begin recovery immediately. You never pay anything upfront; our success fee is deducted only after you receive your funds.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- Right Column: Image -->
        <div class="flex flex-col gap-5 basis-[38%] px-[5px] pt-2 md:pl-5">
          <img 
            src="/images/Why-choose-legacy/WHY-CHOOSE-LEGACY-SOLUTIONS-LLC-H.png" 
            alt="Business professionals"
            class="fadeInUp w-full"
          />
          <img 
            src="/images/Why-choose-legacy/WHY-CHOOSE-LEGACY-SOLUTIONS-LLC-1-1-1024x1024.png" 
            alt="Business professionals"
            class="fadeInUp w-full"
          />
          <img 
            src="/images/Why-choose-legacy/WHY-CHOOSE-LEGACY-SOLUTIONS-LLC-C.png" 
            alt="Business professionals"
            class="fadeInUp w-full"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'WhyChooseSection',
  setup() {
    onMounted(() => {
      const elements = document.querySelectorAll('.fadeInUp');

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

</style>
