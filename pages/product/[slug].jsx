import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import { wrapper } from '@/src/store';
import { getProducts } from '@/src/store/actions/productActions';
import { getCart, addToCart, removeFromCart, getCartFromResponse } from '@/src/store/actions/cartActions';
import { getProduct } from '@/src/store/actions/productActions';
import { RadioGroup } from '@headlessui/react'
import { setCookies, getCookie, checkCookies } from 'cookies-next';

function classNames(...classes ) {
    return classes.filter(Boolean).join(' ')
  }

  const productOptions = {
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
      { name: 'S', inStock: false },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
    ]
  }

export default function ProductPage() {
    const router = useRouter()
    const { slug } = router.query
    const dispatch = useAppDispatch()
    const { singleProductData, singleProductPending, singleProductError } = useAppSelector((state) => state.singleProduct);
    const product = singleProductData?.data[0] 

    const [selectedColor, setSelectedColor] = useState(productOptions.colors[0])
    const [selectedSize, setSelectedSize] = useState(productOptions.sizes[2])

    const [ addToCartLoading, setAddToCartLoading ] = useState(false)
    // const handleAddToCart = async (e) => {
    //     e.preventDefault()
    //   try{
    //       setAddToCartLoading(true)
    //       await dispatch(addToCart({
    //         productId: product._id,
    //         name: product.name,
    //         image: product.image[0],
    //         price: product.price,
    //         quantity: 1,
    //       })).then(res => dispatch(getCartFromResponse({data: res.payload})))
    //       setTimeout(()=> setAddToCartLoading(false), 500)
    //   } catch(err) {
    //       console.log(err)
    //   }
    // }
    const userId = getCookie('userId')
    const handleAddToCart = async (e) => {
      e.preventDefault()
    try{
        setAddToCartLoading(true)
        await dispatch(addToCart({
          productId: product._id,
          name: product.name,
          image: product.image[0],
          price: product.price,
          quantity: 1,
          userId: userId,
        })).then(res => dispatch(getCartFromResponse({data: res.payload})))
        setTimeout(()=> setAddToCartLoading(false), 500)
    } catch(err) {
        console.log(err)
    }
  }
    useEffect(() => {
        dispatch(getCart({userId: userId})).then(res => console.log(res))
    }, [])
    return (
        <div className="bg-white max-w-screen min-h-screen over-flow-x-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 relative">
          {/* Image gallery */}
          <div className="col-span-1 sm:col-span-2 grid sm:grid-cols-2 lg:gap-2">
            {product.image.map((image, index) => (
              <div key={index} className="">
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>))}
                
          </div>
          {/* Product info */}
          <div className='col-span-1 block md:min-h-screen relative'>
            <div className="max-w-md mx-auto pt-10 pb-16 px-12 lg:pt-16 lg:pb-24 sticky top-12 hidden md:block ">
              <div className="lg:col-span-2 lg:pr-8">
                <h1 className="tracking-tight text-gray-700 text-2xl">{product.name}</h1>
              </div>
              {/* Options */}
              <div className="mt-4 lg:mt-0 lg:row-span-3">
                <p className="text-md text-gray-600">{product.price} VND</p>
  
                <div className="space-y-6 pt-6">
                  <p className="text-base text-gray-700">{product.description}</p>
                </div>
                <form className="mt-8">
                  {/* Sizes */}
                  <div className="">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm text-gray-900 font-medium">Size</h3>
                      <a href="/help/size-guide" className="text-sm font-medium ">
                        Size guide
                      </a>
                    </div>
  
                    <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                      <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                      <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                        {productOptions.sizes.map((size) => (
                          <RadioGroup.Option
                            key={size.name}
                            value={size}
                            disabled={!size.inStock}
                            className={({ active }) =>
                              classNames(
                                size.inStock
                                  ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                                  : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                                active ? 'ring-2 ring-indigo-500' : '',
                                'group relative   py-2 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                              )
                            }
                          >
                            {({ active, checked }) => (
                              <>
                                <RadioGroup.Label as="p">{size.name}</RadioGroup.Label>
                                {size.inStock ? (
                                  <div
                                    className={classNames(
                                      active ? '' : '',
                                      checked ? '' : '',
                                      'absolute -inset-px  pointer-events-none'
                                    )}
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <div
                                    aria-hidden="true"
                                    className="absolute -inset-px pointer-events-none"
                                  >
                                    <svg
                                      className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                      viewBox="0 0 100 100"
                                      preserveAspectRatio="none"
                                      stroke="currentColor"
                                    >
                                      <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                    </svg>
                                  </div>
                                )}
                              </>
                            )}
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
  
                  <button
                    type="submit"
                    className="mt-4 w-full bg-black  py-3 px-8 flex items-center justify-center text-base font-medium text-white "
                    onClick={handleAddToCart}
                  >
                    {addToCartLoading ? 'Loading...' : 'Add to bag'}
                  </button>
                </form>
              </div>
  
              <div className=" lg:col-start-1 lg:col-span-2  lg:pr-8">
                {/* Description and details */}
                <div className="mt-10">
                  <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
  
                  <div className="mt-4">
                    <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                        {/* {product.highlights.map((highlight) => (
                            <li key={highlight} className="text-gray-400">
                            <span className="text-gray-600">{highlight}</span>
                            </li>
                        ))} */}
                        This is highlight
                    </ul>
                  </div>
                </div>
  
              </div>
            </div>
          </div>
        </div>
        
          {/* Mobile Responsive */}
        <div className=" md:hidden sticky bottom-0 bg-white">
          <div className='text-center'>
            {product.name}
          </div> 
          <div className='flex flex-row px-1 space-x-1'>
            <button
              className="mt-4 w-full bg-white py-3 px-8 flex items-center justify-center text-base font-medium text-black border-2 border-gray-300"
              data-dropdown-toggle="dropdown"
            >
              Select Size
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>            
          <button
            className="mt-4 w-full bg-black  py-3 px-8 flex items-center justify-center text-base font-medium text-white "
            onClick={handleAddToCart}
          >
             {addToCartLoading ? 'Loading...' : 'Add to bag'}
          </button>
          </div>
        </div>
      </div>
    )
}


ProductPage.getInitialProps = wrapper.getInitialPageProps(
    ({ dispatch }) =>
    
      async ({ query }) => {
          let userId =  getCookie('userId')
          await dispatch(getProduct({customPermalink: query.slug}))
        // await dispatch(getCart())
          // await dispatch(getCart({userId: userId}))
        }
  )
  
// export const getServerSideProps = wrapper.getServerSideProps(
//     ({ dispatch }) => {
//       async ({ query }) => {
//         await dispatch(getProduct({customPermalink: query.slug}))
//         await dispatch(getCart())
//     }
//   }
// )
