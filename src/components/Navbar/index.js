import React from 'react'
import NavbarLogo from '../../images/path1509.svg'
import { useState } from 'react'
const Navbar = () => {
  


  const [state, setState] = useState(false)

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "", path: "" },
    { title: "من أنا", path: "#about" },
    { title: "الخدمات", path: "#services" },
    { title: "اعمالي", path: "#portfolio" }
  ]

  return (
      <nav dir="rtl" className="bg-white w-full border-b md:border-0">
          <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <a href="#home">
                        <img
                            src={NavbarLogo}
                            width={30} 
                            alt="Fayssal dev logo"
                        />
                    </a>
                  <div className="md:hidden">
                      <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                          onClick={() => setState(!state)}
                      >
                          {
                              state ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                              ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                  </svg>
                              )
                          }
                      </button>
                  </div>
              </div>
              <div className={`flex-1 justify-self-center pb-3 md:block md:pb-0 ${ state ? 'block' : 'hidden'}`}>
                  <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-x-reverse md:space-y-0">
                      {
                          navigation.map((item, idx) => {
                              return (
                                <li key={idx} >
                                    <a href={item.path} className=" text-neutral-900 font-medium hover:text-blue-600" >{ item.title }</a>
                                </li>
                              )
                          })
                      }
                  </ul>
              </div>
              <div className="hidden md:inline-block">
                <a href="#contact" className="py-2 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-sm shadow">
                    تواصل معي
                </a>
              </div>
          </div>
      </nav>
  )
}
  


export default Navbar