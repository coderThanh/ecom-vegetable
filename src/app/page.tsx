import { HomeHero } from '@/app/(components)/banners/home-hero/home-hero'
import { Metadata } from 'next'
import { PAGE_DESCRIPTION } from '@/ultil/const'
import { ProductCategory } from '@/app/(components)/categories/product-category/product-category'
import { Wrapper } from '@/app/(components)/wrapper'

export const metadata: Metadata = {
  title: 'Home',
  description: PAGE_DESCRIPTION,
}

export default function Home() {
  return (
    <Wrapper>
      <HomeHero />
      <ProductCategory className='mt-[30px] md:mt-[40px]'/>
      <div className='h-[3000px]'></div>
    </Wrapper>
  )
}
