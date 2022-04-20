import { useState } from 'react';
// import { NextPage } from 'next/types';
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import { getCart } from '@/src/store/actions/cartActions';
import { wrapper } from '@/src/store';

const Counter = () => {
  const dispatch = useAppDispatch();
  // const count = useAppSelector(selectCount);
  const { cartData, cartPending, cartError } = useAppSelector((state) => state.cart);
  const cart = cartData?.data?.productId;

  const handleAddCart = async (product) => {
    const optimizedProduct = {product: {name: product.product.name, price: product.product.price, id: product.product._id}}
  }
  return (
    <>
      <h2>
        The current cart:
        {cart.map((item, index) => {
          return (
            <div key={index}>
              {item.name}
              {item.price}
            </div>
          )}
        )}
      </h2>
    </>
  );
};

Counter.getInitialProps = wrapper.getInitialPageProps(
  ({ dispatch }) =>
    async () => {
      await dispatch(getCart());
    }
)




export default Counter;
