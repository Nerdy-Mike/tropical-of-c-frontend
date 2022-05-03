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
        <div className='text-3xl text-center py-4'>
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
                <img loading='lazy' src='https://www.net-a-porter.com/variants/images/25185454455582128/in/w828_q60.jpg' width='360' />
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
                <img loading='lazy' src='https://www.net-a-porter.com/variants/images/25185454455582070/in/w828_q60.jpg' width='360' />
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
                <img loading='lazy' src='https://www.net-a-porter.com/variants/images/25185454455582264/in/w828_q60.jpg' width='360' />
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
                <img loading='lazy' src='https://www.net-a-porter.com/variants/images/45666037504790899/in/w828_q60.jpg' width='360' />
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
                <img loading='lazy' src='https://www.net-a-porter.com/variants/images/27086482324427306/in/w828_q60.jpg' width='360' />
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
                <img loading='lazy' src='https://www.net-a-porter.com/variants/images/27086482324427285/in/w828_q60.jpg' width='360' />
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