'use client'

import Link from 'next/link'
import SvgArrowDown from '@/app/(svg)/arrow-down'
import SvgCategory from '@/app/(svg)/category'
import SvgDessert_1 from '@/app/(svg)/dessert-1'
import SvgDessert_2 from '@/app/(svg)/dessert-2'
import SvgDessert_3 from '@/app/(svg)/dessert-3'
import styles from './header.module.scss'
import { useState } from 'react'

export const HeaderMenuVertical = () => {
  const [index, setIndex] = useState('1')

  const onchangeTab = (id: string) => {
    setIndex(id)
  }

  return (
    <div className={`${styles.menuVert}`}>
      <div className={styles.btn}>
        <SvgCategory />
        <span>All Categories</span>
        <SvgArrowDown />
      </div>

      <div className={styles.popup}>
        <div className={styles.popupInner}>
          <div className={styles.tabList}>
            <div
              className={`${styles.tabItem} ${index == '1' ? styles.active : ''}`}
              onClick={() => onchangeTab('1')}
            >
              <SvgDessert_1 />
              <span className={styles.tabItemText}>Dairy & Bakery</span>
            </div>
            <div
              className={`${styles.tabItem} ${index == '2' ? styles.active : ''}`}
              onClick={() => onchangeTab('2')}
            >
              <SvgDessert_2 />
              <span className={styles.tabItemText}>Fruits & Vegetable</span>
            </div>
            <div
              className={`${styles.tabItem} ${index == '3' ? styles.active : ''}`}
              onClick={() => onchangeTab('3')}
            >
              <SvgDessert_3 />
              <span className={styles.tabItemText}>Snack & Spice</span>
            </div>
            <div
              className={`${styles.tabItem} ${index == '4' ? styles.active : ''}`}
              onClick={() => onchangeTab('4')}
            >
              <SvgDessert_1 />
              <span className={styles.tabItemText}>Juice & Drinks</span>
            </div>
          </div>
          <div>
            {/* nav item */}
            <div
              className={`${styles.nav} ${index == '1' ? styles.active : ''}`}
            >
              <div className={styles.navInner}>
                <Link
                  href={'#'}
                  className={styles.navItem}
                >
                  Mango Juice
                </Link>
                <Link
                  href={'#'}
                  className={styles.navItem}
                >
                  Coconut Water
                </Link>
                <Link
                  href={'#'}
                  className={styles.navItem}
                >
                  Tetra Pack
                </Link>
                <Link
                  href={'#'}
                  className={styles.navItem}
                >
                  Apple Juices
                </Link>
                <Link
                  href={'#'}
                  className={styles.navItem}
                >
                  Lychee Juice
                </Link>
                <Link
                  href={'#'}
                  className={styles.navItem}
                >
                  Apple Juices
                </Link>
                <Link
                  href={'#'}
                  className={styles.navItem}
                >
                  Lychee Juice
                </Link>{' '}
                <Link
                  href={'#'}
                  className={styles.navItem}
                >
                  Mango Juice
                </Link>
                <Link
                  href={'#'}
                  className={styles.navItem}
                >
                  Coconut Water
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
