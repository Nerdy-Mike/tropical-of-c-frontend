import React, {useEffect, useState} from 'react'
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import Link from 'next/link';
import { setRequestMeta } from 'next/dist/server/request-meta';
import Cart from './Cart';
import HeaderMobile from '@/src/components/HeaderMobile';

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
        <div className={`fixed top-0 left-0 z-10 p-6 px-10 w-[calc(100vw-32px)] m-2 sm:border ${colorChange ? 'bg-opacity-95 sm:bg-white ' : ' border-transparent '}`}>
          <div className="sm:flex sm:flex-row justify-between hidden ">
            <Link href="/home" >
                <div className={`mr-3 cursor-pointer ${isHome&&!colorChange ? 'text-white' : 'text-black'}`}>
                  TROPICAL of C
                </div>
            </Link>
            <div className="flex space-x-4 ">
              <Link href="/shop">
                <div className={`px-3 cursor-pointer ${'text-black'}`}>Shop</div>
              </Link>

              <Link href="/help">
                <div className={`px-3 cursor-pointer ${'text-black'}`}>Help</div>
              </Link>
              <div>
                <button className={`px-3 cursor-pointer text-black`} onClick={() => setOpenCart(true)}>Cart {totalItems}</button>
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