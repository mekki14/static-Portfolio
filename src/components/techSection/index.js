import React from 'react'
import ReactIcon from "../../images/React-icon.svg.png"
import HtmlIcon from "../../images/html-5.png"
import CssIcon from "../../images/css-3.png"
import MuiIcon from "../../images/logo.png"
import MongoIcon from "../../images/mongodb_original_logo_icon_146424.png"
import NodeIcon from "../../images/node-js-1174925.png"
import FigmaIcon from "../../images/5968705.png"
const TechSection = () => {
  return (
    <div dir='rtl' class="py-8 px-10 my-8  mx-auto max-w-screen-xl sm:py-16 lg:px-6 bg-white rounded-lg  dark:bg-gray-800">
    <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white">
        مهاراتي
    </h2>
    <h4 class="mb-12 text-xl font-normal text-center text-gray-500 dark:text-gray-300">
        قائمة المهارات وتقنيات التي استعملها
    </h4>
    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        <div class="p-4">
            <div class="flex-col  flex justify-center items-center">
                <div class="flex-shrink-0">
                        <img alt="react" src={ReactIcon} class="mx-auto object-cover h-20 w-22 "/>
                    
                </div>
                <div class="mt-2 text-center flex flex-col">
                    <span class="text-lg font-medium text-gray-600 dark:text-white">
                        react.js
                    </span>
                    <span class="text-xs text-gray-400">
                        مهارات
                    </span>
                </div>
            </div>
            </div>
            <div class="p-4">
            <div class="flex-col  flex justify-center items-center">
                <div class="flex-shrink-0">
                        <img alt="mui" src={MuiIcon} class="mx-auto object-cover h-20 w-22 "/>
                    
                </div>
                <div class="mt-2 text-center flex flex-col">
                    <span class="text-lg font-medium text-gray-600 dark:text-white">
                        MUI
                    </span>
                    <span class="text-xs text-gray-400">
                        مهارات
                    </span>
                </div>
            </div>

            </div>
            <div class="p-4">

            <div class="flex-col  flex justify-center items-center">
                <div class="flex-shrink-0">
                        <img alt="html" src={HtmlIcon} class="mx-auto object-cover h-20 w-22 "/>
                    
                </div>
                <div class="mt-2 text-center flex flex-col">
                    <span class="text-lg font-medium text-gray-600 dark:text-white">
                        Html
                    </span>
                    <span class="text-xs text-gray-400">
                        مهارات
                    </span>
                </div>
            </div>
</div>
            <div class="p-4">

            <div class="flex-col  flex justify-center items-center">
                <div class="flex-shrink-0">
                        <img alt="css" src={CssIcon} class="mx-auto object-cover h-20 w-22 "/>
                    
                </div>
                <div class="mt-2 text-center flex flex-col">
                    <span class="text-lg font-medium text-gray-600 dark:text-white">
                        Css
                    </span>
                    <span class="text-xs text-gray-400">
                        مهارات
                    </span>
                </div>
            </div>
            </div>

            <div class="p-4">

            <div class="flex-col  flex justify-center items-center">
                <div class="flex-shrink-0">
                        <img alt="mongo" src={MongoIcon} class="mx-auto object-cover h-20 w-22 "/>
                    
                </div>
                <div class="mt-2 text-center flex flex-col">
                    <span class="text-lg font-medium text-gray-600 dark:text-white">
                        mongodb
                    </span>
                    <span class="text-xs text-gray-400">
                        مهارات
                    </span>
                </div>
            </div>
            </div>

            <div class="p-4">

            <div class="flex-col  flex justify-center items-center">
                <div class="flex-shrink-0">
                        <img alt="nodejs" src={NodeIcon} class="mx-auto object-cover h-20 w-22 "/>
                    
                </div>
                <div class="mt-2 text-center flex flex-col">
                    <span class="text-lg font-medium text-gray-600 dark:text-white">
                        nodejs
                    </span>
                    <span class="text-xs text-gray-400">
                        مهارات
                    </span>
                </div>
            </div>
            </div>

            <div class="p-4">

            <div class="flex-col  flex justify-center items-center">
                <div class="flex-shrink-0">
                        <img alt="figma" src={FigmaIcon} class="mx-auto object-cover h-20 w-22 "/>
                    
                </div>
                <div class="mt-2 text-center flex flex-col">
                    <span class="text-lg font-medium text-gray-600 dark:text-white">
                        figma
                    </span>
                    <span class="text-xs text-gray-400">
                        مهارات
                    </span>
                </div>
            </div>
            </div>
        </div>
       
    </div>
  )
}

export default TechSection