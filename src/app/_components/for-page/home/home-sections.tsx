'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect, useState } from 'react'

import { ProductSliderRows } from '@/app/_components/loop/product-slider-rows/product-slider-rows'
import SvgBoxReturn from '@/app/_svg/box-return'
import SvgPaymenChecked from '@/app/_svg/payment-checked'
import SvgShipping from '@/app/_svg/shipping'
import SvgSupport from '@/app/_svg/support'
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
      <div className="mt-[24px] md:mt-[28px] ">
        {titles.map((title, index) => (
          <ProductSliderRows
            key={`product-panel-${index}`}
            className={`${
              tabIndex === index ? 'block animate-fadeIn' : 'hidden'
            }`}
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

type HomePolicyProps = { className?: string }
export const HomePolicy = (props: HomePolicyProps) => {
  return (
    <div
      className={`container px-[12px] mt-[30px] md:mt-[50px] ${
        props?.className ?? ''
      }`}
    >
      <Swiper
        slidesPerView={2}
        spaceBetween={14}
        breakpoints={{
          1024: { slidesPerView: 4 },
          768: { slidesPerView: 3, spaceBetween: 24 },
        }}
      >
        <SwiperSlide className="!h-auto">
          <div className="min-h-full text-center p-[14px_16px] md:p-[20px_30px] border border-solid rounded-radius-1 border-[rgb(var(--color-border),0.1)]">
            <SvgShipping className="text-primary mx-auto mb-[10px] w-[50px] h-[50px] md:w-[60px] md:h-[60px]" />
            <h6 className="text-size-3 font-semibold">Free Shipping</h6>
            <p className="mb-0 mt-[8px] text-[rgb(var(--color-text-title),0.8)] leading-[1.4]">
              Free shipping on all US order or order above $200
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-auto">
          <div className="min-h-full text-center p-[14px_16px] md:p-[20px_30px] border border-solid rounded-radius-1 border-[rgb(var(--color-border),0.1)]">
            <SvgSupport className="text-primary mx-auto mb-[10px] w-[50px] h-[50px] md:w-[60px] md:h-[60px] p-[3%]" />
            <h6 className="text-size-3 font-semibold">24X7 Support</h6>
            <p className="mb-0 mt-[8px] text-[rgb(var(--color-text-title),0.8)] leading-[1.4]">
              Contact us 24 hours a day, 7 days a week
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-auto">
          <div className="min-h-full text-center p-[14px_16px] md:p-[20px_30px] border border-solid rounded-radius-1 border-[rgb(var(--color-border),0.1)]">
            <SvgBoxReturn className="text-primary mx-auto mb-[10px] w-[50px] h-[50px] md:w-[60px] md:h-[60px] p-[2%]" />
            <h6 className="text-size-3 font-semibold">30 Days Return</h6>
            <p className="mb-0 mt-[8px] text-[rgb(var(--color-text-title),0.8)] leading-[1.4]">
              Simply return it within 30 days for an exchange
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-auto">
          <div className="min-h-full text-center p-[14px_16px] md:p-[20px_30px] border border-solid rounded-radius-1 border-[rgb(var(--color-border),0.1)]">
            <SvgPaymenChecked className="text-primary mx-auto mb-[10px] w-[50px] h-[50px] md:w-[60px] md:h-[60px] p-[1%]" />
            <h6 className="text-size-3 font-semibold">Payment Secure</h6>
            <p className="mb-0 mt-[8px] text-[rgb(var(--color-text-title),0.8)] leading-[1.4]">
              Contact us 24 hours a day, 7 days a week
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
