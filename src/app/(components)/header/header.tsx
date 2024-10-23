import { DATA_MENU_MAIN } from '@/ultil/const'
import { HeaderCenterCTA } from '@/app/(components)/header/center-cta'
import { HeaderMenuVertical } from '@/app/(components)/header/menu-vertical'
import { HeaderSearch } from '@/app/(components)/header/search'
import Image from 'next/image'
import Link from 'next/link'
import { MenuTop } from '@/app/(components)/header/menu-top'
import React from 'react'
import SvgArrowDown from '@/app/(svg)/arrow-down'
import SvgArrowRight from '@/app/(svg)/arrow-right'
import SvgPhone from '@/app/(svg)/phone'
import SvgWhatsApp from '@/app/(svg)/whatsapp'
import SystemLink from '@/app/(components)/link'
import styles from './header.module.scss'

export const Header = () => {
  return (
    <header>
      <HeaderTop />
      <HeaderCenter />
      <HeaderBottom />
    </header>
  )
}

/**
 * A component that renders the top part of the header. It includes a top
 * navigation bar with links to the contact page, the world's fastest online
 * shopping destination, and a menu with links to the help page, the track
 * order page, and the dropdown menu.
 *
 * @returns A component that renders the top part of the header.
 */
const HeaderTop = () => {
  return (
    <div className={`bg-[rgb(var(--bg-2nd))] py-[10px] px-[12px]`}>
      <div
        className={`container text-size-small flex gap-x-[15px] text-[rgb(var(--color-text-sub))] items-center`}
      >
        <div className="flex flex-1 gap-x-[15px]">
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
        <div className="flex-1 hidden lg:block">
          <div className="text-center">
            World's Fastest Online Shopping Destination
          </div>
        </div>
        <div className="flex-1">
          <MenuTop />
        </div>
      </div>
    </div>
  )
}

const HeaderCenter = () => {
  return (
    <>
      <div>
        <div className="container px-[12px]">
          <div className="flex items-center py-[30px]">
            <Link href={'/'}>
              <Image
                src={'/assets/logo.png'}
                alt={'logo'}
                width={144}
                height={39}
                objectFit="contain"
              />
            </Link>
            <div className="flex-1 px-[40px]">
              <HeaderSearch />
            </div>
            <div className="flex">
              <HeaderCenterCTA />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const HeaderBottom = () => {
  return (
    <div className="border-t border-b border-solid border-[rgba(var(--color-border),0.1)] py-[6px] px-[12px]">
      <div className="container">
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
