/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import nasikImages from '../utils/nastikPhotos';
import { Scrollbar } from 'swiper/modules';

import 'swiper/css/scrollbar';


const CarouselProject = () => {
  return (
    <Swiper
    className='mt-6 w-full flex  rounded-md'
    scrollbar={{
        hide: true,
      }}
      centeredSlides={true}
      modules={[Scrollbar]}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
{
    nasikImages.map((img,i)=>{
       return( <SwiperSlide>
        <img src={img} alt={`nasik project image ${i}`} />
    </SwiperSlide>)
    
})
}
    
  </Swiper>
  )
}

export default CarouselProject