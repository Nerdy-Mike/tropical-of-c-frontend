import React from 'react'
import type { NextPage } from 'next'
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'

const HowItsMade: NextPage = () => {
  return (
    <div>
      <Header />
      <div className="relative bg-white overflow-hidden ">
      <div className=" mx-auto">
        <div className=''>
            <video
                className="h-screen w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                width={1920}
                height={1080}
                autoPlay
                loop
                muted>
                    <source src='https://cdn.shopify.com/s/files/1/0505/9044/9849/files/LANDINGPAGE_VIDEO_Small.mp4?v=1621343863' type="video/mp4" />
            </video>
        </div>
      </div>
      </div>

      <section className="bg-white  py-8">
        <div className="container max-w-8xl mx-auto m-8">
            <p className='text-center'>Designed in Sai Gon</p>
            <h3 className="w-full my-2 text-2xl font-bold leading-tight text-center text-gray-800">
            How it's made
             </h3>

            <div className="w-full text-center px-56">
                <p className='font-bold'>A constant journey to perfection</p>
                    <br/>
                    <p className="text-gray-600 mb-8 text-xl">
                    Back in 2010, while working at a local Amsterdam retailer, we saw an opening for a different approach to footwear. One that breathes luxury and design, but one that is also modest, minimalistic and affordable. It turned out to be a promising idea. 
                    
                    <br/>
                    Now, 10 years later, the cliche might be to express how fast the time has passed. But the truth is that is has been a long and intense road. What started as a small project with friends, emerged out of passion and curiosity, turned out to be the brand that is now represented at premium retailers in Europe’s main capitals.
                </p>
             </div>

            <div className="flex flex-wrap flex-col-reverse sm:flex-row items-center">
                <div className="w-full  p-6 mt-6">
                    <video
                    className="h-screen w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                    width={1920}
                    height={1080}    
                    autoPlay
                    loop    
                    muted>
                        <source src="https://cdn.shopify.com/s/files/1/0505/9044/9849/files/Proces_of_leather_9-16-small.mp4?v=1621344411" type="video/mp4" />
                    </video>
                </div>
            </div>

            <div className="flex flex-wrap">
                <div className="w-full sm:w-2/3 p-6">
                    <p className="text-gray-600 mb-8 text-xl">
                    Since leather is a natural product, it's essential to process the raw material from hide to shoe for long-term use while maintaining its natural character. We've been working with European leather suppliers from the start, to ensure we work with the highest possible quality leather. The hides mainly come from France and Germany and are processed in a tanning facility in Portugal. 
                    <br/>
                    <br/>
                    All skins are cleansed and heat-pressed, dried, and then excessively tumbled for utmost suppleness. The tanning process is one of the most delicate steps and is done with tree-extracted tannins. The result is without a doubt the best product for the environment: a biodegradable leather that can be composted and will be totally disintegrated within 30 days. Whether it’s nappa, suede or nubuck, you’ll find the same quality dying techniques across our leather footwear.
                    </p>
                </div>
  
            </div>
          
        </div>
        
      </section>

    </div>
  )
}

export default HowItsMade

// https://cdn.shopify.com/s/files/1/0505/9044/9849/files/ETQ-Packaging-box-2_828x.gif?v=1623681561