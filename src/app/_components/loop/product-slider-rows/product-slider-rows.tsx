'use client'

import { Swiper, SwiperSlide } from 'swiper/react'

import { DATA_PRODUCTS } from '@/ultil/data'
import { Grid } from 'swiper/modules'
import { ProductItem } from '@/app/_components/loop/product-item/product-item'

type ProductSliderRowsProps = {
  className?: string
  classNameSlide: string
  classNameImgWrap?: string
  rows: number
  spaceBetweenMd?: number
  spaceBetweenSm?: number
  colXl?: number
  colLg?: number
  colMd?: number
  colSM?: number
}
export const ProductSliderRows = (props: ProductSliderRowsProps) => {
  return (
    <>
      <div className={` ${props?.className ?? ''}`}>
        <Swiper
          slidesPerView={props.colSM ?? 2}
          // autoHeight={true}
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
          grid={{ rows: props.rows }}
          modules={[Grid]}
          className={props.classNameSlide}
        >
          {DATA_PRODUCTS?.length > 0
            ? DATA_PRODUCTS.slice(0, 18).map((item, index) => (
                <SwiperSlide key={`product-box-${index}`}>
                  <ProductItem
                    product={item}
                    index={Math.min(index + 1, 10)}
                    className="min-h-full"
                    classNameImgWrap={`${
                      props?.classNameImgWrap ?? '!pt-[160px] sm:!pt-[200px]'
                    }`}
                  />
                </SwiperSlide>
              ))
            : null}
        </Swiper>
      </div>
    </>
  )
}
