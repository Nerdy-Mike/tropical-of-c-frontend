import React from 'react'
import { RadioGroup } from '@headlessui/react'

const styles = [
    {
        name: 'Bikini 1',
        img: 'https://cdn.shopify.com/s/files/1/0505/9044/9849/files/Style_7_lt05_bw_400x.png?v=1645200879',
    },
    {
        name: 'Bikini 2',
        img: 'https://cdn.shopify.com/s/files/1/0505/9044/9849/files/Style_5_400x.png?v=1619171535',
    },
    {
        name: 'Bikini 3',
        img: 'https://cdn.shopify.com/s/files/1/0505/9044/9849/files/Style_9_lt02_bw_400x.png?v=1645200835'
    }
]

const sizes = [     
    { name: 'S', inStock: false },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true }, 
]

const colors = ['yellow', 'black', 'red', 'blue', 'green']

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Filter = () => {

    const [ selectedSize, setSelectedSize ] = React.useState('')
    const [ selectedStyle, setSelectedStyle ] = React.useState('')

    const handleSizeChange = (e) => {
        setSelectedSize(e.target.value)
    }

  return (
    <div className='block sm:min-h-screen relative '>
        <div className="max-w-lg mx-auto  pb-16   lg:pb-24 sticky top-32 hidden sm:block ">
            <div className="">
                <h1 className="tracking-tight text-gray-700 text-lg">Style</h1>
                <ul className='grid grid-cols-3 '>
                    {
                        styles.map((style, index) => (
                        <li key={index} className="">
                            <button className='w-32 border-2 h-32 items-center flex justify-center px-2'>
                                <span className="text-gray-600 hidden">Bikini 1</span>
                                <img src='https://cdn.shopify.com/s/files/1/0505/9044/9849/files/Style_7_lt05_bw_400x.png?v=1645200879' className='w-32'/>
                            </button>
                        </li>
                        ))
                    }
                </ul>
            </div>
            {/* Options */}
            <div className="mt-4 lg:mt-0 lg:row-span-3">
                {/* Sizes */}
                <div className="pt-8">
                    <div className="flex items-center justify-between">
                    <h3 className="text-sm text-gray-900 font-medium">Size</h3>
                    <a href="#" className="text-sm font-medium ">
                        Size guide
                    </a>
                    </div>

                    <RadioGroup value={selectedSize} onChange={handleSizeChange} className="mt-4">
                    <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                        {sizes.map((size) => (
                        <RadioGroup.Option
                            key={size.name}
                            value={size}
                            disabled={!size.inStock}
                            className={({ active }) =>
                            classNames(
                                size.inStock
                                ? 'bg-white shadow-sm text-gray-900 cursor-pointer border-2 border-gray-200'
                                : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                                active ? 'ring-2 ring-indigo-500' : '',
                                'group relative   py-2 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-100 focus:outline-none sm:flex-1 sm:py-6'
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
            </div>
                {/* Color */}
            <div className="">
                <h1 className="tracking-tight text-gray-700 text-lg">Color</h1>
                <ul className='grid grid-cols-5 '>
                    {
                        colors.map((style, index) => (
                        <li key={index} className="">
                            <button className='w-16 border-2 h-16 items-center flex justify-center px-2'>
                                <span className="text-gray-600 hidden">Bikini 1</span>
                                <img src='https://cdn.shopify.com/s/files/1/0505/9044/9849/files/Style_7_lt05_bw_400x.png?v=1645200879' className='w-32'/>
                            </button>
                        </li>
                        ))
                    }
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Filter