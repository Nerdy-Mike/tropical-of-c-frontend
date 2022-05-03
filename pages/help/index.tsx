import React, {useEffect} from 'react'
import type { NextPage } from 'next'
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import Cookies from 'js-cookie';
import { getCart, addToCart } from '@/src/store/actions/cartActions';

const Help: NextPage = () => {

  const dispatch = useAppDispatch();
  const userId = Cookies.get('userId')

  useEffect(() => {
    dispatch(getCart({userId: userId || ''}))
  }, [])

  return (
    <div>
      <div className=" bg-white overflow-hidden -z-10">
        <div className=" mx-auto">
          <div className='min-h-screen '>
            {/* Banner */}
            <div className='relative'>
              <img
                  className="w-full object-cover h-50 "
                  src="https://cdn.shopify.com/s/files/1/0505/9044/9849/files/low-1-side-detail-e1559738258985-2000x0-c-default_2048x.jpg?v=1619170804"
                  alt=""
              />
              <div className='absolute top-1/2 right-1/2 font-bold -mr-16'>
                  Ask us anything
              </div>
            </div>
            {/* End Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-6 py-16 px-10 sm:px-16">
              {/* Size guide and Returns */}
              <div className="col-span-2 flex flex-col space-y-10 ">
                <div className=" space-y-4">
                  <h1 className="text-xl  text-gray-800">
                    Size Guide
                  </h1>
                  <p className="text-gray-600 py-4">
                    Find out what size you need in our size guides.
                  </p>
                  <a className='underline underline-offset-2 text-gray-500 pt-2' href='/help/size-guide'>Read more</a>
                </div>
                <div className="space-y-4">
                  <h1 className="text-xl  text-gray-800">
                    Returns
                  </h1>
                  <p className="text-gray-600 py-4">
                    Read how to return your item(s) and which rules apply.
                  </p>
                  <a className='underline underline-offset-2 text-gray-500 pt-2' href='/help/returns-exchanges'>Read more</a>
                </div>
              </div>

              {/* Shipping Information & Exchanges*/}
              <div className="col-span-2 flex flex-col space-y-10 pt-10 md:pt-0">
                <div className=" space-y-4">
                  <h1 className="text-xl  text-gray-800">
                    Shipping information
                  </h1>
                  <p className="text-gray-600 py-4">
                    Shipping rates, estimated times and free shipping options.
                  </p>
                  <a className='underline underline-offset-2 text-gray-500 pt-2' href='/help/shipping-information'>Read more</a>
                </div>
                <div className="space-y-4">
                  <h1 className="text-xl  text-gray-800">
                    Exchanges
                  </h1>
                  <p className="text-gray-600 py-4">
                    Read how to easily apply your exchange and make sure your item is reserved.
                  </p>
                  <a className='underline underline-offset-2 text-gray-500 pt-2' href='/help/returns-exchanges'>Read more</a>
                </div>
              </div>
              {/* Payment & Questions */}
              <div className="col-span-2 flex flex-col space-y-10 pt-10 md:pt-0">
                <div className=" space-y-4">
                  <h1 className="text-xl  text-gray-800">
                    Payment

                  </h1>
                  <p className="text-gray-600 py-4">
                    Available payment options and other frequently asked payment questions.
                  </p>
                  <a className='underline underline-offset-2 text-gray-500 pt-2' href='/help/frequently-asked-questions'>Read more</a>
                </div>
                <div className="space-y-4">
                  <h1 className="text-xl  text-gray-800">
                    Frequently Asked Questions
                  </h1>
                  <p className="text-gray-600 py-4">
                    Find your answer in our frequently asked questions section.
                  </p>
                  <a className='underline underline-offset-2 text-gray-500 pt-2' href='/help/frequently-asked-questions'>Read more</a>
                </div>
              </div>
            </div>
          </div>
            {/* Ask more */}
          <div className='py-16 px-6 flex items-center justify-center  text-center'>
            <div className='text-lg'>
            Can't find the answer you are looking for? You can send an e-mail to: 
            <a href="mailto:xyz@abc.com" className='px-2 underline underline-offset-1'>youremail@gmail.com</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Help
