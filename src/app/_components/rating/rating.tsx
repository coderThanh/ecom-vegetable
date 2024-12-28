'use client'

import SvgStar from '@/svg/star'
import { coverNumberToSummary } from '@/ultil/helper'
import { useEffect } from 'react'

type RatingProps = {
  className?: string
  classNameStar?: string
  classLabel?: string
  rating: number
  size?: number
  showLabel?: boolean

  onClick?: (number: number) => void
}
export const Rating = ({
  className,
  classNameStar,
  classLabel,
  showLabel,
  size,
  rating,
  onClick,
}: RatingProps) => {
  const isActive = onClick ? true : false

  useEffect(() => {}, [rating])

  return (
    <div className={`flex gap-[3px]  ${className ?? ''}`}>
      {['Rất tệ', 'Tệ', 'Tạm ổn', 'Tốt', 'Rất tốt'].map((item, index) => (
        <div
          key={`rating-item-${index}`}
          className={`text-center transition-colors  ${
            index < rating ? 'text-star' : 'text-[rgb(var(--bg-opposite),0.3)]'
          } ${classNameStar ?? ''}`}
          onClick={() =>
            onClick && onClick(index + 1 === rating ? 0 : index + 1)
          }
        >
          <SvgStar
            width={size ?? 12}
            height={size ?? 12}
            className="mx-auto"
          />
          {showLabel && (
            <span
              className={`mt-[10px] transition-colors  block ${
                classLabel ?? ''
              } ${rating == index + 1 ? 'text-star' : 'text-title'}`}
            >
              {item}
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

type RatingLineProps = { className?: string; value: number; start: number }
export const RatingLine = (props: RatingLineProps) => {
  return (
    <div className={`${props?.className ?? ''} flex items-center gap-[12px]`}>
      <div className="flex items-center gap-[5px] w-[26px]">
        <span className="text-[14px] leading-[1] text-title">
          {props.start}
        </span>
        <SvgStar
          width={12}
          height={12}
          className="text-star mt-[-2px]"
        />
      </div>
      <div className="flex-1 rounded-[200px] bg-[rgb(var(--bg-opposite),.08)] h-[6px] relative">
        <div
          className={`h-full rounded-[200px] bg-[#64b2fa] absolute left-0 top-0`}
          style={{ width: `${props.value}%` }}
        ></div>
      </div>
      <span className="text-[14px] font-[700] text-title leading-[1] w-[43px]">
        {props.value}%
      </span>
    </div>
  )
}

type RatingSummaryProps = { className?: string }
export const RatingSummary = (props: RatingSummaryProps) => {
  return (
    <div
      className={`${
        props?.className ?? ''
      } flex gap-[30px] items-center max-w-[500px]`}
    >
      <div className="text-center">
        <div className="text-[rgb(var(--color-text-title),0.7)] font-[500]">
          <span className="text-size-8 font-bold text-title">4.9</span> / 5
        </div>
        <div className="mt-[5px] text-title">
          {coverNumberToSummary(52439)} đánh giá
        </div>
      </div>
      <div className="grid gap-[10px] flex-1">
        <RatingLine
          value={99.9}
          start={5}
        />
        <RatingLine
          value={92}
          start={4}
        />
        <RatingLine
          value={0}
          start={3}
        />
        <RatingLine
          value={0}
          start={2}
        />
        <RatingLine
          value={0}
          start={1}
        />
      </div>
    </div>
  )
}
