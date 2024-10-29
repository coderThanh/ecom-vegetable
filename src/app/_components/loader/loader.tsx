import React from 'react'

type LoaderProps = {
  className?: string
  loaderClassName?: string
}
export const Loader = (props: LoaderProps) => {
  return (
    <span className={props?.className}>
      <span className={`loader ${props?.loaderClassName}`}></span>
    </span>
  )
}
