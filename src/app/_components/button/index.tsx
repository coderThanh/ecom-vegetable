'use client'

import {
  HTMLAttributeAnchorTarget,
  MouseEventHandler,
  ReactElement,
} from 'react'

import React from 'react'
import SystemLink from '@/app/_components/link/index'
import classNames from 'classnames'
import styles from './button.module.scss'

export enum SystemButtonKind {
  text = 'text',
  outline = 'outline',
  default = 'default',
}

export enum SystemButtonColor {
  primary = 'primary',
  primaryTransparemt = 'primaryTransparemt',
  white = 'white',
  whiteTransparent = 'whiteTransparent',
  dark = 'dark',
  darkTransparent = 'darkTransparent',
  error = 'error',
  errorTransparent = 'errorTransparent',
  tertiary = 'tertiary',
  secondary = 'secondary',
}

export enum SystemButtonSize {
  default = 'default',
  small = 'small',
}

export type SystemButtonProps = {
  kind?: SystemButtonKind
  color?: SystemButtonColor
  url?: string
  target?: HTMLAttributeAnchorTarget
  className?: string
  classText?: string
  text?: string
  size?: SystemButtonSize
  isBlock?: boolean
  children?: ReactElement
  onClick?: MouseEventHandler<HTMLDivElement>
}

// HTMLDivElement
export default function SystemButton({
  kind,
  color,
  url,
  target,
  className,
  classText,
  text,
  size,
  isBlock,
  children,
  onClick,
}: SystemButtonProps) {
  return (
    <>
      <SystemLink
        className={classNames(
          'btn',
          className,
          styles.wrap,
          styles[kind || 'default'],
          styles[color || 'primary'],
          styles[size || ''],
        )}
        url={url as any}
        target={target}
      >
        <div
          className={classNames('btn-inner', styles.inner, {
            block: isBlock,
          })}
          onClick={(event) => onClick && onClick(event)}
        >
          {children}
          {text && (
            <span className={classNames(styles.textWrap, 'btn-title', classText)}>
              {text}
            </span>
          )}
        </div>
      </SystemLink>
    </>
  )
}
