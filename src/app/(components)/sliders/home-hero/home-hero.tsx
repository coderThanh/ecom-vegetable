'use client'

import { Navigation, Pagination, Parallax } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SystemButton, {
  SystemButtonColor,
  SystemButtonKind,
} from '@/app/(components)/button'

import Image from 'next/image'

export const HomeHero = () => {
  return (
    <div className="container px-[12px] pt-[30px]">
      <Swiper
        slidesPerView={1}
        autoHeight={true}
        spaceBetween={12}
        speed={600}
        loop={true}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        modules={[Parallax, Pagination]}
      >
        <SwiperSlide>
          <HomeHeroBanner
            sup="Starting at $ 29.99"
            title="Organic & healthy vegetables"
            btnText="Shop now "
            btnURL="#"
            imgSrc="/assets/home/home-hero-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <HomeHeroBanner
            sup="Starting at $ 29.99"
            title="Organic & healthy vegetables"
            btnText="Shop now "
            btnURL="#"
            imgSrc="/assets/home/home-hero-2.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

type HomeHeroBannerProps = {
  sup?: string
  title?: string
  btnText?: string
  btnURL?: string
  imgSrc?: string
}
export const HomeHeroBanner = (props: HomeHeroBannerProps) => {
  return (
    <div className="flex items-center w-full h-[600px] sketch-loading rounded-radius-1 overflow-hidden isolate relative px-[60px]">
      <div>
        {props?.sup && (
          <div
            data-swiper-parallax-y="-100"
            data-swiper-parallax-opacity="0"
            data-swiper-parallax-duration="0"
          >
            {props.sup}
          </div>
        )}
        {props?.title && (
          <div
            data-swiper-parallax-y="-100"
            data-swiper-parallax-opacity="0"
            data-swiper-parallax-duration="800"
          >
            {props.title}
          </div>
        )}
        <SystemButton
          text={props?.btnText}
          url={props?.btnURL}
          kind={SystemButtonKind.default}
          color={SystemButtonColor.dark}
          target="_blank"
          data-swiper-parallax-y="-100"
          data-swiper-parallax-opacity="0"
          data-swiper-parallax-duration="1000"
        />
      </div>
      {props?.imgSrc && (
        <Image
          src={props?.imgSrc}
          alt={props?.title ?? ''}
          fill={true}
          className="absolute top-0 left-0 -z-10 object-cover object-center"
          priority={true}
        />
      )}
    </div>
  )
}
