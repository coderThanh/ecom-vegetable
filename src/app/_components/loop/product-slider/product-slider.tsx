'use client'

import { Swiper, SwiperSlide } from 'swiper/react'

import { DATA_PRODUCTS } from '@/ultil/data'
import { ProductItem } from '@/app/_components/loop/product-item/product-item'

type ProductSliderProps = {
  className?: string
  spaceBetweenMd?: number
  spaceBetweenSm?: number
  colXl?: number
  colLg?: number
  colMd?: number
  colSM?: number
}
export const ProductSlider = (props: ProductSliderProps) => {
  return (
    <>
      <div className={`${props?.className ?? ''}`}>
        <Swiper
          slidesPerView={props.colSM ?? 2}
          autoHeight={false}
          spaceBetween={props.spaceBetweenSm ?? 12}
          breakpoints={{
            1280: {
              slidesPerView: props.colXl ?? 5,
              spaceBetween: props.spaceBetweenMd ?? 24,
            },
            1024: {
              slidesPerView: props.colLg ?? 4,
              spaceBetween: props.spaceBetweenMd ?? 24,
            },
            768: {
              slidesPerView: props.colMd ?? 3,
              spaceBetween: props.spaceBetweenMd ?? 24,
            },
          }}
        >
          {DATA_PRODUCTS?.length > 0
            ? DATA_PRODUCTS.slice(0, 12).map((item, index) => (
                <SwiperSlide
                  key={`product-box-${index}`}
                  className="min-h-full !h-auto"
                >
                  <ProductItem
                    product={item}
                    index={Math.min(index + 1)}
                    className="min-h-full"
                  />
                </SwiperSlide>
              ))
            : null}
        </Swiper>
      </div>
    </>
  )
}
