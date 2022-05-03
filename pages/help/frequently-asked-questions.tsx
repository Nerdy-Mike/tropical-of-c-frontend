import React from 'react'
import type { NextPage } from 'next'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon, ChevronLeftIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'

const FrequentlyAsked: NextPage = () => {
    const router = useRouter();

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
            <div className="grid grid-cols-2 sm:grid-cols-6 py-8">
              {/* Frequently Asked Questions */}
              
              <div className="col-span-4 flex flex-col space-y-6 px-8 sm:px-16">
                <button className='-ml-7 text-left flex underline underline-offset-1' onClick={() => router.back()}>
                    <ChevronLeftIcon className='w-7 h-6 text-gray-500' /> Return
                </button>
                <p className='font-bold'>
                Frequently Asked Questions
                </p>
              <div className="w-full ">
                <div className="w-full mx-auto bg-white rounded-2xl">
                    <Disclosure>
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 my-2 text-sm font-medium text-left text-gray-800 bg-gray-100  hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                            <span>What is your refund policy?</span>
                            <ChevronUpIcon
                            className={`${
                                open ? 'transform rotate-180' : ''
                            } w-5 h-5 text-gray-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            If you're unhappy with your purchase for any reason, email us
                            within 90 days and we'll refund you in full, no questions asked.
                        </Disclosure.Panel>
                        </>
                    )}
                    </Disclosure>
                    <Disclosure>
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 my-2 text-sm font-medium text-left text-gray-800 bg-gray-100  hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                            <span>What is your refund policy?</span>
                            <ChevronUpIcon
                            className={`${
                                open ? 'transform rotate-180' : ''
                            } w-5 h-5 text-gray-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            If you're unhappy with your purchase for any reason, email us
                            within 90 days and we'll refund you in full, no questions asked.
                        </Disclosure.Panel>
                        </>
                    )}
                    </Disclosure>
                    <Disclosure>
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 my-2 text-sm font-medium text-left text-gray-800 bg-gray-100  hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                            <span>What is your refund policy?</span>
                            <ChevronUpIcon
                            className={`${
                                open ? 'transform rotate-180' : ''
                            } w-5 h-5 text-gray-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            If you're unhappy with your purchase for any reason, email us
                            within 90 days and we'll refund you in full, no questions asked.
                        </Disclosure.Panel>
                        </>
                    )}
                    </Disclosure>
                </div>
                </div>
              </div>


              {/* Ask more */}
              <div className="col-span-2 flex flex-col space-y-10 px-10 sm:px-16 py-10">
                <div className=" space-y-4">

                  <p className="text-gray-600 py-4">
                    Can’t find the answer you are looking for? Contact us by sending an e-mail.
                  </p>
                  <a href="mailto:xyz@abc.com" className='underline underline-offset-1'>youremail@gmail.com</a>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default FrequentlyAsked
