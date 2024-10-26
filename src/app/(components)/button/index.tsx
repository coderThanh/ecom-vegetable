'use client'

import { HTMLAttributeAnchorTarget, MouseEventHandler, ReactElement } from 'react'

import React from 'react'
import SystemLink from '@/app/(components)/link/index'
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
  text?: string
  size?: SystemButtonSize
  isBlock?: boolean
  children?: ReactElement
  onClick?: MouseEventHandler<HTMLDivElement>
}

// HTMLDivElement
export default function SystemButton(props: SystemButtonProps) {
  return (
    <>
      <SystemLink
        className={classNames(
          'btn',
          props?.className,
          styles.wrap,
          styles[props.kind || 'default'],
          styles[props.color || 'primary'],
          styles[props.size || ''],
        )}
        url={props.url as any}
        target={props?.target}
        {...props}
      >
        <div
          className={classNames('btn-inner', styles.inner, {
            block: props.isBlock,
          })}
          onClick={(event) => props.onClick && props.onClick(event)}
        >
          {props.children}
          {props.text && (
            <span className={classNames(styles.textWrap, 'btn-title')}>
              {props.text}
            </span>
          )}
        </div>
      </SystemLink>
    </>
  )
}
