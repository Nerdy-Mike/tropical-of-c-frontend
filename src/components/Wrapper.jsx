import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { getProducts } from '@/src/store/actions/productActions';
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';

const Wrapper = ({children}) => {



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
