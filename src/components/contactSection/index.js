import React, { useState } from 'react'
import {AiOutlineWhatsApp} from 'react-icons/ai'
const ContactSection = () => {
  const [success, setSuccess] = useState(false)
  const [failed, setFailed] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Get form data
    console.log()
    // Construct message to send to Discord webhook
    const message = {
      content: `New contact form submission from ${e.target.email.value}`,
      embeds: [
        {
          title: e.target.subject.value,
          description: e.target.message.value,
          fields: [
            {
              name: 'Email',
              value: e.target.email.value
            }
          ]
        }
      ]
    };
    
    // Send message to Discord webhook
    const response = await fetch('https://discord.com/api/webhooks/1055225062292201563/LOsbPtvHkx2edAP4xY0cMzwQN6LuHrsYbJExDT_PNxZ_blClzDiX69ckW7QLhZ25r22y', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    });
    
    if (response.ok) {
      // Do something after successful submission
    setSuccess(true)
    console.log(success)
    console.log(response)

    } else {
    setFailed(true)  
      // Handle error
      console.log(response)
      console.log(JSON.stringify(message))
    }
  };


  return (
    <section dir='RTL' id="contact" class="bg-white my-8 dark:bg-gray-900">
  
  {
    success && (<div id="toast-success" class="fixed flex top-3 right-6 items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
    <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Check icon</span>
    </div>
    <div class="ml-3 text-sm font-normal">تم ارسالة الرسالة سيتم الرد في اسرع وقت ممكن</div>
    <button type="button" onClick={()=>setSuccess(false)} class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
        <span class="sr-only"  >Close</span>
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
</div>)
  }
  {
    failed && (
        <div id="toast-failed" class="fixed flex top-3 right-6 items-center w-full max-w-xs p-4 mb-4 text-red-500 bg-white rounded-lg shadow dark:text-red-400 dark:bg-gray-800" role="alert">
            <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 00-2 0v4a1 1 0 102 0v-4zm0 6a1 1 0 00-2 0 1 1 0 00.293.707A.996.996 0 009 14h2a1 1 0 00.707-.293 1 1 0 000-1.414A1 1 0 0011 13zm-1-7a1 1 0 00-1 1v4a1 1 0 102 0V7a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                </svg>
                <span class="sr-only">Error icon</span>
            </div>
            <div class="ml-3 text-sm font-normal">فشل إرسال الرسالة، يرجى المحاولة مرة أخرى</div>
            <button type="button" onClick={() => setFailed(false)} class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-failed" aria-label="Close">
                <span class="sr-only">Close</span>
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
            </button>
        </div>
    )
}

  
  
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">تواصل معي</h2>
      <div className='flex my-8 flex-col justify-center items-center'>
      <h5 class="mb-4 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">يمكنك التواصل معي من خلال الواتساب.</h5>
      <a href='https://web.whatsapp.com/send/?phone=213664931842&text&type=phone_number&app_absent=0' class="px-3 py-2 hover:bg-green-600 text-white text-xl font-semibold flex flex-row items-center gap-2 rounded-md bg-green-400 ">
      <AiOutlineWhatsApp/>  من هنا 
      </a>
      </div>
      <h5 class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">اوادخل معلومات تواصلك وطلبك وسيتم الرد عليك في بريدك الالكتروني.</h5>
       
      <form onSubmit={handleSubmit} class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">بريدك الالكتروني </label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@email.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">الموضوع</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="اكتب طلبك او الخدمة التي تريدها" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">الرسالة</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="اترك رسالتك هنا"></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ارسال</button>
      </form>
  </div>
</section>
  )
}

export default ContactSection
