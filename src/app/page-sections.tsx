'use client'

import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { useEffect, useRef, useState } from 'react'

import { BannerHorizontalTwoText } from '@/app/_components/banners/banner-horizontal-two-text/banner-text-right'
import { BlogSlider } from '@/app/_components/loop/blog-slider/blog-slider'
import { CONST_ROUTER } from '@/ultil/router'
import { CountDownSimple } from '@/app/_components/countdowns/countdown-simple'
import { DATA_PRODUCTS } from '@/ultil/data'
import { Grid } from 'swiper/modules'
import { ProductItemVerticalSimple } from '@/app/_components/loop/product-item/product-item'
import { ProductSlider } from '@/app/_components/loop/product-slider/product-slider'
import { ProductSliderRows } from '@/app/_components/loop/product-slider-rows/product-slider-rows'
import { SliderBannerTwoText } from '@/app/_components/banners/slider-banner-two-text/slider-banner-two-text'
import SvgArrowLeft from '@/svg/arrow-left'
import SvgArrowRight from '@/svg/arrow-right'
import SvgBoxReturn from '@/svg/box-return'
import SvgPaymenChecked from '@/svg/payment-checked'
import SvgShipping from '@/svg/shipping'
import SvgSupport from '@/svg/support'
import SystemLink from '@/app/_components/link'
import { TitleSimple } from '@/app/_components/titles/title-simple'

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

type HomeGroupProductsProps = { className?: string }
export const HomeGroupProducts = (props: HomeGroupProductsProps) => {
  return (
    <div
      className={`container px-[12px] mt-[30px] md:mt-[40px] ${
        props?.className ?? ''
      }`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px_24px]">
        <BannerHorizontalTwoText
          imgSrc={'/assets/home/banner-2.jpg'}
          imgAlt={'img titl'}
          titleSize={'small'}
          title="Our top most products check it now"
          btnLink={CONST_ROUTER.shop}
          btnText="Shop now"
          className="h-[160px] lg:h-[340px] min-h-full sm:col-span-2 md:col-span-3 lg:col-span-1"
          classNameInner="min-h-full"
          classNameBoxText="!text-left !p-[30px] w-[90%] min-h-full"
          classNameImg="object-[0%_60%]"
        />
        <HomeProductGroupItem
          title={'Trending'}
          titlePrimary="Items"
          items={[4, 5, 6, 7, 8, 9, 10, 11, 12]}
        />
        <HomeProductGroupItem
          title={'Top'}
          titlePrimary="Rated"
          items={[2, 3, 4, 5, 6, 7, 8, 9, 10]}
        />
        <HomeProductGroupItem
          title={'Top'}
          titlePrimary="Selling"
          items={[3, 4, 5, 6, 7, 8, 9, 10, 11]}
          className="sm:hidden md:block"
        />
      </div>
    </div>
  )
}

type HomeProductGroupItemProps = {
  className?: string
  title: string
  titlePrimary?: string
  items: number[]
}
export const HomeProductGroupItem = (props: HomeProductGroupItemProps) => {
  const swipper = useRef<null | SwiperClass>(null)

  return (
    <div className={`${props?.className ?? ''}`}>
      <div className="flex gap-[12px] items-center">
        <h3 className="flex-1 text-size-4 font-bold leading-[1.4] line-clamp-1">
          {props?.title}
          {props?.titlePrimary && (
            <span className="text-primary"> {props?.titlePrimary}</span>
          )}
        </h3>
        <div className="flex items-center ">
          <button
            className="flex text-title items-center justify-end w-[30px] h-[30px] transition-colors duration-200 hover:text-primary"
            onClick={(_) => swipper.current?.slidePrev()}
          >
            <SvgArrowLeft
              width={24}
              height={24}
            />
          </button>
          <button
            className="flex text-title items-center justify-end w-[30px] h-[30px] transition-colors duration-200 hover:text-primary"
            onClick={(_) => swipper.current?.slideNext()}
          >
            <SvgArrowRight
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>

      <Swiper
        onSwiper={(swiper) => (swipper.current = swiper)}
        className="mt-[16px] h-[220px] sm:h-[400px]"
        loop={true}
        grid={{ rows: 2 }}
        modules={[Grid]}
        spaceBetween={15}
        breakpoints={{
          640: {
            grid: { rows: 3 },
          },
        }}
      >
        {props?.items.map((item, index) => (
          <SwiperSlide key={`product-group-item-${index}`}>
            <ProductItemVerticalSimple
              product={DATA_PRODUCTS[item]}
              index={item}
              className="min-h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

type HomeBlogsProps = { className?: string }
export const HomeBlogs = (props: HomeBlogsProps) => {
  return (
    <div className="container px-[12px] mt-[20px] md:mt-[40px]">
      {/* title */}
      <div className="flex items-end gap-x-[18px] gap-y-[12px] flex-wrap mb-[20px]">
        <div className="flex-1 basis-full sm:basis-[unset]">
          <TitleSimple
            title={'Latest'}
            titleHightlight=" Blog"
            sup="We tackle interesting topics every day in 2023."
          />
        </div>
        <div className="basis-[max-content]">
          <SystemLink
            url={CONST_ROUTER.blogs}
            className="flex gap-[3px] items-center duration-200 transition-colors hover:text-primary cursor-pointer"
          >
            All Blogs{' '}
            <span className="material-symbols-rounded text-[20px] !font-[400]">
              keyboard_double_arrow_right
            </span>
          </SystemLink>
        </div>
      </div>
      {/* --- Blogs ---- */}
      <BlogSlider
        isShowDate={true}
        isShowReadMore={true}
        colXl={5}
        colLg={4}
        colMd={2}
        colSM={2}
        spaceBetweenMd={24}
        spaceBetweenSm={18}
      />
    </div>
  )
}
