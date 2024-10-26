import { HomeHero } from '@/app/(components)/sliders/home-hero/home-hero'
import { Metadata } from 'next'
import { PAGE_DESCRIPTION } from '@/ultil/const'
import { Wrapper } from '@/app/(components)/wrapper'

export const metadata: Metadata = {
  title: 'Home',
  description: PAGE_DESCRIPTION,
}

export default function Home() {
  return (
    <Wrapper>
      <HomeHero />
    </Wrapper>
  )
}


