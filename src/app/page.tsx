import {
  HomeBannerSaleOff,
  HomeDeal,
  HomeGroupProducts,
  HomeHero,
  HomePolicy,
  HomeProductTab,
  HomeTwoBannerSaleOff,
} from '@/app/page-sections'

import { Metadata } from 'next'
import { PAGE_DESCRIPTION } from '@/ultil/const'
import { ProductCategory } from '@/app/_components/loop/product-category/product-category'
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
