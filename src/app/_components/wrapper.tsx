import React, { ReactNode } from 'react'

import { Header } from '@/app/_components//header/header'
import StoreProvider from '@/app/_components/provider'

export const Wrapper = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <StoreProvider>
        <Header />
        <main>{children}</main>
      </StoreProvider>
    </>
  )
}
