import React from "react";
import ProjectImg01 from "../../images/nasikeurope/f9.png";
const PortfolioSection = () => {
  return (
    <section
      dir="rtl"
      id="portfolio"
      class="bg-white px-10 my-8 flex justify-center text-right items-center flex-col dark:bg-gray-900"
    >
      <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white">
        معرض اعمالي
      </h2>
      <h4 class="mb-12 text-xl font-normal text-center text-gray-500 dark:text-gray-300 ">
        بعض الاعمال التي قمت بها
      </h4>
      <div style={{transition:"0.3s ease-in-out"}} class="  border-[1px]  flex-row items-center max-w-5xl mb-6 text-center bg-white  rounded-lg   dark:bg-gray-800 dark:border-gray-700 md:flex transition hover:scale-105">
        <img
          class="object-cover h-full w-full md:h-56 md:w-80 rounded-r-md "
          src={ProjectImg01}
          alt=""
        />
        <div class="flex flex-col items-start justify-between p-8 text-right leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">
            لوحة تحكم لادارة الطلبات
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
           برمجة واجهة للوحة تحكم لادارة الطلبات باستعمال react.js و mantine ui
            </p>
          <a
            href="/nasikeurope"
            dir="ltr"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            عرض المزيد
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>

      



 

    </section>
  );
};

export default PortfolioSection;
