import React from 'react'
import type { NextPage } from 'next'
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'

const About: NextPage = () => {

  const scrollDown = () => {
    const element = document.getElementById('OurJourney')
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }


  return (
    <div>
      <Header />
      <div className=" bg-white overflow-hidden -z-10" >
      <div className=" mx-auto" >
            <img loading='lazy'  
                className="h-screen w-full object-cover"
                width={1920}
                height={1080}
                src="https://images.unsplash.com/photo-1524253734009-380c403e2d9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2264&q=80"
                alt=""
            />
            <div className="absolute inset-x-56 sm:inset-x-1/2 bottom-6 md:bottom-0 pb-2 ">
              <div className='text-white items-center pb-3'>Explore</div>
              <button  className="ml-2 flex items-center justify-center w-10 h-10 rounded-full bg-cool-gray-100 text-white  animate-bounce transition duration-500 ease-in-out cursor-pointer z-50"
                onClick={() => scrollDown()}
              >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
              </button>
            </div>
      </div>
      </div>

      <section className="bg-white py-8 pt-16" id="OurJourney">
        <div className="container max-w-8xl mx-auto m-8" >
          <h3 className="w-full my-2 text-2xl font-bold leading-tight text-center text-gray-800">
            Our journey explained
          </h3>

          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">
            <p className='font-bold'>A constant journey to perfection</p>
                <br/>
                <p className="text-gray-600 mb-8 text-xl">
                Back in 2010, while working at a local Amsterdam retailer, we saw an opening for a different approach to footwear. One that breathes luxury and design, but one that is also modest, minimalistic and affordable. It turned out to be a promising idea. 
                
                <br/>
                Now, 10 years later, the cliche might be to express how fast the time has passed. But the truth is that is has been a long and intense road. What started as a small project with friends, emerged out of passion and curiosity, turned out to be the brand that is now represented at premium retailers in Europe’s main capitals.
                </p>
            </div>
            <div className="w-full sm:w-1/2 p-6">

            </div>
          </div>

            <div className="flex flex-wrap flex-col-reverse sm:flex-row items-center">
                <div className="w-full sm:w-1/2 p-6 mt-6">
                    <img loading='lazy'  src='https://images.unsplash.com/photo-1637526997367-d44a21b2c3c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80' alt="" className="w-full"/>
                    </div>
                    <div className="w-full sm:w-1/2 p-6 mt-6">
                    <img loading='lazy'  src='https://i.etsystatic.com/16349186/r/il/dbabc0/3018028283/il_794xN.3018028283_8eva.jpg' alt="" className="w-full"/>
                    </div>
                </div>
                <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 p-6">
                </div>
                <div className="w-5/6 sm:w-1/2 p-6">
                    <p className='font-bold'>It’s not fashion. It’s design.</p>
                    <p className="text-gray-600 mb-8 text-xl">
                       We focus on comfort, durability and sustainability; the main pillars in our search for the ultimate everyday-sneakers. The theme of each collection is very simple, and always will be: SAME BUT BETTER.
                    </p>
                </div>
  
            </div>
                    <div className="flex flex-wrap flex-col-reverse sm:flex-row items-center">
                    <div className="w-full sm:w-1/2 p-6 mt-6">
                    <img loading='lazy'  src='https://i.etsystatic.com/18524026/r/il/072528/3102754007/il_1588xN.3102754007_634g.jpg' alt="" className="w-full"/>
                    </div>
                    <div className="w-full sm:w-1/2 p-6 mt-6">
                    <img loading='lazy'  src='https://images.unsplash.com/photo-1642472147189-df7cade9b412?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80' alt="" className="w-full"/>
                </div>
            </div>


          


          {/* <div className="flex flex-wrap flex-col-reverse sm:flex-row items-center">
            <div className="w-full sm:w-1/2 p-6 ">
              <img loading='lazy'  src='https://cdn.shopify.com/s/files/1/0505/9044/9849/files/ETQ-Packaging-box-2_828x.gif?v=1623681561' alt="" className="w-1/2"/>
            </div>
            <div className="w-full h-full sm:w-1/2 p-6 mt-6">
              <img loading='lazy'  src='https://cdn.shopify.com/s/files/1/0505/9044/9849/files/Doos-PDP-open_1200x.jpg?v=1623681561' alt="" className="w-5/6"/>
            </div>
          </div> */}

          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">

              <p className="text-gray-600 mb-8 text-xl">
                These dust bags have been designed to be your ultimate travel companion. These neat packages can hold your favourite pair of shoes or toiletries and other bits and bobs needed for daily travel.
                <br />
                <br />
                The bags are made from recycled plastic bottles collected by small cooperatives around the world from plastic that never made it to landfills. Each dust bag is made from two recycled plastic bottles. This game-changing material is extremely durable and means you can use your dust bags to store more than just your favorite pair of shoes.
                <br />
              </p>
            </div>
            <div className="w-5/6 sm:w-1/2 p-6 flex items-center">
              <p className="text-gray-800 mb-8 text-xl">
                <p className='font-bold'>Dust bags</p>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap flex-col-reverse sm:flex-row items-center">
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <img loading='lazy'  src='https://cdn.shopify.com/s/files/1/0505/9044/9849/files/96A0170-72Dppi_1920x.jpg?v=1623750709' alt="" className="w-full"/>
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <img loading='lazy'  src='https://cdn.shopify.com/s/files/1/0505/9044/9849/files/LAU_0743-72Dppi_1920x.png?v=1623748904' alt="" className="w-full"/>
            </div>

          </div>
        </div>
        
      </section>

    </div>
  )
}

export default About

// https://cdn.shopify.com/s/files/1/0505/9044/9849/files/ETQ-Packaging-box-2_828x.gif?v=1623681561