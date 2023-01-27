import React from 'react'
import ProjectImg01 from '../../images/khamsat 2.png'
import ProjectImg02 from '../../images/car repairpreview.png'
import ProjectImg03 from '../../images/luxwapreview.png'
const PortfolioSection = () => {
   
    return (
        <section dir='rtl' class="bg-white px-10 my-8 flex justify-center items-center flex-col dark:bg-gray-900 text-center">
          <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white">
        معرض اعمالي
    </h2>
    <h4 class="mb-12 text-xl font-normal text-center text-gray-500 dark:text-gray-300 ">
      بعض الاعمال التي قمت بها
    </h4>
   <div class=" hidden  flex-row items-center max-w-5xl mb-6 text-center bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 md:flex">
    
    <img class="object-cover h-72 w-96 md:h-56 md:w-80 rounded-r-md " src={ProjectImg01} alt=""/>
    <div class="flex flex-col items-start justify-between p-8 text-right leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">تصميم موقع لمطعم </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">تصميم و تطوير موقع الكتروني لاحدى المطاعم باستعمال Mern stack.</p>
        <a href="#" dir='ltr' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            عرض المزيد
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>


<div className="flex flex-col justify-center md:flex-row gap-x-2 gap-y-4">
<div class="max-w-sm   bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#" >
        <img class="rounded-t-lg w-96" src={ProjectImg02} alt="" />
    </a>
    <div class="p-5 ">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> قالب مواقع لورشات السيارات</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">قالب مواقع لورشات اصلاح السيارات static باستعمال html css js</p>
        <a dir='LTR' href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            عرض المزيد
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div >
<div class="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={ProjectImg03} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">موقع demo تجارة الكترونية</h5>
        </a>
        <p class=" font-normal text-gray-700 dark:text-gray-400">موقع غير حقيقي لبيع الساعات باستعمال html css js</p>
        <a href="#" dir='LTR' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            عرض المزيد
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>


<div class="max-w-sm  md:hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={ProjectImg01} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">تصميم موقع لمطعم </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">تصميم و تطوير موقع الكتروني لاحدى المطاعم باستعمال Mern stack.</p>
        <a href="#" dir='LTR' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            عرض المزيد
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
</div>
        </section>
    )
}

export default PortfolioSection

