'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect, useState } from 'react'

import { ProductSliderRows } from '@/app/_components/loop/product-slider-rows/product-slider-rows'
import { TitleSimple } from '@/app/_components/titles/title-simple'
import { current } from '@reduxjs/toolkit'

export const HomeProductTab = () => {
  const [tabIndex, setTabIndex] = useState(0)

  const titles = [
    'All',
    'Snack & Spices',
    'Fruits',
    'Dairy & Bakery',
    'Juice & Drinks',
  ]

  return (
    <div className="container px-[12px] mt-[30px] md:mt-[50px]">
      {/* title */}
      <div className="flex items-end gap-x-[18px] gap-y-[20px] flex-wrap">
        <div className="flex-1 basis-full sm:basis-[unset]">
          <TitleSimple
            title={'New'}
            titleHightlight=" Arrivals"
            sup="Shop online for new arrivals and get free shipping!"
          />
        </div>
        <div className="basis-[max-content] max-w-full">
          <HomeProductTabTitles
            currentTab={tabIndex}
            titles={titles}
            onClick={(index) => setTabIndex(index)}
          />
        </div>
      </div>
      {/* Tab panels ----- */}
      <div className='mt-[24px] md:mt-[28px] '>
        {titles.map((title, index) => (
          <ProductSliderRows
            key={`product-panel-${index}`}
            className={`${tabIndex === index ? 'block animate-fadeIn' : 'hidden'}`}
            classNameSlide="h-[700px] sm:h-[740px] md:h-[800px]"
            rows={2}
          />
        ))}
      </div>
    </div>
  )
}

type HomeProductTabTitlesProps = {
  className?: string
  currentTab: number
  titles: string[]
  onClick: (index: number) => void
}
export const HomeProductTabTitles = (props: HomeProductTabTitlesProps) => {
  useEffect(() => {}, [props?.currentTab])
  return (
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={0}
      className={`${props?.className ?? ''}`}
    >
      {props?.titles.map((title, index) => (
        <SwiperSlide
          key={`tab-title-${index}`}
          className="!w-[max-content]"
        >
          <div
            className={`block w-[max-content] font-medium cursor-pointer capitalize  ${
              index === props?.currentTab ? 'text-primary' : 'text-title'
            } ${index != 0 ? 'ps-[30px]' : ''}`}
            onClick={() => props?.onClick(index)}
          >
            {title}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
