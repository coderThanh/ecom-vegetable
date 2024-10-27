'use client'

import { Autoplay, Pagination, Parallax } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SystemButton, {
  SystemButtonColor,
  SystemButtonKind,
} from '@/app/(components)/button'

import Image from 'next/image'

export const HomeHero = () => {
  return (
    <div className="container px-[12px] pt-[20px] md:pt-[30px]">
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
        modules={[Parallax, Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        className="swiper-dot-big"
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
            title="Explore fresh & juicy fruits"
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
    <div className="flex items-center w-full h-[300px] md:h-[420px] lg:h-[600px] sketch-loading rounded-radius-1 overflow-hidden isolate relative ps-[30px] pr-[20%] md:px-[60px]">
      <div className="lg:w-1/2">
        {props?.sup && (
          <div
            data-swiper-parallax-y="-100"
            data-swiper-parallax-opacity="0"
            data-swiper-parallax-duration="0"
            className="text-size-2 font-[600] text-[rgb(var(--color-primary))] mb-[12px] leading-[1.4] line-clamp-2"
          >
            {props.sup}
          </div>
        )}
        {props?.title && (
          <div
            data-swiper-parallax-y="-100"
            data-swiper-parallax-opacity="0"
            data-swiper-parallax-duration="800"
            className="text-size-6 md:text-size-8 font-bold text-[rgb(var(--color-text-title))] leading-[1.2] line-clamp-3"
          >
            {props.title}
          </div>
        )}
        {props?.btnText && (
          <div
            data-swiper-parallax-y="-100"
            data-swiper-parallax-opacity="0"
            data-swiper-parallax-duration="1000"
          >
            <SystemButton
              text={props?.btnText}
              url={props?.btnURL}
              kind={SystemButtonKind.default}
              color={SystemButtonColor.dark}
              target="_blank"
              className="mt-[18px] md:mt-[24px]"
            />
          </div>
        )}
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
