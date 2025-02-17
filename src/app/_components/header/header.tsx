'use client'

import { ButtonAsideMenu } from '@/app/_components/header/aside-menu'
import { DATA_MENU_MAIN } from '@/data/demo-data'
import { HeaderCenterCTA } from '@/app/_components/header/center-cta'
import { HeaderMenuVertical } from '@/app/_components/header/menu-vertical'
import { HeaderSearch } from '@/app/_components/header/search'
import Image from 'next/image'
import Link from 'next/link'
import { MenuTop } from '@/app/_components/header/menu-top'
import React from 'react'
import SvgArrowDown from '@/svg/arrow-down'
import SvgArrowRight from '@/svg/arrow-right'
import SvgPhone from '@/svg/phone'
import SvgWhatsApp from '@/svg/whatsapp'
import SystemLink from '@/app/_components/link'
import styles from './header.module.scss'
import { useHeaderSticky } from '@/presentation/ctrl-header'

export const Header = () => {
  const { headerHeight, headerRef, isSticky } = useHeaderSticky()

  return (
    <header
      className={`${isSticky ? styles.sticky : ''}`}
      style={{ height: headerHeight }}
    >
      <div
        ref={headerRef}
        className={`${styles.headerInner} bg-[rgb(var(--bg))]`}
      >
        <HeaderTop className={styles.hiddenStikcy} />
        <HeaderCenter className="is-sticky" />
        <HeaderBottom className="is-stkicy" />
      </div>
    </header>
  )
}

type HeaderTopProps = {
  className?: string
}

const HeaderTop = (props: HeaderTopProps) => {
  return (
    <div
      className={`bg-[rgb(var(--bg-2nd))] py-[10px]  ${props?.className ?? ''}`}
    >
      <div
        className={`container text-size-small px-[12px] flex gap-x-[15px] text-[rgb(var(--color-text-sub))] items-center`}
      >
        <div className="hidden sm:flex flex-1 gap-x-[15px]">
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
        {/* ---- */}
        <div className="flex-1 hidden lg:block">
          <div className="text-center">
            World's Fastest Online Shopping Destination
          </div>
        </div>
        {/* ---- */}
        <div className="flex-1 hidden lg:flex justify-end">
          <MenuTop />
        </div>
        {/* Mobile -----*/}
        <div className="flex lg:hidden gap-[12px] justify-between flex-1 sm:justify-end">
          <div className="order-2">
            <HeaderCenterCTA />
          </div>
          <div className="order-1 sm:order-3">
            <ButtonAsideMenu />
          </div>
        </div>
      </div>
    </div>
  )
}

type HeaderCenterpProps = {
  className?: string
}
const HeaderCenter = (props: HeaderCenterpProps) => {
  return (
    <>
      <div
        className={`border-b border-solid border-[rgba(var(--color-border),0.1)] ${
          props?.className ?? ''
        }`}
      >
        <div className="container px-[12px]">
          <div className="flex items-center py-[20px] md:py-[30px]">
            <Link
              href={'/'}
              className="basis-[120px] block"
            >
              <Image
                src={'/assets/logo.png'}
                alt={'logo'}
                width={144}
                height={39}
                className="object-contain"
              />
            </Link>
            <div className="flex-1 lg:px-[40px] ps-[30px]">
              <HeaderSearch />
            </div>
            <div className=" hidden lg:block">
              <HeaderCenterCTA />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

type HeaderBottomProps = {
  className?: string
}
const HeaderBottom = (props: HeaderBottomProps) => {
  return (
    <div
      className={`border-b border-solid border-[rgba(var(--color-border),0.1)] py-[6px]  hidden lg:block ${
        props?.className ?? ''
      }`}
    >
      <div className="container px-[12px]">
        <div className="flex items-center">
          <div>
            <HeaderMenuVertical />
          </div>
          <div className="flex-1 ps-[40px]">
            <HeaderBottomNav />
          </div>
        </div>
      </div>
    </div>
  )
}

const HeaderBottomNav = () => {
  return (
    <div className={styles.menuBot}>
      {DATA_MENU_MAIN.map((item, index: number) => {
        return (
          // level 1
          <div
            key={`bottom-${index}`}
            className={styles.item}
          >
            <SystemLink
              url={item?.url}
              className={styles.link}
            >
              <span className={styles.menuItemText}>{item.text}</span>
              {item?.chilren?.length ? <SvgArrowDown /> : null}
            </SystemLink>
            {/* level 2 */}
            {item?.chilren?.length ? (
              <div className={styles.subMenu}>
                {item?.chilren.map((child, index) => (
                  <div
                    key={`bottom-child-${index}`}
                    className={styles.itemChild}
                  >
                    <SystemLink
                      url={child?.url}
                      className={styles.link}
                    >
                      <span className={styles.menuItemText}>{child.text}</span>
                      {child?.chilren?.length ? <SvgArrowRight /> : null}
                    </SystemLink>
                    {/* Level 3 */}
                    {child.chilren?.length ? (
                      <div className={styles.subMenu}>
                        {child.chilren.map((childSub, index) => (
                          <div
                            key={`bottom-sub-${index}`}
                            className={styles.itemChild}
                          >
                            <SystemLink
                              url={childSub?.url}
                              className={styles.link}
                            >
                              <span className={styles.menuItemText}>
                                {childSub.text}
                              </span>
                            </SystemLink>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <></>
            )}
          </div>
        )
      })}
    </div>
  )
}
