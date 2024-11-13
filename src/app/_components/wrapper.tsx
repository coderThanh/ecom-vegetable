import React, { ReactNode } from 'react'

import { Footer } from '@/app/_components/footer/footer'
import { Header } from '@/app/_components//header/header'
import StoreProvider from '@/app/_components/provider'

export const Wrapper = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <StoreProvider>
        <Header />
        <main>{children}</main>
        <Footer />
      </StoreProvider>
    </>
  )
}
