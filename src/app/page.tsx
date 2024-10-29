import { CountDownSimple } from '@/app/_components/countdowns/countdown-simple'
import { HomeHero } from '@/app/_components/banners/home-hero/home-hero'
import { Metadata } from 'next'
import { PAGE_DESCRIPTION } from '@/ultil/const'
import { ProductCategory } from '@/app/_components/loop/product-category/product-category'
import { ProductSlider } from '@/app/_components/loop/product-slider/product-slider'
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

      {/* Product Deal ---- */}
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
            <CountDownSimple
              time={new Date(Date.now() + 1000 * 60 * 60 * 34)}
            />
          </div>
        </div>
        <ProductSlider className='mt-[18px]' />
      </div>

      {/* ----- */}
      <div className="h-[3000px]"></div>
    </Wrapper>
  )
}
