'use client'

import { Swiper, SwiperSlide } from 'swiper/react'

import { CONST_ROUTER } from '@/ultil/router'
import { DATA_PRODUCTS } from '@/ultil/data'
import { ProductItem } from '@/app/_components/loop/product-item/product-item'
import SystemLink from '@/app/_components/link'

type ProductSliderProps = {
  className?: string
}
export const ProductSlider = (props: ProductSliderProps) => {
  return (
    <div className={`${props?.className ?? ''}`}>
      <Swiper
        slidesPerView={2}
        autoHeight={false}
        spaceBetween={12}
        breakpoints={{
          1280: { slidesPerView: 5 },
          1024: { slidesPerView: 4 },
          768: { slidesPerView: 3, spaceBetween: 20 },
        }}
      >
        {DATA_PRODUCTS?.length > 0
          ? DATA_PRODUCTS.slice(0, 7).map((item, index) => (
              <SwiperSlide key={`product-box-${index}`} className='min-h-full !h-auto'>
                <ProductItem product={item} index={index + 1} className='min-h-full'/>
              </SwiperSlide>
            ))
          : null}
      </Swiper>
    </div>
  )
}
