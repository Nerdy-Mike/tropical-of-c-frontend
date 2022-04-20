import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://cdn.shopify.com/s/files/1/0505/9044/9849/products/ETQ_Model_053Angel3_1080x.jpg?v=1644526742',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0505/9044/9849/products/ETQ-RAI-Zuidas-0014crob1_1080x.jpg?v=1648548826',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0505/9044/9849/products/ETQ_Model_053Angel5_1080x.jpg?v=1649245384',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0505/9044/9849/products/ETQ_Model_053Angel4_1080x.jpg?v=1649245384',
      alt: 'Model wearing plain white basic tee.',
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0505/9044/9849/products/ETQ_Model_053Angel7_1080x.jpg?v=1649245389',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0505/9044/9849/products/ETQ-RAI-Zuidas-0174_1080x.jpg?v=1649245446',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'S', inStock: false },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
  ],
  description:
    'Feeling adventurous? Put on a hea',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes :any) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <div className="bg-white max-w-screen min-h-screen over-flow-x-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-3 relative ">
        {/* Image gallery */}
        <div className="col-span-1 sm:col-span-2 grid sm:grid-cols-2 lg:gap-2">
          {product.images.map((image, index) => (
            <div key={index} className="">
              <img
                src={image.src}
                alt={image.alt}
                className=" object-cover w-screen md:w-490 h-564 col-span-1"
              />
            </div>))}
              
        </div>
        {/* Product info */}
        <div className='col-span-1 block sm:min-h-screen relative'>
          <div className="max-w-md mx-auto pt-10 pb-16 px-12 lg:pt-16 lg:pb-24 sticky top-12 hidden sm:block ">
            <div className="lg:col-span-2 lg:pr-8">
              <h1 className="tracking-tight text-gray-700 text-2xl">{product.name}</h1>
            </div>
            {/* Options */}
            <div className="mt-4 lg:mt-0 lg:row-span-3">
              <p className="text-md text-gray-600">{product.price}</p>

              <div className="space-y-6 pt-6">
                <p className="text-base text-gray-700">{product.description}</p>
              </div>
              <form className="mt-8">
                {/* Sizes */}
                <div className="">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm text-gray-900 font-medium">Size</h3>
                    <a href="#" className="text-sm font-medium ">
                      Size guide
                    </a>
                  </div>

                  <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                    <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {product.sizes.map((size) => (
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
                >
                  Add to bag
                </button>
              </form>
            </div>

            <div className=" lg:col-start-1 lg:col-span-2  lg:pr-8">
              {/* Description and details */}
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                <div className="mt-4">
                  <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      
        {/* Mobile Responsive */}
      <div className=" sm:hidden sticky bottom-0 bg-white">
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
        >
          Add to bag
        </button>
        </div>
      </div>
    </div>
  )
}
