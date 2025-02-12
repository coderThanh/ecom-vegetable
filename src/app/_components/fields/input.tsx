'use client'

import SvgEyeLineOpen from '@/svg/eye-line-open'
import SvgEyeLineThought from '@/svg/eye-line-thought'
import { useState } from 'react'

type FieldPasswordProps = {
  className?: string
  classInput?: string
  idInput?: string
  name?: string
  value?: string
}
export const FieldPassword = (props: FieldPasswordProps) => {
  const [isShowPass, setIsShowPass] = useState(false)

  return (
    <div className={`${props?.className ?? ''} relative`}>
      <input
        id={props?.idInput}
        type={isShowPass ? 'text' : 'password'}
        className={`field-input ${props?.classInput ?? ''} !pr-[40px]`}
        value={props?.value}
      />
      <div
        onClick={() => setIsShowPass(!isShowPass)}
        className="cursor-pointer flex justify-center items-center w-[40px] h-full absolute top-0 right-0"
      >
        {isShowPass ? (
          <SvgEyeLineThought
            width={20}
            height={20}
          />
        ) : (
          <SvgEyeLineOpen
            width={20}
            height={20}
          />
        )}
      </div>
    </div>
  )
}
