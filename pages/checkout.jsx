import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import { removeFromCart, getCart, getCartFromResponse, purchaseCart } from '@/src/store/actions/cartActions';
import { wrapper } from '@/src/store';
import PurchaseForm from '@/src/components/PurchaseForm';
import { setCookies, getCookie, checkCookies, removeCookies } from 'cookies-next';


export default function Checkout() {
    const userId = getCookie('userId')
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getCart({userId: userId}))
    }, [])
    const { cartData, cartPending, cartError } = useAppSelector((state) => state.cart);
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

    const [customerInfo, setCustomerInfo] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
        note:''
    })
    const totalPrice = cart?.reduce((acc, item) => {
        return acc + item.quantity * item.product.price;
    }, 0);
    
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'VND',
    })

    const preCheck = ({firstName, phone, email, address}) => {
        if(email !== ''){
            const patternEmail = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
            if(!patternEmail.test(email)){
                alert('Invalid Email')
                return false
            }
        }
        if(firstName && phone && email && address) {
            return true
        }
        return false
    }

    const hanldeCheckout = async (e) => {
        e.preventDefault();
        const { firstName, lastName, phone, email, address, note } = customerInfo;
        if(preCheck({firstName, phone, email, address}) && cart.length > 0){
            const purchaseData = {
                userId: userId,
                user: userId,
                items: cart,
                totalPrice: totalPrice,
                discount: '',
                name: `${firstName} ${lastName}`,
                email: email,
                phone: phone,
                address: address,
                note: note
            }

            dispatch(purchaseCart(purchaseData))
            handleReset()
            setCookies('userId', Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15))
            userId = getCookie('userId')
            dispatch(getCart({userId: userId}))
            alert('Thank you for your purchase!. We will contact you shortly.')
        } else{
            if(cart.length === 0){
                alert('Your cart is empty')
            } else {
                alert('Please fill required information')
            }
        }

    }

    const handleReset = () => {
        Array.from(document.querySelectorAll('input')).forEach(item => {
            item.value = ''
        })
        setCustomerInfo({
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            address: '',
            note:''
        })
    }

    return (
        <div className='max-h-screen grid grid-cols-5 pt-24 px-24 mt-8'>
            <div className='col-span-3   '>
                <PurchaseForm customerInfo={customerInfo} setCustomerInfo={setCustomerInfo} hanldeCheckout={hanldeCheckout} />
            </div>
            <div className='col-span-2 px-4 mx-2 sm:px-6'>
                <div className='text-xl'>
                    Your Cart
                </div>
                <div className='py-4 my-4 h-96 overflow-auto px-2 border'>
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
                    className="flex mt-8 items-center justify-center  border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm w-full cursor-pointer"
                    onClick={(e) => hanldeCheckout(e)}
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



// Checkout.getInitialProps = wrapper.getInitialPageProps(
//     ({ dispatch }) =>
    
//       async () => {      
//       }
//   )