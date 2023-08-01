import React from 'react'
import { motion } from "framer-motion"
const HeroSection = () => {
  return (
    <section id="hero" class="bg-white my-10 dark:bg-gray-900">
    <div
   class=" flex justify-center flex-col  py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
       
        <motion.h1
        initial={{opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
        class="mb-10 mt-32 px-8 text-7xl md:leading-tight font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            <span className='text-blue-700'>مرحبا ,انا فيصل مطور</span> تطبيقات الويب
            </motion.h1>

            <motion.p
        initial={{opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}  class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            مرحبا انا فيصل مطور ومصمم مواقع الكترونية مهتم بمساعدة الشركات والمشاريع التجارية للحصول على مواقعهم الالكترونية
        </motion.p>
        <motion.div 
        initial={{opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
        class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <a href="#portfolio" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
        <svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                معرض اعمالي
            </a> 
            <a href="#contact" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                تواصل معي
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
             
        </motion.div>
        
    </div>
</section>
  )
}

export default HeroSection