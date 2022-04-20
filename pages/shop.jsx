import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import Footer from '@/src/components/Footer'
import Filter from '@/src/components/Filter'
import ProductView from '@/src/components/ProductView'

import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import { wrapper } from '@/src/store';
import { getProducts } from '@/src/store/actions/productActions';
import { getCart, addToCart } from '@/src/store/actions/cartActions';

// const product = {
//   name: 'Basic Tee 6-Pack',
//   price: '$192',
//   href: '#',
//   breadcrumbs: [
//     { id: 1, name: 'Men', href: '#' },
//     { id: 2, name: 'Clothing', href: '#' },
//   ],
//   images: [
//     {
//       src: 'https://cdn.shopify.com/s/files/1/0505/9044/9849/products/ETQ_Model_053Angel3_1080x.jpg?v=1644526742',
//       alt: 'Two each of gray, white, and black shirts laying flat.',
//     },
//     {
//       src: 'https://cdn.shopify.com/s/files/1/0505/9044/9849/products/ETQ-RAI-Zuidas-0014crob1_1080x.jpg?v=1648548826',
//       alt: 'Model wearing plain black basic tee.',
//     },
//     {
//       src: 'https://cdn.shopify.com/s/files/1/0505/9044/9849/products/ETQ_Model_053Angel5_1080x.jpg?v=1649245384',
//       alt: 'Model wearing plain gray basic tee.',
//     },
//     {
//       src: 'https://cdn.shopify.com/s/files/1/0505/9044/9849/products/ETQ_Model_053Angel4_1080x.jpg?v=1649245384',
//       alt: 'Model wearing plain white basic tee.',
//     },
//     {
//       src: 'https://cdn.shopify.com/s/files/1/0505/9044/9849/products/ETQ_Model_053Angel7_1080x.jpg?v=1649245389',
//       alt: 'Model wearing plain gray basic tee.',
//     },
//     {
//       src: 'https://cdn.shopify.com/s/files/1/0505/9044/9849/products/ETQ-RAI-Zuidas-0174_1080x.jpg?v=1649245446',
//       alt: 'Model wearing plain white basic tee.',
//     },
//   ],
//   colors: [
//     { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
//     { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
//     { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
//   ],
//   sizes: [
//     { name: 'S', inStock: false },
//     { name: 'M', inStock: true },
//     { name: 'L', inStock: true },
//   ],
//   description:
//     'Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
//   highlights: [
//     'Hand cut and sewn locally',
//     'Dyed with our proprietary colors',
//     'Pre-washed & pre-shrunk',
//     'Ultra-soft 100% cotton',
//   ],
//   details:
//     'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
// }

function classNames(...classes ) {
  return classes.filter(Boolean).join(' ')
}

export default function Shop() {
  // const [selectedColor, setSelectedColor] = useState(product.colors[0])
  // const [selectedSize, setSelectedSize] = useState(product.sizes[2])
  const { productData, productPending, productError } = useAppSelector((state) => state.products);
  
  const products = productData.data;
  return (
    <div className="bg-white max-w-screen min-h-screen over-flow-x-hidden px-4 sm:px-12 pt-28">
      <div className=" grid grid-cols-1 sm:grid-cols-3 relative space-x-4">

        {/* Product list */}
        <div className="lg:grid lg:grid-cols-2 md:col-span-2">
            <div className='col-span-2 px-2 flex justify-between'>
              <div> 12 results</div>
              <div> Remove all filters</div>
            </div>
            {products?.map((data, index) => (
              <div className='px-2 py-4' key={index}>
                <a className='cursor-pointer' href={`/product/${data.customPermalink}`}>
                  <figure >
                    <ProductView images={data}/>
                    <div className='text-lg font-bold text-gray-600'>
                        Angel 1
                    </div>
                    <div className=' text-gray-500'>
                        450.000 VND
                    </div>
                  </figure>
                </a>
                </div>
            ))}

                      

        </div>

        {/* Filter */}
        <Filter />
      </div>
      
        {/* Mobile Responsive */}
      <div className=" sm:hidden sticky bottom-0 bg-white">
        <div className='text-center'>
          {products.name}
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
        >
          Add to bag
        </button>
        </div>
      </div>
    </div>
  )
}

Shop.getInitialProps = wrapper.getInitialPageProps(
  ({ dispatch }) =>
  
    async () => {      
      await dispatch(getProducts());
      await dispatch(getCart());
    }
)
