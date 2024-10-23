'use client'

import React, { useCallback, useEffect, useState } from 'react'

import SystemLink from '@/app/(components)/link'
import styles from './header.module.scss'

export const MenuTop = () => {
  const [isShowSub, setIsShowSub] = useState(false)

  const handleClosePopup = useCallback((e: MouseEvent) => {
    if ((e?.target as Element)?.closest('.el-sub-menu') != null) return

    setIsShowSub(false)

    return document.removeEventListener('click', handleClosePopup)
  }, [])

  useEffect(() => {
    if (isShowSub) {
      document.addEventListener('click', handleClosePopup)
    }
  }, [isShowSub])

  return (
    <div className={`${styles.menuTop}`}>

      <SystemLink
        url="#"
        className={`${styles.menuItem}`}
      >
        <span className={`${styles.menuItemText}`}>Track Order?</span>
      </SystemLink>
      <SystemLink
        className={`${styles.menuItem} ${styles.hasSub} ${
          isShowSub ? styles.active : ''
        } el-sub-menu`}
        onClick={() => setIsShowSub(true)}
      >
        <span className={`${styles.menuItemText}`}>Dropdown Menu</span>
        <div className={`${styles.menuSub}`}>
          <SystemLink
            url="#"
            className={`${styles.menuSubItem}`}
          >
            <span className={`${styles.menuSubItemText}`}>
              Menu sub somgthing
            </span>
          </SystemLink>
          <SystemLink
            url="#"
            className={`${styles.menuSubItem}`}
          >
            <span className={`${styles.menuSubItemText}`}>Menu sub next</span>
          </SystemLink>
          <SystemLink
            url="#"
            className={`${styles.menuSubItem}`}
          >
            <span className={`${styles.menuSubItemText}`}>Menu sub other</span>
          </SystemLink>
        </div>
      </SystemLink>
      <SystemLink
        url="#"
        className={`${styles.menuItem}`}
      >
        <span className={`${styles.menuItemText}`}>Contact Us</span>
      </SystemLink>
    </div>
  )
}
