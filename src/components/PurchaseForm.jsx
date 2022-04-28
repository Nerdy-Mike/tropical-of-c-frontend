import React from 'react'

const PurchaseForm = ({customerInfo, setCustomerInfo, hanldeCheckout}) => {


  return (
    <form className="w-full py-8 px-10 h-5/6 border border-gray-300" >
        <p className='text-2xl '>Delivery Information</p>
        <div className="flex flex-wrap -mx-3 mb-6 py-4">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name" >
                First Name*
            </label>
            <input className="appearance-none block w-full  text-gray-700 border  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder=""
                required
                onChange={(event)=> setCustomerInfo({...customerInfo, firstName: event.target.value})}
            />
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                Last Name
            </label>
            <input className="appearance-none block w-full  text-gray-700 border border-gray-200  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""
                onChange={(event)=> setCustomerInfo({...customerInfo, lastName: event.target.value})}
            />
            </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-phone" >
                Phone*
            </label>
            <input className="appearance-none block w-full  text-gray-700 border border-gray-200  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder=""
                required
                onChange={(event)=> setCustomerInfo({...customerInfo, phone: event.target.value})}
            />
            </div>
            <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-address">
                Address *
            </label>
            <input className="appearance-none block w-full  text-gray-700 border border-gray-200  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder=""
                required
                onChange={(event)=> setCustomerInfo({...customerInfo, address: event.target.value})}
            />
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                Email 
            </label>
            <input className="appearance-none block w-full  text-gray-700 border border-gray-200  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" 
                type="email" placeholder=""
                onChange={(event)=> setCustomerInfo({...customerInfo, email: event.target.value})}
            />
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-note">
                Note
            </label>
            <textarea id="about" name="about" rows="5" className="appearance-none block w-full  text-gray-700 border border-gray-200  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder=""
            onChange={(event)=> setCustomerInfo({...customerInfo, note: event.target.value})}
            ></textarea>

            </div>
        </div>
    </form>
  )
}

export default PurchaseForm