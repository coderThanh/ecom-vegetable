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
export const BlogSlider = ({
  className,
  spaceBetweenMd,
  spaceBetweenSm,
  colLg,
  colMd,
  colSM,
  colXl,
  isShowDate,
  isShowDesc,
  isShowReadMore,
}: BlogSliderProps) => {
  return (
    <>
      <div className={`${className ?? ''}`}>
        <Swiper
          slidesPerView={colSM ?? 2}
          autoHeight={false}
          spaceBetween={spaceBetweenSm ?? 12}
          breakpoints={{
            1280: {
              slidesPerView: colXl ?? 5,
              spaceBetween: spaceBetweenMd ?? 24,
            },
            1024: {
              slidesPerView: colLg ?? 4,
              spaceBetween: spaceBetweenMd ?? 24,
            },
            768: {
              slidesPerView: colMd ?? 3,
              spaceBetween: spaceBetweenMd ?? 24,
            },
          }}
        >
          {DATA_BLOGS?.length > 0
            ? DATA_BLOGS.slice(0, 12).map((item, index) => (
                <SwiperSlide key={`blog-box-${index}`}>
                  <BlogItem
                    item={item}
                    index={Math.min(index + 1, 6)}
                    isShowDate={isShowDate}
                    isShowDesc={isShowDesc}
                    isShowReadMore={isShowReadMore}
                  />
                </SwiperSlide>
              ))
            : null}
        </Swiper>
      </div>
    </>
  )
}
