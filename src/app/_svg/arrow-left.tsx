import * as React from 'react'
const SvgArrowLeft = (props: any) => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
    <path
      d="M31 36 19 24l12-12"
      stroke="currentColor"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default SvgArrowLeft
