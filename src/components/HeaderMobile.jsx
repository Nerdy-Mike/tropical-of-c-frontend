import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import Cart from '@/src/components/Cart'
import Logo from '@/public/data/logo.svg'
import Image from 'next/image'

const navigation = [
  { name: 'Shop', href: '/shop', current: true },
  { name: 'Help', href: '/help', current: false },
]


export default function HeaderMobile() {
    const [openCart, setOpenCart] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [isHome, setIsHome] = useState(false);

    const [ colorChange, setColorChange ] = useState(false);
    const changeNavBarColor = () => {
      if(window.scrollY >=80){
        setColorChange(true);
      } else {
        setColorChange(false);
      }
    }
    if(typeof window !== 'undefined'){
        window.addEventListener('scroll', changeNavBarColor);
        useEffect(() => {
          if(typeof window !== 'undefined'){
            if(window.location.pathname === '/home'  ){
              setIsHome(true);
            } else {
              setIsHome(false);
            }
          }
        }, [window.location.pathname])
      }
    
    return (
        <div className={`sm:hidden fixed top-0 left-0 z-10 p-6 px-4 w-[calc(100vw-32px)] m-2 border transition-all duration-300 ${colorChange||openMenu ? 'bg-opacity-95 bg-white ' : ' border-transparent '}`}>
            <div className='flex flex-row justify-between sm:hidden w-full'>
                <Link href="/" >
                  <div className={` cursor-pointer ${isHome&&!colorChange ? 'text-white' : 'text-black'}`}>
                    <Image src={Logo} width={300} height={25} fill='white' stoke='white'/>
                  </div>
                </Link>
                <button onClick={() => {setOpenMenu(!openMenu)}} className={`${!isHome&&openMenu||colorChange ? 'text-black' : 'text-black'}`}>
                  {/* Menu Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                  </svg>
                </button>
            </div>
            <Transition
              show={openMenu}
              as={Fragment}
              enter="transition ease-out duration-300"
              enterFrom="opacity-0 -translate-y-2"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-2"
            >
                <div className={`w-full px-4 flex flex-col relative pt-6 ${openMenu ? 'h-screen -mb-24' : 'hidden'}`}>
                    {
                        navigation.map((item, index) => {
                            return (
                                <button onClick={() => setOpenMenu(false)} key={index} className=' flex border-b justify-center sm:hidden w-full my-4 py-4 hover:bg-gray-100'>
                                    <Link href={item.href}>
                                            <div>
                                                <div className={`px-2 cursor-pointer  ${'text-black'}`}>{item.name}</div>
                                            </div>
                                    </Link>

                                </button>

                            )
                        })
                    }
                    <div>
                        <button className='flex border-b justify-center sm:hidden w-full my-4 py-4 hover:bg-gray-100' onClick={() => setOpenCart(true)}>Cart</button>
                        <Cart open={openCart} setOpen={setOpenCart}/>
                    </div>
                    <div className='absolute inset-x-0 bottom-24 text-center '>
                        <button onClick={() => setOpenMenu(false)}>
                            <Link href='/about'>
                                About Us
                            </Link>
                        </button>
                    </div>
                </div>

            </Transition>
        </div>

    )
}

// import { Menu, Transition } from '@headlessui/react'
// import { Fragment, useEffect, useRef, useState } from 'react'

// export default function Example() {
//   return (
//     <div className="w-full flex flex-row justify-between">
//         <div>
//             TROPICAL of C
//         </div>
//         <Menu as="div" className=" inline-block text-left">
//             <div>
//             <Menu.Button className="text-right w-full px-4 py-2 text-sm font-medium text-black ">
//                 Options
//             </Menu.Button>
//             </div>
//             <Transition
//             as={Fragment}
//             enter="transition ease-out duration-100"
//             enterFrom="transform opacity-0 scale-95"
//             enterTo="transform opacity-100 scale-100"
//             leave="transition ease-in duration-75"
//             leaveFrom="transform opacity-100 scale-100"
//             leaveTo="transform opacity-0 scale-95"
//             >
//             <Menu.Items className="w- mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                 <div className="px-1 py-1 ">
//                 <Menu.Item>
//                     {({ active }) => (
//                     <button
//                         className={`${
//                         active ? 'bg-violet-500 text-white' : 'text-gray-900'
//                         } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
//                     >
//                         Edit
//                     </button>
//                     )}
//                 </Menu.Item>
//                 <Menu.Item>
//                     {({ active }) => (
//                     <button
//                         className={`${
//                         active ? 'bg-violet-500 text-white' : 'text-gray-900'
//                         } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
//                     >
//                         Duplicate
//                     </button>
//                     )}
//                 </Menu.Item>
//                 </div>
//                 <div className="px-1 py-1">
//                 <Menu.Item>
//                     {({ active }) => (
//                     <button
//                         className={`${
//                         active ? 'bg-violet-500 text-white' : 'text-gray-900'
//                         } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
//                     >
//                         Archive
//                     </button>
//                     )}
//                 </Menu.Item>
//                 <Menu.Item>
//                     {({ active }) => (
//                     <button
//                         className={`${
//                         active ? 'bg-violet-500 text-white' : 'text-gray-900'
//                         } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
//                     >
//                         Move
//                     </button>
//                     )}
//                 </Menu.Item>
//                 </div>
//                 <div className="px-1 py-1">
//                 <Menu.Item>
//                     {({ active }) => (
//                     <button
//                         className={`${
//                         active ? 'bg-violet-500 text-white' : 'text-gray-900'
//                         } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
//                     >
//                         Delete
//                     </button>
//                     )}
//                 </Menu.Item>
//                 </div>
//             </Menu.Items>
//             </Transition>
//         </Menu>
//     </div>
//   )
// }

