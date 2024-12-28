'use client'

import 'dayjs/locale/vi'

import { useEffect, useState } from 'react'

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

type CountDownSimpleProps = {
  className?: string
  time: Date
}
export const CountDownSimple = (props: CountDownSimpleProps) => {
  dayjs.extend(utc)

  const [date, setDate] = useState<Date | undefined>(undefined)

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
        {Math.floor(date ? date.getTime() / (1000 * 60 * 60 * 24) : 0)}{' '}
        <span className="font-normal">Days</span>
      </span>
      <span>{date ? dayjs(date).utc().format('HH') : '0'}</span>
      <span>:</span>
      <span>{date ? dayjs(date).utc().format('mm') : '0'}</span>
      <span>:</span>
      <span>{date ? dayjs(date).utc().format('ss') : '0'}</span>
    </div>
  )
}
