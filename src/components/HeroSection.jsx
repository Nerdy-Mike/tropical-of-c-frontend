/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import Image from 'next/image'


export default function HeroSection() {

  const scrollDown = () => {
    const element = document.getElementById('Features')
    element.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div className=" overflow-hidden" id="Hero">
      <div className="relative flex flex-col md:grid md:grid-cols-4 min-h-screen ">
        <div className=' md:col-span-3'>
            <img
                
                className=" object-cover w-full min-h-screen"
                src="https://images.unsplash.com/photo-1500087935944-bd3bbbc5df9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt=""
            />
        </div>
        <div className='absolute inset-y-0 md:static md:col-span-1'>
              <div className='flex flex-col  justify-center h-full'>
                <div className='text-white md:text-black text-3xl px-4'>
                  Summer is comming
                </div>
              </div>
        </div>
        <div className="absolute inset-x-56 sm:inset-x-1/2 bottom-6 md:bottom-0 pb-2 ">
            <div className='text-white items-center pb-3'>Explore</div>
            <button  className="ml-2 flex items-center justify-center w-10 h-10 rounded-full bg-cool-gray-100 text-white    animate-bounce transition duration-500 ease-in-out cursor-pointer"
              onClick={() => scrollDown()}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stokelinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </button>
          </div>
      </div>


    </div>
  )
}
