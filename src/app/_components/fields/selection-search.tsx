'use client'

import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import { parseQuerySlug, parseVietnameseRemoveSign } from '@/ultil/helper'

import { Option } from '@/ultil/type'

type FieldSelectSearchProps = {
  defaultValue?: Option | null
  placeholder?: string
  options: Option[]
  className?: string
  onChange?: (index: number) => void
}

export const FieldSelectSearch = (props: FieldSelectSearchProps) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false)
  const [valueSearch, setValueSearch] = useState('')

  const inputRef = useRef(null)

  const hasValue = props?.defaultValue?.value ? true : false

  const onSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValueSearch(event.target.value)
  }, [])

  const coverToBaseText = useCallback((text: string) => {
    return parseQuerySlug(parseVietnameseRemoveSign(text.trim()), true)
  }, [])

  const isMatchSearchText = useCallback(
    (text: string): boolean => {
      if (!valueSearch.trim()) {
        return true
      }

      if (coverToBaseText(text).includes(coverToBaseText(valueSearch))) {
        return true
      }

      return false
    },
    [valueSearch],
  )

  const hookBeforeClosePopup = () => {
    document.removeEventListener('click', handleBodyClosePopup)
    setIsOpenPopup(false)
  }

  const handlePopupStatus = () => {
    if (!isOpenPopup) {
      setIsOpenPopup(true)

      document?.addEventListener('click', handleBodyClosePopup)

      return
    }

    hookBeforeClosePopup()
  }

  const handleBodyClosePopup = (event: MouseEvent) => {
    if (!inputRef.current) {
      return
    }

    var element = event.target as Element

    var wrapElement = inputRef.current as Element

    if (element === wrapElement) {
      return
    }

    hookBeforeClosePopup()
  }

  const handleChangeOption = useCallback(
    (index: number) => {
      if (props.onChange) {
        props.onChange(index)
      }
    },
    [props?.onChange],
  )

  return (
    <div className={`${props?.className ?? ''} relative`}>
      <div
        className="field-input cursor-pointer"
        onClick={handlePopupStatus}
      >
        <div className="flex gap-[12px]">
          <span
            className={`${
              !hasValue ? 'text-[rgb(var(--color-text-title),0.6)]' : ''
            } flex-1 line-clamp-1`}
          >
            {hasValue ? props?.defaultValue?.title : props?.placeholder}
          </span>
          <span className="material-symbols-outlined font-[300] text-[24px]">
            keyboard_arrow_down
          </span>
        </div>
      </div>
      <div
        className={`absolute bg-bg top-[calc(100%+5px)] left-0 w-full z-20 rounded-radius-1 border border-solid border-[rgb(var(--color-border),0.15)] transition-all  ${
          isOpenPopup ? '' : 'pointer-events-none opacity-0 translate-y-[5px]'
        }`}
      >
        <div className="p-[12px_12px]">
          <input
            ref={inputRef}
            type="text"
            className="text-[16px] bg-bg-2nd border border-solid border-[rgb(var(--color-border),0.15)] w-full p-[10px_14px] transition-all focus:border-[rgb(var(--color-border))]"
            placeholder="Search..."
            onChange={onSearch}
          />
        </div>
        <div
          className={`max-h-[260px] overflow-y-auto overflow-x-hidden scrollbar pb-[10px]`}
        >
          {props.options.map((item, index) => (
            <div
              key={`${item.value} ${index}`}
              className={`text-[14px] p-[15px_14px] transition-all hover:bg-bg-2nd cursor-pointer ${
                props.defaultValue?.value &&
                props.defaultValue?.value === item.value
                  ? 'font-bold'
                  : ''
              } ${isMatchSearchText(item.title) ? '' : 'hidden'}`}
              onClick={(_) => handleChangeOption(index)}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
