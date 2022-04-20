import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Feature = () => {
  return (
    <div className=' p-10 md:p-16' id='Features'>
      <div className='flex flex-col items-center col-span-3 py-4  '>
          <div className='text-3xl pt-8 sm:pt-2'>
            About Us
          </div>
          <p className='max-w-xl text-center text-lg py-4'>
          Founded in 2010 in Amsterdam, ETQ derived under the mindset of eliminating over-accessorized branding and focusing primarily on letting the quality of the product speak for itself. Read more
          </p>
        </div>
      <div className='grid md:grid-cols-3 gap-4' >

                {/* Feature 1 */}
          <div className='grid grid-cols-2'>
            <div>
              <img src='https://cdn.shopify.com/s/files/1/0505/9044/9849/articles/Doos-Web-thumbnail-22_9495fac5-50e7-41ae-bee4-e5924e1fba1d_400x.jpg?v=1649764712' />
            </div>
            <div className='flex items-center pl-4'>
              <div>
                <p className='font-bold text-gray-800'>Modular Packaging</p>
                <p className='text-gray-600'>Unboxing like never before</p>
                <Link href='/modular-packaging' >
                  <div className='underline underline-offset-2 italic cursor-pointer'>See more</div>
                </Link>
              </div>
            </div>
          </div>
                  {/* Feature 2 */}

          <div className='grid grid-cols-2'>
            <div>
              <img src='https://cdn.shopify.com/s/files/1/0505/9044/9849/articles/Doos-Web-thumbnail-22_9495fac5-50e7-41ae-bee4-e5924e1fba1d_400x.jpg?v=1649764712'  />
            </div>
            <div className='flex items-center pl-4'>
              <div>
                <p className='font-bold text-gray-800'>Who we are</p>
                <p className='text-gray-600'>Our journey</p>
                <Link href='/about' >
                  <div className='underline underline-offset-2  italic cursor-pointer'>See more</div>
                </Link>
              </div>
            </div>
          </div>        
                  {/* Feature 3 */}

          <div className='grid grid-cols-2'>
            <div>
              <img src='https://cdn.shopify.com/s/files/1/0505/9044/9849/articles/Journal_HowIt_sMade_Small2_400x.jpg?v=1621353623' width="190" />
            </div>
            <div className='flex items-center pl-4'>
              <div>
                <p className='font-bold text-gray-800'>How it's made</p>
                <p className='text-gray-600'> Quality bring comfort</p>
                <Link href='/how-its-made' >
                  <div className='underline underline-offset-2 italic cursor-pointer'>See more</div>
                </Link>
              </div>
            </div>
          </div>
      </div>
    </div>

  )
}

export default Feature