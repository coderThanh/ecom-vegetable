'use client'

import { ReactNode, useEffect } from 'react'

type TabProps = {
  className?: string
  tabIndex: number
  items: { titles: string[]; contents: ReactNode[] }[]
}
export const Tab = (props: TabProps) => {
  useEffect(() => {
    console.info('Tab change')
  }, [props.tabIndex])
  return <div className={`${props?.className ?? ''}`}>aaa</div>
}

type TabTitleProps = { className?: string }
export const TabTitle = (props: TabTitleProps) => {
  return <div className={`${props?.className ?? ''}`}>aaa</div>
}
