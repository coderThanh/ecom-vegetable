'use client'

import { Swiper, SwiperSlide } from 'swiper/react'

import { BlogItem } from '@/app/_components/loop/blog-item/blog-item'
import { DATA_BLOGS } from '@/data/demo-data'

type BlogSliderProps = {
  className?: string
  spaceBetweenMd?: number
  spaceBetweenSm?: number
  colXl?: number
  colLg?: number
  colMd?: number
  colSM?: number
  isShowDesc?: boolean
  isShowDate?: boolean
  isShowReadMore?: boolean
}
export const BlogSlider = (props: BlogSliderProps) => {
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
          {DATA_BLOGS?.length > 0
            ? DATA_BLOGS.slice(0, 12).map((item, index) => (
                <SwiperSlide key={`blog-box-${index}`}>
                  <BlogItem
                    item={item}
                    index={Math.min(index + 1, 6)}
                    isShowDate={props.isShowDate}
                    isShowDesc={props.isShowDesc}
                    isShowReadMore={props.isShowReadMore}
                  />
                </SwiperSlide>
              ))
            : null}
        </Swiper>
      </div>
    </>
  )
}
