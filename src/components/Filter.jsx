import React from 'react'
import { RadioGroup } from '@headlessui/react'

const styles = [
    {
        name: 'Bandeaukini',
        img: 'https://cdn.shopify.com/s/files/1/0505/9044/9849/files/Style_7_lt05_bw_400x.png?v=1645200879',
    },
    {
        name: 'Flounce Bikini',
        img: 'https://cdn.shopify.com/s/files/1/0505/9044/9849/files/Style_5_400x.png?v=1619171535',
    },
    {
        name: 'String Bikini',
        img: 'https://cdn.shopify.com/s/files/1/0505/9044/9849/files/Style_9_lt02_bw_400x.png?v=1645200835'
    },
    {
        name: 'Trikini',
        img: 'https://cdn.shopify.com/s/files/1/0505/9044/9849/files/Style_1_lt02_bw_400x.png?v=1645200835'
    },
    {
        name: 'Sling Bikini',
        img: 'https://cdn.shopify.com/s/files/1/0505/9044/9849/files/Style_1_lt02_bw_400x.png?v=1645200835'
    },
    {
        name: 'High-Waisted Bikini',
        img: 'https://cdn.shopify.com/s/files/1/0505/9044/9849/files/Style_1_lt02_bw_400x.png?v=1645200835'
    }
]

const sizes = [     
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true }, 
]

const colors = ['bg-green-600', 'bg-black', 'bg-red-600', 'bg-yellow-400', 'bg-teal-400']


const Filter = ({productFilter, setProductFilter}) => {


  return (
    <div className='block sm:min-h-screen relative '>
        <div className="max-w-lg mx-auto  pb-16   lg:pb-24 sticky top-32 hidden sm:block ">
            <div className="">
                <h1 className="tracking-tight text-gray-700 text-lg">Style</h1>
                <ul className='grid grid-cols-2 lg:grid-cols-3 py-4 gap-4 overflow-hidden'>
                    {
                        styles.map((style, index) => (
                        <li key={index} className="">
                            <button className='min-w-full border h-32 items-center flex justify-center px-2'
                                onClick={() => 
                                {setProductFilter({...productFilter, 
                                    style: `${style.name.toLowerCase().replace(/\s/g, '-')}`
                                });
                                // console.log(productFilter)    
                            }
                            }>
                                <span className="text-gray-600 hidden">Bikini 1</span>
                                <div>{style.name}</div>
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
                    <a href="/help/size-guide" className="text-sm font-medium ">
                        Size guide
                    </a>
                    </div>

                    <div>
                    <div className="grid grid-cols-3 gap-4 lg:gap-12 py-4 overflow-hidden">
                        {sizes.map((size) => (
                        <button
                            key={size.name}
                            value={size}
                            disabled={!size.inStock}
                            className="min-w-full border-2 h-20 items-center flex justify-center"
                            onClick={() => setProductFilter({...productFilter, size: size.name})}
                            >
                                {size.name}
                            </button>
                        ))}
                    </div>
                    </div>
                </div>
            </div>
                {/* Color */}
            <div className="">
                <h1 className="tracking-tight text-gray-700 text-lg">Color</h1>
                <ul className='grid overflow-hidden grid-cols-6 lg:grid-cols-8 gap-0 '>
                    {
                        colors.map((style, index) => (
                        <li key={index} className="">
                            <button className={`min-w-full border h-12 items-center flex justify-center `}
                                onClick={() => setProductFilter({...productFilter, color: style})}
                            >
                                <span className="text-gray-600 hidden">Color</span>
                                <div className={`${style} h-6 w-6 rounded-full`}>

                                </div>
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