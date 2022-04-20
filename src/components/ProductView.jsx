import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";



const ProductView = ({images}) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
        {images.image.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="Product Image" className='object-cover w-full h-full' />
          </SwiperSlide>
        ))}

      </Swiper>
    </>
  )
}

export default ProductView