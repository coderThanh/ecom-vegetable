import Link from 'next/link'
import { MenuTop } from '@/app/(components)/header/menu-top'
import React from 'react'
import SvgPhone from '@/app/(svg)/phone'
import SvgWhatsApp from '@/app/(svg)/whatsapp'
import styles from './header.module.scss'

export const Header = () => {
  return (
    <header>
      <div className={`bg-[rgb(var(--bg-2nd))] py-[10px]`}>
        <div
          className={`container text-size-small flex gap-x-[15px] text-[rgb(var(--color-text-sub))]`}
        >
          <div className="flex gap-x-[15px]">
            <Link
              href={'#'}
              className="flex gap-x-[5px] items-center  hover:text-[rgb(var(--color-primary))] duration-300 transition-all"
            >
              <SvgPhone />
              +91 987 654 3210
            </Link>
            <Link
              href={'#'}
              className="flex gap-x-[5px] items-center  hover:text-[rgb(var(--color-primary))] duration-300 transition-all"
            >
              <SvgWhatsApp />
              +91 987 654 3210
            </Link>
          </div>
          <div className="flex-1">
            <div className="text-center">
              World's Fastest Online Shopping Destination
            </div>
          </div>
          <div>
            <MenuTop />
          </div>
        </div>
      </div>
      <div className={`${styles.main}`}>main</div>
      <div className={`${styles.bottom}`}>bottom</div>
    </header>
  )
}
