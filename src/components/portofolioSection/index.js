import React from "react";
import ProjectImg01 from "../../images/khamsat 2.png";
import ProjectImg02 from "../../images/car repairpreview.png";
import ProjectImg03 from "../../images/luxwapreview.png";
const PortfolioSection = () => {
  return (
    <section
      dir="rtl"
      id="portfolio"
      class="bg-white px-10 my-8 flex justify-center text-right items-center flex-col dark:bg-gray-900 text-center"
    >
      <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white">
        معرض اعمالي
      </h2>
      <h4 class="mb-12 text-xl font-normal text-center text-gray-500 dark:text-gray-300 ">
        بعض الاعمال التي قمت بها
      </h4>
      <div style={{transition:"0.3s ease-in-out"}} class=" hidden  flex-row items-center max-w-5xl mb-6 text-center bg-black  rounded-lg   dark:bg-gray-800 dark:border-gray-700 md:flex transition hover:scale-105">
        <img
          class="object-cover h-72 w-96 md:h-56 md:w-80 rounded-r-md "
          src={ProjectImg01}
          alt=""
        />
        <div class="flex flex-col items-start justify-between p-8 text-right leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
            تصميم موقع لمطعم
          </h5>
          <p class="mb-3 font-normal text-gray-300 dark:text-gray-400">
            تصميم و تطوير موقع الكتروني لاحدى المطاعم باستعمال Mern stack.
          </p>
          <a
            href="https://lapiontb.onrender.com/"
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

      <div style={{transition:"0.3s ease-in-out"}} class=" hidden  flex-row items-center max-w-5xl mb-6 text-center bg-white  rounded-lg border dark:bg-gray-800 dark:border-gray-700 md:flex transition hover:scale-105">
        <img
          class="object-cover h-72 w-96 md:h-56 md:w-80 rounded-r-md "
          src={ProjectImg02}
          alt=""
        />
        <div class="flex flex-col items-start justify-between p-8 text-right leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">
            قالب مواقع لورشات السيارات
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            قالب مواقع لورشات اصلاح السيارات static باستعمال html css js
          </p>
          <a
            href="https://mekki14.github.io/car-repair/"
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


      <div class=" hidden  flex-row items-center max-w-6xl mb-6 text-center  rounded-lg   dark:bg-gray-800 dark:border-gray-700 md:flex transition hover:scale-105" style={{ backgroundColor: '#FCF2EC', transition : "0.3s ease-in-out" }}>
        <img
          class="object-cover h-96 w-96 md:h-56 md:w-96 rounded-r-md "
          src={ProjectImg03}
          alt=""
        />
        <div class="flex flex-col items-start justify-between p-8 text-right leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">
            موقع demo تجارة الكترونية
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            موقع غير حقيقي لبيع الساعات باستعمال html css js
          </p>
          <a
            href="https://mekki14.github.io/luxwa"
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
 {/* start */}

 <a href="#https://mekki14.github.io/luxwa" class="group relative block mb-6 bg-black rounded-lg md:hidden">
  <img
    alt="Developer"
    src={ProjectImg03}
    class="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-50"
  />

  <div class="relative p-4 sm:p-6 lg:p-8">
    
    <div class="mt-32 sm:mt-48 lg:mt-64">
      <div
        class="flex flex-col justify-center items-start w-96 -translate-x-8 transform opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
            موقع demo تجارة الكترونية
          </h5>
          <p class="mb-3 font-normal text-gray-100 dark:text-gray-400">
            موقع غير حقيقي لبيع الساعات باستعمال html css js
          </p>
          <a
            href="https://mekki14.github.io/luxwa"
            dir="rtl"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            عرض المزيد
            </a>
      </div>
    </div>
  </div>
</a>

 {/* end */}


  {/* start */}

  <a href="https://lapiontb.onrender.com/" class="group relative block mb-6 bg-black rounded-lg md:hidden">
  <img
    alt="Developer"
    src={ProjectImg01}
    class="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity rounded-lg group-hover:opacity-50"
  />

  <div class="relative p-4 sm:p-6 lg:p-8">
    
    <div class="mt-32 sm:mt-48 lg:mt-64">
      <div
        class="flex flex-col justify-center items-start w-96 -translate-x-8 transform opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
        تصميم موقع لمطعم
          </h5>
          <p class="mb-3 font-normal text-gray-100 dark:text-gray-400">
          تصميم و تطوير موقع الكتروني لاحدى المطاعم باستعمال Mern stack.
          </p>
          <a
            href="https://lapiontb.onrender.com/"
            dir="rtl"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            عرض المزيد
            </a>
      </div>
    </div>
  </div>
</a>

 {/* end */}



  {/* start */}

  <a href="https://mekki14.github.io/car-repair" class="group relative block bg-black rounded-lg md:hidden">
  <img
    alt="Developer"
    src={ProjectImg02}
    class="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity rounded-lg group-hover:opacity-50"
  />

  <div class="relative p-4 sm:p-6 lg:p-8">
    
    <div class="mt-32 sm:mt-48 lg:mt-64">
      <div
        class="flex flex-col justify-center items-start w-96 -translate-x-8 transform opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
        قالب مواقع لورشات السيارات
          </h5>
          <p class="mb-3 font-normal text-gray-100 dark:text-gray-400">
          قالب مواقع لورشات اصلاح السيارات static باستعمال html css js
          </p>
          <a
            href="https://mekki14.github.io/car-repair"
            dir="rtl"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            عرض المزيد
            </a>
      </div>
          
    </div>
  </div>
</a>

 {/* end */}


    </section>
  );
};

export default PortfolioSection;
