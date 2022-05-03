import React, {useEffect, useState} from 'react'
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import Link from 'next/link';
import Image from 'next/image';
import Cart from './Cart';
import HeaderMobile from '@/src/components/HeaderMobile';
import Logo from '@/public/data/logo.svg'

const Header = () => {
  const { cartData, cartPending, cartError } = useAppSelector((state) => state.cart);
  const cart = cartData?.data?.items;
  const dispatch = useAppDispatch();
  const [openCart, setOpenCart] = useState(false);
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
  const totalItems = cart?.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  return (
      <header >
        <div className={`fixed top-0 left-0 z-10 p-6 pb-4 px-10 w-[calc(100vw-32px)] m-2 sm:border ${colorChange ? 'bg-opacity-95 sm:bg-white ' : ' border-transparent '}`}>
          <div className="sm:flex sm:flex-row justify-between hidden ">
            <Link href="/home" >
                <div className={`mr-3 cursor-pointer ${isHome&&!colorChange ? 'text-white' : 'text-black'}`}>
                  <Image src={Logo} width={300} height={25} fill='white' stoke='white'/>
                </div>
            </Link>
            <div className="flex space-x-4 ">
              <Link href='/about' >
                <div className={`px-3 cursor-pointer ${'text-black'}`}>About</div>
              </Link>

              <Link href="/shop">
                <div className={`px-3 cursor-pointer ${'text-black'}`}>Shop</div>
              </Link>

              <Link href="/help">
                <div className={`px-3 cursor-pointer ${'text-black'}`}>Help</div>
              </Link>
              <div className='px-3'>
                {/* <button className={`px-3 cursor-pointer text-black`} onClick={() => setOpenCart(true)}>
                  Cart {totalItems}
                </button> */}
                <button className={` h-7 w-7 cursor-pointer bg-black rounded-full`} 
                  onClick={() => setOpenCart(true)}>
                  <div className='text-gray-300'>
                    {totalItems ? totalItems : 0}
                  </div>
                </button>
                <Cart open={openCart} setOpen={setOpenCart}/>
              </div>
              {/* <div className='px-2 text-white '>Cart {cart.length}</div> */}
            </div>
          </div>
        </div>
          <HeaderMobile />
      </header>
  )
}


export default Header