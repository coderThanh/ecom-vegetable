import * as React from 'react'
const SvgFilter = (props: any) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="filterIconTitle"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="square"
    fill="none"
    color="currentColor"
    {...props}
  >
    <path d="M10 12.261 4.028 3.972h16L14 12.329V17l-4 3z" />
  </svg>
)
export default SvgFilter
