'use client'

import SvgMenu from '@/app/_svg/menu'
import { toggleAside } from '@/redux/feature/menu-aside'
import { useDispatch } from 'react-redux'

export const ButtonAsideMenu = () => {
  const dispath = useDispatch()

  return (
    <>
      <div
        className="w-[30px] h-[30px] p-[3px] sm:p-[4px] text-title hover:text-primary transition-colors"
        onClick={() => dispath(toggleAside())}
      >
        <SvgMenu
          width={'100%'}
          height={'100%'}
        />
      </div>
    </>
  )
}
