'use client'

import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/redux/store'
import { ShopAside } from '@/app/cua-hang/page'
import SvgClose from '@/svg/close'
import { changePopupStatus } from '@/redux/feature/popup'
import { useCallback } from 'react'

type PopupProps = { className?: string }
export default function Popup(props: PopupProps) {
  const { isOpen, content } = useSelector((state: RootState) => state.popup)

  const dispatch = useDispatch()

  const handleClose = useCallback(() => {
    dispatch(changePopupStatus(false))
  }, [dispatch])

  return (
    <div
      className={`${
        props?.className ?? ''
      } fixed z-[500] top-0 left-0 overflow-hidden w-[100vw] h-[100vh] pointer-events-none`}
    >
      {content}
      {/* bg */}
      <div
        className={`bg-black absolute -z-10 top-0 left-0 w-full h-full  cursor-pointer transition-all duration-300 ${
          isOpen ? 'opacity-80 pointer-events-auto' : 'opacity-0'
        }`}
        onClick={handleClose}
      ></div>
    </div>
  )
}

export enum PopupContentType {
  left = 'left',
  right = 'right',
  center = 'center',
  leftBottomSheet = 'leftBottomSheet',
}

type PopupContentProps = {
  className?: string
  children?: React.ReactNode
  type?: PopupContentType
  isShowBtnClose?: boolean
}

export const PopupContent = ({
  className,
  children,
  type,
  isShowBtnClose,
}: PopupContentProps) => {
  const { isOpen } = useSelector((state: RootState) => state.popup)

  const dispatch = useDispatch()

  const handleClose = useCallback(() => {
    dispatch(changePopupStatus(false))
  }, [dispatch])

  var classWrap = ''
  var classBtnClose = ''

  switch (type) {
    case PopupContentType.leftBottomSheet:
      classWrap = `w-full h-[80%] md:h-full md:max-w-[500px] absolute bottom-0 rounded-[20px__20px_0px_0] md:rounded-[0px] ${
        isOpen
          ? 'animate-fadeInFromBottom md:animate-fadeInFromLeft'
          : 'animate-fadeOutToBottom md:animate-fadeOutToLeft'
      }`

      classBtnClose = 'hidden md:block'
      break

    default:
      classWrap = `w-full h-full max-w-[500px] ${
        isOpen ? 'animate-fadeInFromLeft' : 'animate-fadeOutToLeft'
      }`
  }

  return (
    <div
      className={`${className ?? ''} overflow-hidden bg-bg transition-all ${
        isOpen ? 'pointer-events-auto visible' : 'invisible'
      }  ${classWrap}`}
    >
      {isShowBtnClose && (
        <button
          className={`absolute top-[15px] right-[12px] text-title w-[30px] h-[30px] rounded-full flex items-center justify-center ${classBtnClose}`}
          onClick={handleClose}
        >
          <SvgClose
            width={18}
            height={18}
          />
        </button>
      )}

      <div className="overflow-y-auto overflow-x-hidden w-full max-h-full scrollbar">
        {children}
      </div>
    </div>
  )
}
