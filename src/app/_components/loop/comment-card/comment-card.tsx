'use client'

import SystemImage from '@/app/_components/img'
import dayjs from 'dayjs'
import { formatDate } from '@/ultil/helper'
import { useState } from 'react'

type CommentCardProps = {
  className?: string
  name: string
  message: string
  img: string
  onReply: VoidFunction
  children?: any[]
}

export const CommentCard = ({
  className,
  name,
  message,
  img,
  onReply,
  children,
}: CommentCardProps) => {
  const [isShowChildren, setShowChildren] = useState(false)

  return (
    <div className={`grid grid-cols-[40px_1fr] sm:grid-cols-[60px_1fr] gap-[10px] sm:gap-[14px] ${className ?? ''}`}>
      <SystemImage
        src={`${img}`}
        alt={'avatar'}
        ratio={100}
        sizes="600px"
        radius={200}
        isSketch={true}
      />
      <div>
        <div className="font-bold leading-[1.3] mb-[8px] capitalize">
          {name}
        </div>
        <div className="text-size-small text-[rgb(var(--color-text-title),0.72)]">
          {dayjs(new Date()).format('HH:mm')} -{' '}
          {formatDate(new Date().toDateString())}
        </div>
        <p className="block mt-[12px] leading-[1.4] mb-0">{message}</p>
        <button
          className="text-primary text-size-small font-[500] leading-[1.4] mt-[12px] sm:mt-[16px] hover:underline underline-offset-2 hover:decoration-1"
          onClick={onReply}
        >
          Reply
        </button>

        {/* children */}
        {children && children.length > 0 ? (
          <div className={`mt-[20px] ${!isShowChildren ? 'hidden' : ''}`}>
            {children.map((child, indexChild) => (
              <CommentCard
                key={`comment-child-${child.id + indexChild}`}
                name={child.name}
                message={child.message}
                img={child.img}
                onReply={() => {}}
                className={indexChild > 0 ? 'mt-[20px] sm:mt-[25px]' : ''}
              />
            ))}
          </div>
        ) : null}
        {children && children.length > 0 ? (
          <button
            className="flex items-center gap-[12px] mt-[18px] mb-[5px] text-size-small transition-colors duration-200 hover:text-primary"
            onClick={() => setShowChildren(!isShowChildren)}
          >
            <span className="inline-block h-[1px] w-[38px] bg-[rgb(var(--bg-opposite),0.2)]"></span>
            <span>{isShowChildren ? 'Hidden' : 'See more'}</span>
          </button>
        ) : null}
      </div>
    </div>
  )
}
