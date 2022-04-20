import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { setCookies, getCookie } from 'cookies-next';
import { useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import { wrapper } from '@/src/store';
import { getProducts } from '@/src/store/actions/productActions';
import { getCart, addToCart } from '@/src/store/actions/cartActions';


const Home: NextPage = () => {
  // // Set cookies
  // const currentUserId = getCookie('gemUserId');
  // if(!currentUserId){
  //   setCookies('gemUserId', userId);
  // };

  const { productData, productPending, productError } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const products = productData?.data;

  const handleAddCart = async (product:any) => {
    const optimizedProduct = {product: {name: product.product.name, price: product.product.price, id: product.product._id}}
    await dispatch(addToCart(optimizedProduct));
    await dispatch(getCart());
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        {/* <div>
          <h3>Current Cart:</h3>
          {newCart?.map((product:any, index:number) => (
            <div key={index}>
              <p>{product.name}</p>
              <p>{product.price}</p>
              <p>{quantity[index]}</p> 
            </div>
          ))}
        </div> */}
        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
        {products?.map((product: any, key:number) => (
            <button
            onClick={() => handleAddCart({product})}
            key={key}
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">{product.name} &rarr;</h3>
            <p className="mt-4 text-xl">
              {product.description}
            </p>
          </button>
        )
        )}
        </div>

      </main>
    </div>
  )
}

export default Home

// export async function getStaticProps() {
  
//   const {data: products} : any = await getProducts()
//   const {data: cart} : any = await getCartFromUserId()
//   return {
//     props: {
//       products,
//       cart
//     },
//   };
// }

Home.getInitialProps = wrapper.getInitialPageProps(
  ({ dispatch }) =>
    async () => {
      await dispatch(getProducts());
      await dispatch(getCart());
    }
)



//TODO: Optimalize product image