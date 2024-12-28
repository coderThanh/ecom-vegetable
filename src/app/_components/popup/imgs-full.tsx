import { PopupContent, PopupContentType } from '@/app/_components/popup/popup'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import { useEffect, useRef } from 'react'

import Image from 'next/image'
import { RootState } from '@/redux/store'
import { useSelector } from 'react-redux'

type ImgsFullPopupProps = {
  imgs: string[]
  className?: string
  currentIndex: number
}
export const ImgsFullPopup = ({
  className,
  imgs,
  currentIndex,
}: ImgsFullPopupProps) => {
  const { isOpen } = useSelector((state: RootState) => state.popup)
  const swiperRef = useRef<SwiperRef>(null)

  useEffect(() => {
    if (isOpen === false) return

    swiperRef.current?.swiper?.slideTo(currentIndex, 0)
  }, [isOpen])

  return (
    <PopupContent
      type={PopupContentType.center}
      className="bg-transparent rounded-none"
      classBtn="!top-[5px] !right-[5px] md:!right-[30px]"
    >
      <Swiper
        ref={swiperRef}
        initialSlide={currentIndex}
        spaceBetween={10}
        loop={true}
        className={`${className ?? ''}  h-[90vh] pointer-events-none`}
      >
        {imgs.map((item, index) => (
          <SwiperSlide
            key={`imgs-full-${index}`}
            className="!flex items-center justify-center"
          >
            <div>
              <Image
                src={item}
                alt={'product title'}
                width={2000}
                height={2000}
                className="max-w-full w-auto max-h-full  object-contain  mx-auto pointer-events-auto"
              />
              <div className="text-bg pt-[10px] text-right text-size-small px-[10px] opacity-30">
                <span>{index + 1}</span>
                <span> / {imgs.length}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>{' '}
    </PopupContent>
  )
}
