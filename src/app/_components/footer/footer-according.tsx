'use client'

import { ReactNode, useEffect, useState } from 'react'

import SvgArrowDown from '@/svg/arrow-down'
import { motion } from 'motion/react'

type FooterAccordingProps = {
  className?: string
  children?: ReactNode
  title: string
}
export const FooterAccording = (props: FooterAccordingProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const onClickTitle = (event: any) => {
    var isMobile = window.matchMedia('(max-width: 1023px)').matches

    if (isMobile) setIsOpen(!isOpen)
  }

  useEffect(() => {
    var isMobile = window.matchMedia('(max-width: 1023px)').matches

    if (!isMobile) setIsOpen(true)
  }, [])

  return (
    <div className={`${props?.className ?? ''}`}>
      <h3
        className="flex gap-[10px] text-title text-size-2 leading-[1.35] font-bold border-b border-solid border-[rgb(var(--color-border),0.1)] pb-[10px] cursor-pointer lg:cursor-auto"
        onClick={onClickTitle}
      >
        <span className="flex-1">{props.title}</span>
        <SvgArrowDown
          width={18}
          height={18}
          className="block lg:hidden"
        />
      </h3>
      {props.children && (
        <motion.div
          className="overflow-hidden"
          animate={{
            height: isOpen ? '' : '0px',
            marginTop: isOpen ? '20px' : '0px',
          }}
        >
          {props.children}
        </motion.div>
      )}
    </div>
  )
}
