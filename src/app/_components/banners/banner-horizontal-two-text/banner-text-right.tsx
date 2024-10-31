'use client'

import SystemButton, {
  SystemButtonColor,
  SystemButtonKind,
  SystemButtonSize,
} from '@/app/_components/button'

import Image from 'next/image'
import { ReactNode } from 'react'

type BannerHorizontalTwoTextProps = {
  className?: string
  classNameBoxText?: string
  classNameImg?: string
  children?: ReactNode
  imgSrc: string
  imgAlt: string
  title?: string
  titleSize: 'small' | 'big'
  btnText?: string
  btnLink?: string
}
export const BannerHorizontalTwoText = (
  props: BannerHorizontalTwoTextProps,
) => {
  return (
    <div className={`container px-[12px]  ${props?.className ?? ''}`}>
      <div className="relative  overflow-hidden  rounded-radius-1 isolate">
        <div
          className={`text-right p-[40px_32px] lg:p-[80px_60px] ${
            props?.classNameBoxText ?? ''
          }`}
        >
          {props?.title && (
            <h2
              className={`font-bold leading-[1.3] ${
                props?.titleSize === 'big'
                  ? 'text-size-4  lg:text-size-8'
                  : 'text-size-4'
              }`}
            >
              {props?.title}
            </h2>
          )}
          {props?.children}
          {props?.btnText && (
            <SystemButton
              text={props?.btnText}
              url={props?.btnLink}
              kind={SystemButtonKind.default}
              color={SystemButtonColor.primary}
              className="mt-[16px]"
              size={SystemButtonSize.small}
            />
          )}
        </div>
        <Image
          src={props?.imgSrc}
          alt={props?.imgAlt}
          fill={true}
          sizes="(100vw, 100vh)"
          className={`object-cover object-left w-full h-full top-0 left-0 absolute -z-10 ${
            props?.classNameImg ?? ''
          }`}
        />
      </div>
    </div>
  )
}
