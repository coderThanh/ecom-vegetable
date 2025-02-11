'use client'

import { useCallback, useState } from 'react'

import { REGEXS } from '@/ultil/const'
import SvgMinus from '@/svg/minus'
import SvgPlus from '@/svg/plus'

type FieldQuantityProps = {
  className?: string
  classBtn?: string
  classInput?: string
  value: number
  onChange: (value: number | string) => void
}

export const FieldQuantity = ({
  className,
  classBtn,
  classInput,
  value,
  onChange,
}: FieldQuantityProps) => {
  const [valueReal, setValue] = useState<number | string>(value)

  const classNameBtn = `transition-color hover:text-primary px-[8px] md:px-[10px] ${
    classBtn ?? ''
  }`

  const classNameInput = `text-center bg-transparent text-[16px] px-[8px] w-[55px] md:w-[70px] ${
    classInput ?? ''
  }`

  const handleOnChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      var validValue = e.target.value

      validValue = validValue.trim()

      if (validValue == '') {
        handleChangleValueFinal('')
        return
      }

      validValue = validValue.replace(/[^0-9]/g, '')

      handleChangleValueFinal(validValue)
    },
    [],
  )

  const handleChangleValueFinal = useCallback((value: number | string) => {
    setValue(value)

    // event for parent
    onChange(value)
  }, [])

  const handleUnFocus = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      var validValue = e.target.value

      validValue = validValue.trim()

      if (validValue == '') {
        handleChangleValueFinal(1)
      }
    },
    [],
  )

  const handleChangeByBtn = useCallback(
    (value: number) => {
      var validValue: number = valueReal ? parseInt(valueReal.toString()) : 0

      if (validValue + value < 1) {
        handleChangleValueFinal(1)
        return
      }

      handleChangleValueFinal(validValue + value)
    },
    [valueReal],
  )

  return (
    <div
      className={`${
        className ?? ''
      } flex items-stretch border border-solid border-[rgb(var(--color-border),0.1)] rounded-radius-1 text-title `}
    >
      <button
        className={classNameBtn}
        onClick={() => handleChangeByBtn(-1)}
      >
        <SvgMinus
          width={14}
          height={14}
        />
      </button>
      <input
        type="text"
        value={valueReal}
        className={classNameInput}
        onChange={handleOnChangeInput}
        onBlur={handleUnFocus}
      />
      <button
        className={classNameBtn}
        onClick={() => handleChangeByBtn(1)}
      >
        <SvgPlus
          width={14}
          height={14}
        />
      </button>
    </div>
  )
}
