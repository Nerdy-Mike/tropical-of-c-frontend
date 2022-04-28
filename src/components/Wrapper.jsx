import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { getProducts } from '@/src/store/actions/productActions';
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import { setCookies, getCookie, checkCookies } from 'cookies-next';

const Wrapper = ({children}) => {
  let userId = getCookie('userId')
  if(!userId){
    setCookies('userId', Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15))
  }
  return (
    <div className=''>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Wrapper
