import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Favorite = () => {

  return (
    <>
      <div className='px-10 md:pl-16 pb-4 py-2'>
        <div className='text-3xl text-center'>
          Our favorite designs
        </div>
      </div>
      <Swiper
        spaceBetween={0}
        slidesPerView= {1}
        // loop={true} //infinite loop
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"  
        breakpoints={{
          // when window width is >= 640px
          470: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
      >
        <SwiperSlide>
            <div className='pl-16'>
              <a className='cursor-pointer'>
                <figure>
                <img loading='lazy' src='https://cdn.shopify.com/s/files/1/0505/9044/9849/products/ETQ_Model_032Angel3_1200x.jpg?v=1644524046' width='360' />
                    <div className='text-lg font-bold text-gray-600'>
                        Angel 1
                    </div>                    
                    <div className=' text-gray-500'>
                        450.000 VND
                    </div>
                </figure>
              </a>
            </div>    
        </SwiperSlide>
        <SwiperSlide>
            <div className='pl-16'>
              <a className='cursor-pointer'>
                <figure>
                <img loading='lazy' src='https://cdn.shopify.com/s/files/1/0505/9044/9849/products/ETQ_Model_032Angel3_1200x.jpg?v=1644524046' width='360' />
                    <div className='text-lg font-bold text-gray-600'>
                        Angel 2
                    </div>                    
                    <div className=' text-gray-500'>
                        450.000 VND
                    </div>
                </figure>
              </a>
            </div>    
        </SwiperSlide>
            <SwiperSlide>
            <div className='pl-16'>
              <a className='cursor-pointer'>
                <figure>
                <img loading='lazy' src='https://cdn.shopify.com/s/files/1/0505/9044/9849/products/ETQ_Model_032Angel3_1200x.jpg?v=1644524046' width='360' />
                    <div className='text-lg font-bold text-gray-600'>
                        Angel 3
                    </div>                    
                    <div className=' text-gray-500'>
                        450.000 VND
                    </div>
                </figure>
              </a>
            </div>    
        </SwiperSlide>        
        <SwiperSlide>
            <div className='pl-16'>
              <a className='cursor-pointer'>
                <figure>
                <img loading='lazy' src='https://cdn.shopify.com/s/files/1/0505/9044/9849/products/ETQ_Model_032Angel3_1200x.jpg?v=1644524046' width='360' />
                    <div className='text-lg font-bold text-gray-600'>
                        Angel 4
                    </div>                    
                    <div className=' text-gray-500'>
                        450.000 VND
                    </div>
                </figure>
              </a>
            </div>    
        </SwiperSlide>        
        <SwiperSlide>
            <div className='pl-16'>
              <a className='cursor-pointer'>
                <figure>
                <img loading='lazy' src='https://cdn.shopify.com/s/files/1/0505/9044/9849/products/ETQ_Model_032Angel3_1200x.jpg?v=1644524046' width='360' />
                    <div className='text-lg font-bold text-gray-600'>
                        Angel 1
                    </div>                    
                    <div className=' text-gray-500'>
                        450.000 VND
                    </div>
                </figure>
              </a>
            </div>    
        </SwiperSlide>        
        <SwiperSlide>
            <div className='pl-16'>
              <a className='cursor-pointer'>
                <figure>
                <img loading='lazy' src='https://cdn.shopify.com/s/files/1/0505/9044/9849/products/ETQ_Model_032Angel3_1200x.jpg?v=1644524046' width='360' />
                    <div className='text-lg font-bold text-gray-600'>
                        Angel 5
                    </div>                    
                    <div className=' text-gray-500'>
                        450.000 VND
                    </div>
                </figure>
              </a>
            </div>    
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Favorite