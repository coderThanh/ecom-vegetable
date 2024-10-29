import * as React from 'react'
const SvgPlus = (props: any) => (
  <svg
    width="20px"
    height="20px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 12h7m7 0h-7m0 0V5m0 7v7"
    />
  </svg>
)
export default SvgPlus
