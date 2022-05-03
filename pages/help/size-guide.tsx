import React from 'react'
import type { NextPage } from 'next'
import { ChevronLeftIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'

const SizeGuide: NextPage = () => {

    const router = useRouter();

    return (
        <div className=" bg-white overflow-hidden -z-10">

            <div className=" mx-auto">
                <div className=' '>
                {/* Banner */}
                <div className='relative'>
                    <img
                        className="w-full object-cover h-72 "
                        src="https://cdn.shopify.com/s/files/1/0505/9044/9849/files/low-1-side-detail-e1559738258985-2000x0-c-default_2048x.jpg?v=1619170804"
                        alt=""
                    />

                </div>
                </div>

                {/* Size Guide */}
                
                <div className="py-10 px-32 ">
                    <div className='pb-6 '>
                        <button className='-ml-7 text-left flex underline underline-offset-1' onClick={() => router.back()}>
                            <ChevronLeftIcon className='w-7 h-6 text-gray-500' /> Return
                        </button>
                    </div>
                    <div className='flex  items-center flex-col justify-center text-center'>
                        <p className='font-bold'>How to measure:</p>
                        <p className='px-32'>
                        Let’s find your perfect fit. Place a sheet of paper on the floor against the wall and put your feet (with socks) on it, heels against the wall. Make sure you lean on your feet with full power when measuring. Now you simply draw a line at the end of the biggest foot. Measure the distance with a ruler and find the size that matches it: see size table. Are you in between sizes? In that case, we suggest taking the bigger size.
                        </p>
                    </div>
                    <div className="flex flex-col md:px-10 lg:px-36">
                        <img className=" object-cover  " src="https://cdn.shopify.com/s/files/1/0557/9974/2638/files/sw-period-leakproof-high-waist-swim-bikini-bottom-size-guide_2048x2048.png?v=1628676477"/>
                        <img className=" object-cover  " src="https://cdn.shopify.com/s/files/1/0557/9974/2638/files/sw-period-leakproof-mid-waist-swim-bikini-bottom-size-guide_2048x2048.png?v=1628675461"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SizeGuide
