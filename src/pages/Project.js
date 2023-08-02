/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Fragment } from 'react'
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import CarouselProject from '../components/CarouselProject';
import { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import img01 from '../images/nasikeurope/f1.png'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
const Project = () => {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }
 
  return (
      <div className='overflow-hidden '>
        <Navbar/>
        <section dir='rtl' className='container my-12 px-14 bg-white   flex justify-center text-right items-start flex-col dark:bg-gray-900 '>
            <div className='w-80 my-7 relative rounded-md group'>

<img className='w-full rounded-md ' src={img01} alt='preview image'/>
      <div onClick={openModal} className=' cursor-pointer opacity-0 rounded-md transition-all duration-200 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
    <span className='text-white text-lg font-bold'>
      اضغط لرؤية المزيد
    </span>
  </div>
            </div>
        <h1 className='text-2xl my-2 font-bold'>
مشروع nasikeoroupe
        </h1>
        <p className='text-gray-600 my-2'>
            تم العمل في هذا المشروع على برمجة واجهات الاستخدام 
            <br/>
            الصور الموجودة في العرض هي screenshots وليست تصاميم figma
            <br/>
            تم استعمال react.js mantine ui لبرمجة هذه الواجهة 
            <br/>
            تم عمل backend من قبل bakour abdalli
        </p>
        <div className=" inset-0 flex ">
        <button
          type="button"
          onClick={openModal}
          className="transition-all duration-200 rounded-md bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          عرض صور المشروع
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment} >
        <Dialog as="div"  className="relative z-10" onClose={closeModal}>
          <Transition.Child 
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div  className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div  dir='rtl' className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-right align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    صور المشروع
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className='text-gray-600 flex flex-row items-center gap-x-2' >اسحب <BsFillArrowLeftCircleFill/></p>
        <CarouselProject />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      اغلاق
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
        </section>
        <FooterSection/>
        </div>
  )
}

export default Project