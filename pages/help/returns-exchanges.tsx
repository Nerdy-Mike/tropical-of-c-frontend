import React from 'react'
import type { NextPage } from 'next'
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

            <div className='flex flex-col py-10 px-32'>
                <button className='text-left' onClick={() => router.back()}>
                    Return
                </button>
                <p className='text-lg font-bold py-6'>Returns & Exchanges</p>
                <div className='text-gray-700'>
                Returning a product is always possible, either at our store or by sending the product(s) back to us. When requesting a return or exchange, please make sure to mind the following information.
                </div>

                <p className='text-md font-bold py-6'>Our policy</p>
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

                <p className='text-md font-bold py-6'>How to return</p>
                <div className='text-gray-700 italic'>
                Return in Vietnam
                </div>
                <ul className='list-disc pl-4 pt-6'>
                    <li className='text-gray-700'>
                    You can drop off at out store or head to our return portal;
                    </li>
                    <li className='text-gray-700'>
                    Fill in your order number and the email address you used when placing your order;
                    </li>
                    <li className='text-gray-700'>
                    Select the item(s) you want to return along with the reason(s) and tell us if you wish to receive a refund or an exchange;
                    </li>
                    <li className='text-gray-700'>
                    Fill out your address details and choose a return method;
                    </li>
                    <li className='text-gray-700'>
                    Drop off your return at the nearest parcel shop.
                    </li>
                </ul>

                <p className='text-md font-bold py-6'>What's next?</p>
                <div className='text-gray-700'>
                We aim to process all returns within 3 business days after receiving them. You will receive a final confirmation when your refund has been issued or when your exchange has been shipped. Please allow a couple of days for the refund to be visible in your bank account.
                </div>
                <div className='text-gray-700 py-4'>
                If you have any questions, please contact us on +31 (0) 20 261 38 15 or send an email to service@etq-amsterdam.com. Our Customer Service is open from 10 AM to 6 PM on weekdays.
                </div>
            </div>
        </div>
    </div>
  )
}

export default SizeGuide
