import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import { removeFromCart, getCart, getCartFromResponse } from '@/src/store/actions/cartActions';
import { wrapper } from '@/src/store';
import PurchaseForm from '@/src/components/PurchaseForm';


export default function Checkout() {

    const { cartData, cartPending, cartError } = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();

    const cart = cartData?.data?.items;

    const handleRemoveFromCart = async (productId) => {
        try{
            console.log(cartData)
            await dispatch(removeFromCart({productId}))
            .then(() => dispatch(getCart()))
        } catch(err) {
            console.log(err)
        }
      }


    const totalPrice = cart?.reduce((acc, item) => {
    return acc + item.quantity * item.product.price;
    }, 0);
    
    const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'VND',
    })
    return (
        <div className='h-screen grid grid-cols-5 pt-24 px-24 mt-8'>
            <div className='col-span-3   border border-black '>
                <PurchaseForm />
            </div>
            <div className='col-span-2 px-4 mx-2 sm:px-6'>
                <div className='text-xl'>
                    Your Cart
                </div>
                <div className='py-4 my-4 max-h-96 overflow-y-scroll px-2 border'>
                    <ul role="list" className="-my-6 divide-y divide-gray-200 m-2">
                        {cart?.map((product, index) => (
                            <li key={index} className="flex py-6 ">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden -md border border-gray-200">
                                <img
                                    src={product.product.image}
                                    alt={product.product.name}
                                    className="h-full w-full object-cover object-center"
                                />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                        <a href={product.href}> {product.product.name} </a>
                                    </h3>
                                    <p className="ml-4">{formatter.format(product.product.price *product.quantity)}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty {product.quantity}</p>

                                    <div className="flex">
                                    <button type="button" className="font-medium text-gray-600 hover:text-gray-500"
                                        onClick={(e) => {e.preventDefault(); handleRemoveFromCart(product.product.productId)}}>
                                        Remove
                                    </button>
                                    </div>
                                </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            <div className="border-t border-gray-200 py-6 ">
                <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>{formatter.format(totalPrice)}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                <button
                className="flex mt-8 items-center justify-center  border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm w-full"
                >
                Purchase
                </button>
                <div className="my-4 flex justify-center text-center text-sm text-gray-500">
                    <p>
                    or{' '}
                    <button
                        type="button"
                        className="font-medium text-gray-700 hover:text-gray-900"
                        onClick={() => setOpen(false)}
                    >
                        Continue Shopping<span aria-hidden="true"> &rarr;</span>
                    </button>
                    </p>
                </div>
                </div>
            </div>
        </div>
    )    
}



Checkout.getInitialProps = wrapper.getInitialPageProps(
    ({ dispatch }) =>
    
      async () => {      
        await dispatch(getCart());
      }
  )