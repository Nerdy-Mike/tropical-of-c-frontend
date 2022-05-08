import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { ChevronLeftIcon} from '@heroicons/react/solid'

const ShippingInformation: NextPage = () => {

    const router = useRouter();
  return (
    <div className=" bg-white overflow-hidden -z-10">
        <div className=" mx-auto">
            <div className=' '>
            {/* Banner */}
            <div className='relative'>
                <img
                    className="w-full object-cover h-72 "
                    src="https://ae01.alicdn.com/kf/Hce56c82d5eb549d88c4f52d073597ab1v/2021-Sexy-N-Push-Up-Bikini-B-B-i-o-B-i-B-G-i.jpg_Q90.jpg_.webp"
                    alt=""
                />

            </div>
            </div>

            <div className='flex flex-col py-10 px-32 '>
                 <button className='-ml-7 text-left flex underline underline-offset-1' onClick={() => router.back()}>
                    <ChevronLeftIcon className='w-7 h-6 text-gray-500' /> Return
                </button>
                <p className='text-lg font-bold py-6'>Shipping information</p>
                <div className='text-gray-700 pb-4'>
                    We do our best to process and ship orders within 1 business day (Monday-Friday, excluding holidays). Same day shipment applies on all orders placed before 4pm on working days. If you have any questions about your order, you can reach out to our Customer Service and we will be happy to help.                
                </div>
                <div className='text-gray-700'>
                    We ship to the following countries: Australia, Austria, Belgium, Bulgaria, Canada, Croatia, Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Ireland, Italy, Latvia, Lithuania, Luxembourg, Netherlands, Norway, Poland, Portugal, Romania, Russia, Slovakia, Slovenia, Spain, Sweden, Switzerland, United Kingdom and the United States.               
                </div>

                <p className='text-md font-bold py-6'>Our fee:</p>
                <ul className='list-disc pl-4'>
                    <li className='text-gray-700'>
                    We accept returns and exchanges only for items that have been purchased directly from us.
                    </li>
                    <li className='text-gray-700'>
                    Orders can be returned within a period of 15 days if the original tags are not removed, starting from the moment you receive your order;
                    </li>
                    <li className='text-gray-700'>
                    The costs of returning an order are at your own expense; However, in the case of a damaged or defective product, we will provide you with a refund of the total amount paid for the order.
                    </li>
                    <li className='text-gray-700'>
                    We will issue a refund or exchange request only if the product is damaged or defective.
                    </li>

                </ul>

                <p className='text-md font-bold py-6'>Important information</p>
                <div className='text-gray-700 italic'>
                    Delivery times are provided as guidelines only, and do not take into account possible delays caused by payment authorization and/or stock availability. We are unable to deliver to post office boxes.
                </div>


                <p className='text-md font-bold py-6'>Sale</p>
                <div className='text-gray-700'>
                Please note that during Sale it may take a little longer to process your order. We do our best to ship your order as soon as possible.
                </div>

                <p className='text-md font-bold py-6'>Discount</p>
                <div className='text-gray-700'>
                We are happy to offer you a discount on your order. Please contact us for more information.
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShippingInformation
