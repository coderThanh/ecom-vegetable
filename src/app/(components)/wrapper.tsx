import React, { ReactNode } from 'react'

import { Header } from '@/app/(components)/header/header'
import StoreProvider from '@/app/(components)/provider'

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
