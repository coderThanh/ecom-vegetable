import {
  HomeGroupProducts,
  HomePolicy,
  HomeProductTab,
} from '@/app/_components/for-page/home/home-sections'

import { BannerHorizontalTwoText } from '@/app/_components/banners/banner-horizontal-two-text/banner-text-right'
import { CONST_ROUTER } from '@/ultil/router'
import { CountDownSimple } from '@/app/_components/countdowns/countdown-simple'
import { Metadata } from 'next'
import { PAGE_DESCRIPTION } from '@/ultil/const'
import { ProductCategory } from '@/app/_components/loop/product-category/product-category'
import { ProductSlider } from '@/app/_components/loop/product-slider/product-slider'
import { ProductSliderRows } from '@/app/_components/loop/product-slider-rows/product-slider-rows'
import { SliderBannerTwoText } from '@/app/_components/banners/slider-banner-two-text/slider-banner-two-text'
import { TitleSimple } from '@/app/_components/titles/title-simple'
import { Wrapper } from '@/app/_components/wrapper'

export const metadata: Metadata = {
  title: 'Home',
  description: PAGE_DESCRIPTION,
}

export default function Home() {
  return (
    <Wrapper>
      <HomeHero />
      <ProductCategory className="mt-[30px] md:mt-[40px]" />
      <HomeDeal />
      <HomeBannerSaleOff />
      <HomeProductTab />
      <HomeTwoBannerSaleOff />
      <HomePolicy />
      <HomeGroupProducts />
      {/* ----- */}
      <div className="h-[3000px] bg-gray-100  mt-0"></div>
    </Wrapper>
  )
}

export const HomeDeal = () => {
  return (
    <div className="container px-[12px] mt-[20px] md:mt-[40px]">
      {/* title */}
      <div className="flex items-end gap-x-[18px] gap-y-[12px] flex-wrap">
        <div className="flex-1 basis-full sm:basis-[unset]">
          <TitleSimple
            title={'Day of the'}
            titleHightlight=" deal"
            sup="Don't wait. The time will never be just right."
          />
        </div>
        <div className="basis-[max-content]">
          <CountDownSimple time={new Date(Date.now() + 1000 * 60 * 60 * 34)} />
        </div>
      </div>
      <ProductSlider className="mt-[18px]" />
    </div>
  )
}

export const HomeHero = () => {
  const data = [
    {
      sup: 'Starting at $ 29.99',
      title: 'Organic & healthy vegetables',
      btnText: 'Shop now ',
      btnURL: '#',
      imgSrc: '/assets/home/home-hero-1.jpg',
    },
    {
      sup: 'Starting at $ 29.99',
      title: 'Explore fresh & juicy fruits',
      btnText: 'Shop now ',
      btnURL: '#',
      imgSrc: '/assets/home/home-hero-2.jpg',
    },
  ]
  return <SliderBannerTwoText items={data} />
}

export const HomeBannerSaleOff = () => {
  return (
    <BannerHorizontalTwoText
      imgSrc={'/assets/home/banner-1.jpg'}
      imgAlt={'img'}
      titleSize={'big'}
      title="Fresh Fruits Healthy Products"
      btnLink={CONST_ROUTER.shop}
      btnText="Shop now"
      className="mt-[30px] md:mt-[50px] container px-[12px]"
      classNameBoxText="max-w-[260px]  md:max-w-[500px]  ml-auto mr-[0px]"
      classNameImg="object-[70%_50%]"
    >
      <p className="mt-[5px] lg:mt-[12px] mb-[0px] lg:mb-[10px] text-size-2 lg:text-size-4 leading-[1.4]">
        <span className="text-primary">30% off sale</span> Hurry up!!!
      </p>
    </BannerHorizontalTwoText>
  )
}

export const HomeTwoBannerSaleOff = () => {
  return (
    <div className="mt-[30px] md:mt-[50px] container px-[12px] flex flex-wrap lg:flex-nowrap gap-[20px_20px]">
      <BannerHorizontalTwoText
        imgSrc={'/assets/home/banner-4.jpg'}
        imgAlt={'img'}
        titleSize={'small'}
        title="Tasty Snack & Fastfood"
        btnLink={CONST_ROUTER.shop}
        btnText="Shop now"
        className="flex-1 basis-full"
        classNameBoxText="max-w-[160px] md:max-w-[220px]  ml-auto mr-[0px] !text-left !p-[24px_20px_24px_0px] lg:!p-[40px_20px_40px_0px]"
        classNameImg="object-[80%_50%]"
      >
        <p className="mt-[5px]  mb-[0px] text-size-2 leading-[1.4] text-[rgb(var(--color-text-title),0.8)]">
          The flavor of something special
        </p>
        <div className="absolute top-[14px] left-[14px] bg-[rgb(var(--bg-opposite),0.8)] text-bg text-size-small leading-[1] rounded-radius-small p-[6px_8px_5px]">
          50% Off
        </div>
      </BannerHorizontalTwoText>
      <BannerHorizontalTwoText
        imgSrc={'/assets/home/banner-3.jpg'}
        imgAlt={'img'}
        titleSize={'small'}
        title="Fresh Fruits & veggies"
        btnLink={CONST_ROUTER.shop}
        btnText="Shop now"
        className="flex-1 basis-full"
        classNameBoxText="max-w-[160px] md:max-w-[220px]  ml-auto mr-[0px] !text-left !p-[24px_20px_24px_0px] lg:!p-[40px_20px_40px_0px]"
        classNameImg="object-[80%_50%]"
      >
        <p className="mt-[5px]  mb-[0px] text-size-2 leading-[1.4] text-[rgb(var(--color-text-title),0.8)]">
          A healthy meal for every one
        </p>
        <div className="absolute top-[14px] left-[14px] bg-[rgb(var(--bg-opposite),0.8)] text-bg text-size-small leading-[1] rounded-radius-small p-[6px_8px_5px]">
          70% Off
        </div>
      </BannerHorizontalTwoText>
    </div>
  )
}
