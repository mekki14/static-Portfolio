import React from 'react'
import AboutImg from '../../images/undraw_programming_re_kg9v.svg'
const AboutSection = () => {
  return (
  <section id="about" class="bg-white my-8 px-10 dark:bg-gray-900">
    <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img class="w-full dark:hidden" src={AboutImg} alt="dashboard image"/>
        <div dir='rtl' class="mt-4 md:mt-0">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">من أنا</h2>
            <p class="mb-6 font-normal text-gray-600 md:text-lg dark:text-gray-400">
            أنا فيصل، مطور ويب من الجزائر وطالب في كلية هندسة الحاسوب في جامعة محمد بوضياف. لدي شهادتان من Freecodecamp في مجال تطوير الويب وأتقن العديد من المهارات التي تمكّنني من تطوير مواقع ويب متجاوبة. بفضل الله، أستطيع تطوير مواقع ويب تجعل تجربة المستخدم سلسة وممتعة. أهدف إلى تطوير مهاراتي التقنية والغير التقنية لتطوير مشاريع ويب أكثر تطورًا وابتكارًا.
           </p>
            <a dir='ltr' href="#" class="inline-flex items-center text-gray-500 bg-transparent transition-all hover:bg-gray-800 hover:text-white focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
               سيرتي الذاتية
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
</section>)
}

export default AboutSection