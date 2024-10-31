import { BannerHorizontalTwoText } from '@/app/_components/banners/banner-horizontal-two-text/banner-text-right'
import { CONST_ROUTER } from '@/ultil/router'
import { CountDownSimple } from '@/app/_components/countdowns/countdown-simple'
import { HomeProductTab } from '@/app/_components/for-page/home/home-tab-product'
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

      {/* ----- */}
      <div className="h-[3000px] bg-gray-100"></div>
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
      className="mt-[30px] md:mt-[50px]"
      classNameBoxText="max-w-[260px]  md:max-w-[500px]  ml-auto mr-[0px]"
      classNameImg="object-[70%_50%]"
    >
      <p className="mt-[5px] lg:mt-[12px] mb-[0px] lg:mb-[10px] text-size-2 lg:text-size-4 leading-[1.4]">
        <span className="text-primary">30% off sale</span> Hurry up!!!
      </p>
    </BannerHorizontalTwoText>
  )
}

