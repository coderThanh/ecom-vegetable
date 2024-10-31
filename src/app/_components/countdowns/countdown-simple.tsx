'use client'

import 'dayjs/locale/vi'

import { useEffect, useState } from 'react'

import { dayjsUTCLocal } from '@/ultil/helper'

type CountDownSimpleProps = {
  className?: string
  time: Date
}
export const CountDownSimple = (props: CountDownSimpleProps) => {
  const [date, setDate] = useState<Date>(new Date(0))

  useEffect(() => {
    setInterval(() => {
      if (props.time.getTime() > Date.now()) {
        setDate(new Date(props.time.getTime() - Date.now()))

        return
      }

      setDate(new Date(0))
    }, 1000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className={`${
        props?.className ?? ''
      }  font-bold text-rgb(var(--color-text-title)) bg-[rgb(var(--bg-opposite),0.06)] flex gap-x-[7px] rounded-radius-1 px-[14px] py-[10px]`}
    >
      <span>
        {Math.floor(date.getTime() / (1000 * 60 * 60 * 24))}{' '}
        <span className="font-normal">Days</span>
      </span>
      <span>{dayjsUTCLocal(date).format('HH')}</span>
      <span>:</span>
      <span>{dayjsUTCLocal(date).format('mm')}</span>
      <span>:</span>
      <span>{dayjsUTCLocal(date).format('ss')}</span>
    </div>
  )
}
