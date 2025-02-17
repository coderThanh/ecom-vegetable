'use client'

import { PopupContent, PopupContentType } from '@/app/_components/popup/popup'
import { ReactNode, useCallback, useState } from 'react'
import { changePopupStatus, updatePopupContent } from '@/redux/feature/popup'

import { DATA_MENU_MAIN } from '@/data/demo-data'
import Image from 'next/image'
import Link from 'next/link'
import { Socials } from '@/app/_components/social/social'
import SvgClose from '@/svg/close'
import SvgMenu from '@/svg/menu'
import SvgMinus from '@/svg/minus'
import SvgPlus from '@/svg/plus'
import SystemLink from '@/app/_components/link'
import styles from './header.module.scss'
import { useDispatch } from 'react-redux'

export const AsideMenu = () => {
  const dispatch = useDispatch()

  return (
    <PopupContent
      type={PopupContentType.left}
      isShowBtnClose={false}
      classContent="p-[30px_30px] pointer-events-auto"
    >
      {/* --- Top --- */}
      <div className="flex items-center justify-between gap-[16px] mb-[30px] ">
        <Link
          href={'/'}
          aria-label="go home"
          onClick={() => dispatch(changePopupStatus(false))}
        >
          <Image
            src={'/assets/logo.png'}
            alt={'logo'}
            width={144}
            height={39}
          />
        </Link>
        <div
          className="cursor-pointer flex justify-center items-center w-[34px] h-[34px] opacity-70 transition-all hover:opacity-100 hover:text-primary"
          onClick={() => dispatch(changePopupStatus(false))}
        >
          <SvgClose />
        </div>
      </div>
      {/* --- Main --- */}
      <AsideMenuMain />
      <Socials
        facebook="#"
        x="#"
        instagram="#"
        linked="#"
        className="mt-[50px]"
      />
    </PopupContent>
  )
}

const AsideMenuMain = () => {
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col gap-[14px]">
      {DATA_MENU_MAIN.map((item, index: number) => {
        return (
          <AsideMenuItem
            key={`aside-item-${index}`}
            text={item.text}
            url={item?.url}
          >
            {item?.chilren && item?.chilren?.length > 0 ? (
              <div className="flex flex-col gap-[18px] pt-[20px] pb-[10px]">
                {item.chilren.map((child, index) => {
                  // ----- level 2
                  return (
                    <AsideMenuItemLv2
                      key={`aside-item-lv2-${index}`}
                      text={child.text}
                      url={child?.url}
                    >
                      {child?.chilren && child?.chilren?.length > 0 ? (
                        <div className="flex flex-col gap-[22px] pt-[16px] pb-[16px] pe-[14px] ps-[24px]">
                          {child.chilren.map((childSub, index) => {
                            // level 3 -----
                            return (
                              <SystemLink
                                key={`aside-item-lv3-${index}`}
                                url={childSub?.url}
                                onClick={() =>
                                  dispatch(changePopupStatus(false))
                                }
                                className="text-[rgb(var(--color-text-title),0.85)] hover:text-primary"
                              >
                                {childSub.text}
                              </SystemLink>
                            )
                          })}
                        </div>
                      ) : null}
                    </AsideMenuItemLv2>
                  )
                })}
              </div>
            ) : null}
          </AsideMenuItem>
        )
      })}
    </div>
  )
}

type AsideMenuItemProps = {
  url?: string
  text: string
  children?: ReactNode
}
const AsideMenuItem = (props: AsideMenuItemProps) => {
  const [isShowSub, setIsShowSub] = useState(false)

  const dispatch = useDispatch()

  return (
    <div className={styles.item}>
      <div className="relative">
        <SystemLink
          url={props?.url}
          onClick={() => dispatch(changePopupStatus(false))}
          className={`block cursor-pointer border-solid border border-[rgb(var(--color-border),0.1)] rounded-radius-small transition-all duration-200 ps-[14px] pe-[40px] py-[14px] leading-[1.4] text-size-2 font-semibold text-[rgb(var(--color-text-title))] hover:text-primary hover:border-primary `}
        >
          <span>{props.text}</span>
        </SystemLink>
        {props?.children && (
          <div
            className="absolute right-0 top-[50%] translate-y-[-50%] cursor-pointer w-[34px] h-[34px] flex justify-center items-center text-[rgb(var(--color-text-title),0.7)] hover:text-primary transition-colors duration-200"
            onClick={() => setIsShowSub(!isShowSub)}
          >
            {isShowSub ? (
              <SvgMinus
                width={18}
                height={18}
              />
            ) : (
              <SvgPlus
                width={18}
                height={18}
              />
            )}
          </div>
        )}
      </div>
      {isShowSub && props?.children}
    </div>
  )
}

const AsideMenuItemLv2 = (props: AsideMenuItemProps) => {
  const [isShowSub, setIsShowSub] = useState(false)

  const dispatch = useDispatch()

  return (
    <div className={styles.item}>
      <div className="relative">
        <SystemLink
          url={props?.url}
          onClick={() => dispatch(changePopupStatus(false))}
          className={`block cursor-pointer font-semibold text-[rgb(var(--color-text-title))] transition-all duration-200 ps-[14px] pe-[40px] leading-[1.4] hover:text-primary `}
        >
          <span className="">{props.text}</span>
        </SystemLink>
        {props?.children && (
          <div
            className="absolute right-0 top-[50%] translate-y-[-50%] cursor-pointer w-[34px] h-[34px] flex justify-center items-center text-[rgb(var(--color-text-title),0.8)] hover:text-primary transition-colors duration-200"
            onClick={() => setIsShowSub(!isShowSub)}
          >
            {isShowSub ? (
              <SvgMinus
                width={18}
                height={18}
              />
            ) : (
              <SvgPlus
                width={18}
                height={18}
              />
            )}
          </div>
        )}
      </div>
      {isShowSub && props?.children}
    </div>
  )
}

export const ButtonAsideMenu = () => {
  const dispath = useDispatch()

  const onOpen = useCallback(() => {
    dispath(updatePopupContent(<AsideMenu />))
    dispath(changePopupStatus(true))
  }, [])
  return (
    <>
      <div
        className="w-[30px] h-[30px] p-[3px] sm:p-[4px] text-title hover:text-primary transition-colors"
        onClick={onOpen}
      >
        <SvgMenu
          width={'100%'}
          height={'100%'}
        />
      </div>
    </>
  )
}
