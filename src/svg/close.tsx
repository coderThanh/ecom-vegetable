import * as React from 'react'
const SvgClose = (props: any) => (
  <svg
    width="20px"
    height="20px"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 8L40 40"
      stroke="currentColor"
      strokeWidth={6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 40L40 8"
      stroke="currentColor"
      strokeWidth={6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default SvgClose
