'use client'

import SvgStar from '@/svg/star'
import { useEffect } from 'react'

type RatingProps = {
  className?: string
  classNameStar?: string
  rating: number
  size?: number
  onClick?: (number: number) => void
}
export const Rating = (props: RatingProps) => {
  const isActive = props?.onClick ? true : false

  useEffect(() => {}, [props?.rating])

  return (
    <div className={`flex gap-[3px]  ${props?.className ?? ''}`}>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <div
            key={`rating-item-${index}`}
            className={` ${
              isActive ? 'cursor-pointer hover:text-[#ffa249]' : ''
            } ${
              index < props?.rating
                ? 'text-[#ffa249]'
                : 'text-[rgb(var(--bg-opposite),0.3)]'
            } ${props?.classNameStar ?? ''}`}
          >
            <SvgStar
              width={props?.size ?? 12}
              height={props?.size ?? 12}
            />
          </div>
        ))}
    </div>
  )
}
