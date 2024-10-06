import React, { ReactNode } from 'react'

import { Header } from '@/app/(components)/header/header'

export const Wrapper = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}
