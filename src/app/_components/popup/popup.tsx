'use client'

import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/redux/store'
import SvgClose from '@/svg/close'
import { changePopupStatus } from '@/redux/feature/popup'
import { useCallback } from 'react'

// to use Popup component you need use redux popup: changePopupStatus, change popupContent
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
  centerBottomSheet = 'centerBottomSheet',
}

type PopupContentProps = {
  className?: string
  children?: React.ReactNode
  type?: PopupContentType
  isShowBtnClose?: boolean
  classBtn?: string
  classContent?: string
}

export const PopupContent = ({
  className,
  classBtn,
  classContent,
  children,
  type,
  isShowBtnClose = true,
}: PopupContentProps) => {
  const { isOpen } = useSelector((state: RootState) => state.popup)

  const dispatch = useDispatch()

  const handleClose = useCallback(() => {
    dispatch(changePopupStatus(false))
  }, [dispatch])

  var classWrapDefault = ''
  var classContentDefault = ''
  var classBtnCloseDefault = ''

  // NOTE ***
  // Default don't have pointer events for content. You should add class pointer-events-auto in classContent or some class children
  // Div Wrap will controll bg, rounded, max-width
  // Div Content will control: max height, height to scroll

  switch (type) {
    case PopupContentType.leftBottomSheet:
      classWrapDefault = `md:max-w-[500px] absolute bottom-0 md:top-0 rounded-[15px_15px_0px_0] md:rounded-[0px] ${
        isOpen
          ? 'animate-fadeInFromBottom md:animate-fadeInFromLeft'
          : 'animate-fadeOutToBottom md:animate-fadeOutToLeft'
      }`

      classContentDefault = 'max-h-[80vh] md:max-h-[100vh] h-fit'
      classBtnCloseDefault = 'hidden md:block'
      break

    case PopupContentType.centerBottomSheet:
      classWrapDefault = `md:max-w-[680px] rounded-[15px_15px_0px_0] md:rounded-[20px] animate-duration-300 absolute bottom-0 md:bottom-[unset] md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 ${
        isOpen
          ? 'animate-fadeInFromBottom md:animate-fadeInPopup'
          : 'animate-fadeOutToBottom md:animate-fadeOut'
      }`

      classContentDefault = 'h-[fit-content] max-h-[80vh]'
      classBtnCloseDefault = 'hidden md:block'
      break

    case PopupContentType.center:
      classWrapDefault = `w-full bg-bg rounded-[20px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
        isOpen ? 'animate-fadeIn ' : 'animate-fadeOut'
      }`

      classContentDefault = 'md:max-h-[100vh] h-fit'

      break

    default: // PopupContentType.left
      classWrapDefault = ` h-full max-w-[500px] ${
        isOpen ? 'animate-fadeInFromLeft' : 'animate-fadeOutToLeft'
      }`

      classContentDefault = 'max-h-[100vh]'
  }

  return (
    <div
      className={`${
        className ?? ''
      } w-full overflow-hidden bg-bg transition-all ${
        isOpen ? 'visible' : 'invisible'
      }  ${classWrapDefault}`}
    >
      <div
        className={`overflow-y-auto overflow-x-hidden w-full  scrollbar z-[40] ${classContentDefault} ${
          classContent ?? ''
        }`}
      >
        {children}
      </div>

      {isShowBtnClose && (
        <button
          className={`absolute top-[15px] z-50 right-[12px] text-title w-[30px] h-[30px] rounded-full flex items-center justify-center pointer-events-auto ${
            classBtn ?? ''
          } ${classBtnCloseDefault} `}
          onClick={handleClose}
        >
          <SvgClose
            width={18}
            height={18}
          />
        </button>
      )}
    </div>
  )
}
