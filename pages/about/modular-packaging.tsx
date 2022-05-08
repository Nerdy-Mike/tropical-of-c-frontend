import React from 'react'
import type { NextPage } from 'next'
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'

const ModularPackaging: NextPage = () => {
  return (
    <div>
      <Header />
      <div className="relative bg-white overflow-hidden  -z-10">
        <div className=" mx-auto">
          <div className=''>
              <img
                  className="h-screen w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-screen"
                  width={1920}
                  height={1080}
                  // src="https://cdn.shopify.com/s/files/1/0505/9044/9849/files/ETQ_D1_V2_041_1_3840x.png?v=1623681561"
                  src="https://images.unsplash.com/photo-1611646569793-de6dbad0d74e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                  alt=""
              />
          </div>
        </div>
      </div>

      <section className="bg-white py-8">
        <div className="container max-w-8xl mx-auto m-8">
          <p className='text-center'>Unboxing like never before</p>
          <h3 className="w-full my-2 text-2xl font-bold leading-tight text-center text-gray-800">
            Discover our new and improced packing
          </h3>

          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">

              <p className="text-gray-600 mb-8 text-xl">
                We’ve always been fascinated by packaging, and we don’t like to be wasteful about it. The logistics behind our footwear need to be as innovative as the products themselves.
                <br />
                <br />

                From single-use plastic bags, to cardboard shipping boxes — the world’s resources are finite, but our imagination is not. We’ve redesigned our packaging with efficiency and the environment in mind. Using recycled plastic bottles and recycled cardboards to create long lasting items.
                <br />
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6">

            </div>
          </div>

          <div className="flex flex-wrap flex-col-reverse sm:flex-row items-center">
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <img src='https://cdn.shopify.com/s/files/1/0505/9044/9849/files/ETQ_Shopper_Layers_4_1920x.jpg?v=1623681561' alt="" className="w-full"/>
            </div>
            <div className="w-full h-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <p className="text-md text-gray-800 font-bold leading-none mb-3">
                  Lorem ipsum dolor sit amet
                  <br/>
                </p>
                <p className="text-gray-600 mb-8 text-2xl">
                We’ve designed our shopping bags to last for more than a single use. Made out of three recycled plastic bottles.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">

              <p className="text-gray-600 mb-8 text-xl">
                Shopping bags are one of the most contaminating single-use items. Which is why we’ve redesigned ours to be both extremely functional and durable, while also recycling three plastic bottles in the process.
                <br />
                <br />
                Our reusable shopping bag is functionally designed to last for more than a single use. The foldable tote packs into a compact portable pouch. Small enough to keep with you always, easy to squeeze in your bag so you're organised and shopping-ready. Unfold to carry on your shoulder, or in your hand.
                <br />
              </p>
            </div>
            <div className="w-5/6 sm:w-1/2 p-6">

              <p className="text-gray-800 mb-8 text-xl">
                <p className='font-bold'>Cut down on waste</p>
                <br />
                Our shoe- and shipping-box in one is made from recycled cardboard and printed with vegetable ink. Perfect for shipping or to display your new wardrobe essentials.
                <br />
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

export default ModularPackaging

// https://cdn.shopify.com/s/files/1/0505/9044/9849/files/ETQ-Packaging-box-2_828x.gif?v=1623681561