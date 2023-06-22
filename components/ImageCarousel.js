import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination} from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function ImageCarousel({images}) {
  const imagess = []

  images.map((image, i) => {
    imagess.push(
      <SwiperSlide key={`slide-${i}`}>
        <img src={image.url} className='object-contain' />
      </SwiperSlide>
    )
  })
  return (
    <div className='w-full h-48 md:h-96 bg-gray-50 rounded-2xl relative'>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={2}
        spaceBetween={5}
        style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }}
        navigation
        pagination={{ clickable: true }}
        className="h-full rounded-2xl"
        loop="true"
      >
        {imagess}
      </Swiper>
   </div>
  )
}

export default ImageCarousel