import { useCallback, useEffect, useRef } from 'react'

import React from 'react'

export const useHeaderSticky = () => {
  const [headerHeight, setHeaderHeight] = React.useState<number | undefined>(
    undefined,
  )

  const offsetToSticky = useRef<null | number>(null)

  const [isSticky, setSticky] = React.useState(false)

  const headerRef = useRef<HTMLDivElement>(null)

  const handleHeaderHeight = useCallback(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current?.clientHeight)
    }
  }, [])

  const handleStickyOffset = useCallback(() => {
    const firstStikcy = headerRef.current?.querySelector('.is-sticky')

    var offsetElement = firstStikcy?.getBoundingClientRect()

    const scrollTop = window.scrollY || document.documentElement.scrollTop

    if (offsetElement?.top != undefined) {
      offsetToSticky.current = offsetElement?.top + scrollTop

      return
    }

    offsetToSticky.current = null
  }, [])

  const handleOnScroll = useCallback(() => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop

    if (
      offsetToSticky?.current != null &&
      scrollTop >= offsetToSticky.current
    ) {
      setSticky(true)

      return
    }

    setSticky(false)
  }, [offsetToSticky.current])

  useEffect(() => {
    handleHeaderHeight()
    handleStickyOffset()

    window.addEventListener('resize', handleHeaderHeight)
    window.addEventListener('resize', handleStickyOffset)
    document.addEventListener('scroll', handleOnScroll)

    return () => {
      window.removeEventListener('resize', handleHeaderHeight)
      window.removeEventListener('resize', handleStickyOffset)
      document.removeEventListener('scroll', handleOnScroll)
    }
  }, [])

  return {
    headerHeight,
    headerRef,
    isSticky,
  }
}
