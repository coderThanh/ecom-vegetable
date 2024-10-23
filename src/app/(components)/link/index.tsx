import { CSSProperties, HTMLAttributeAnchorTarget, ReactNode } from 'react'

import Link from 'next/link'
import React from 'react'
import { Route } from 'next'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement| HTMLDivElement> {
  url?: Route | null
  className?: string
  target?: HTMLAttributeAnchorTarget
  rel?: string
  children?: ReactNode
  title?: string
  style?: CSSProperties
}
export default function SystemLink({
  url,
  className = '',
  target,
  rel,
  children,
  title,
  style,
  ...args
}: Props) {
  return (
    <>
      {url && (
        <Link
          className={className}
          href={url}
          rel={rel}
          style={style}
          target={target}
          title={title}
          {...args}
        >
          {children}
        </Link>
      )}
      {!url && (
        <div
          className={className}
          style={style}
          {...args}
        >
          {children}
        </div>
      )}
    </>
  )
}
