import React from 'react'
import type { NextPage } from 'next'
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'

const About: NextPage = () => {
  return (
    <div>
      <Header />
      <div className="relative bg-white overflow-hidden -z-10">
      <div className=" mx-auto">
        <div className=''>
            <img
                className="h-screen w-full object-cover "
                width={1920}
                height={1080}
                src="https://cdn.shopify.com/s/files/1/0505/9044/9849/files/ETQ_D1_V2_041_1_3840x.png?v=1623681561"
                alt=""
            />
        </div>
      </div>
      </div>

      <section className="bg-white border-b py-8">
        <div className="container max-w-8xl mx-auto m-8">
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
                    <img src='https://cdn.shopify.com/s/files/1/0505/9044/9849/files/Essence_Explore_Header_Variant-One_Product_IMG-1_1200x.png?v=1620315643' alt="" className="w-full"/>
                    </div>
                    <div className="w-full sm:w-1/2 p-6 mt-6">
                    <img src='https://cdn.shopify.com/s/files/1/0505/9044/9849/files/LT01-white-04-e1559815697270_1200x.jpg?v=1616764650' alt="" className="w-full"/>
                    </div>
                </div>
            
                    <div className="flex flex-wrap flex-col-reverse sm:flex-row items-center">
                    <div className="w-full sm:w-1/2 p-6 mt-6">
                    <img src='https://cdn.shopify.com/s/files/1/0505/9044/9849/files/Rectangle_15769823_828x.png?v=1621351058' alt="" className="w-full"/>
                    </div>
                    <div className="w-full sm:w-1/2 p-6 mt-6">
                    <img src='https://cdn.shopify.com/s/files/1/0505/9044/9849/files/image_37_1_1200x.png?v=1621351058' alt="" className="w-full"/>
                </div>
            </div>

            <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 p-6">
                </div>
                <div className="w-5/6 sm:w-1/2 p-6">
                    <p className='font-bold'>It’s not fashion. It’s design.</p>
                    <p className="text-gray-600 mb-8 text-xl">
                        The difference between the two, for us, is about change versus improvement. Being just different is very simple. Being better is difficult, but far more valuable. It’s a constant journey to perfection, always questioning our previous wins, always aiming to do it better next time. We focus on comfort, durability and sustainability; the main pillars in our search for the ultimate everyday-sneakers. The theme of each collection is very simple, and always will be: SAME BUT BETTER.
                    </p>
                </div>
  
            </div>
          


          <div className="flex flex-wrap flex-col-reverse sm:flex-row items-center">
            <div className="w-full sm:w-1/2 p-6 ">
              <img src='https://cdn.shopify.com/s/files/1/0505/9044/9849/files/ETQ-Packaging-box-2_828x.gif?v=1623681561' alt="" className="w-1/2"/>
            </div>
            <div className="w-full h-full sm:w-1/2 p-6 mt-6">
              <img src='https://cdn.shopify.com/s/files/1/0505/9044/9849/files/Doos-PDP-open_1200x.jpg?v=1623681561' alt="" className="w-5/6"/>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">

              <p className="text-gray-600 mb-8 text-xl">
                These dust bags have been designed to be your ultimate travel companion. These neat packages can hold your favourite pair of shoes or toiletries and other bits and bobs needed for daily travel.
                <br />
                <br />
                he bags are made from recycled plastic bottles collected by small cooperatives around the world from plastic that never made it to landfills. Each dust bag is made from two recycled plastic bottles. This game-changing material is extremely durable and means you can use your dust bags to store more than just your favorite pair of shoes.
                <br />
              </p>
            </div>
            <div className="w-5/6 sm:w-1/2 p-6 flex items-center">
              <p className="text-gray-800 mb-8 text-lg">
                <p className='font-bold'>Dust bags</p>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap flex-col-reverse sm:flex-row items-center">
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <img src='https://cdn.shopify.com/s/files/1/0505/9044/9849/files/96A0170-72Dppi_1920x.jpg?v=1623750709' alt="" className="w-full"/>
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <img src='https://cdn.shopify.com/s/files/1/0505/9044/9849/files/LAU_0743-72Dppi_1920x.png?v=1623748904' alt="" className="w-full"/>
            </div>

          </div>
        </div>
        
      </section>

    </div>
  )
}

export default About

// https://cdn.shopify.com/s/files/1/0505/9044/9849/files/ETQ-Packaging-box-2_828x.gif?v=1623681561