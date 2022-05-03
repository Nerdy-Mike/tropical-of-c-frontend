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
              <img className='max-h-72 grayscale-30' loading='lazy' src='https://images.unsplash.com/photo-1606937492590-2c6e942b1951?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZHVsYXIlMjBwYWNrYWdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' />
            </div>
            <div className='flex items-center pl-4'>
              <div>
                <p className='font-bold text-gray-800'>Modular Packaging</p>
                <p className='text-gray-600'>Unboxing like never before</p>
                <Link href='/about/modular-packaging' >
                  <div className='italic cursor-pointer'>Read more</div>
                </Link>
              </div>
            </div>
          </div>
                  {/* Feature 2 */}

          <div className='grid grid-cols-2'>
            <div >
              <img className='max-h-72 grayscale-30' loading='lazy'  src='https://images.unsplash.com/photo-1532347922424-c652d9b7208e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dHJvcGljYWwlMjBiaWtpbml8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'  />
            </div>
            <div className='flex items-center pl-4'>
              <div>
                <p className='font-bold text-gray-800'>Who we are</p>
                <p className='text-gray-600'>Our journey</p>
                <Link href='/about' >
                  <div className='italic cursor-pointer'>Read more</div>
                </Link>
              </div>
            </div>
          </div>        
                  {/* Feature 3 */}

          <div className='grid grid-cols-2'>
            <div>
              <img className='max-h-72 grayscale-30' loading='lazy' src='https://images.unsplash.com/photo-1622146322108-ffef66c1e7a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3dpbXdlYXJ8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' width="190" />
            </div>
            <div className='flex items-center pl-4'>
              <div>
                <p className='font-bold text-gray-800'>How it's made</p>
                <p className='text-gray-600'> Quality bring comfort</p>
                <Link href='/about/how-its-made' >
                  <div className='italic cursor-pointer'>Read more</div>
                </Link>
              </div>
            </div>
          </div>
      </div>
    </div>

  )
}

export default Feature