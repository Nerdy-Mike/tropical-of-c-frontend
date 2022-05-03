import React, {useEffect} from 'react'
import { NextPage } from 'next'
import HeroSection from '@/src/components/HeroSection'
import Features from '@/src/components/Features'
import Favorite from '@/src/components/Favorite'

import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import { wrapper } from '@/src/store';
import { getProducts } from '@/src/store/actions/productActions';
import { getCart, addToCart } from '@/src/store/actions/cartActions';
import Cookies from 'js-cookie';

const Home: NextPage = () => {

  const dispatch = useAppDispatch();
  const userId = Cookies.get('userId')

  useEffect(() => {
    dispatch(getCart({userId: userId || ''}))
  }, [])
  
  return (
    <div>
        <HeroSection />
        <Features />
        <Favorite />
        
    </div>
  )
}

export default Home

