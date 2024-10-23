import * as React from 'react'
const SvgBag = (props: any) => (
 <svg
    width="30px"
    height="30px"
    viewBox="0 0 3 3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 1V0.875a0.5 0.5 0 0 1 0.5 -0.5v0a0.5 0.5 0 0 1 0.5 0.5v0.125"
      stroke="currentColor"
      strokeWidth={0.18}
      strokeLinecap="round"
    />
    <path
      d="M1.875 1.75v-0.25"
      stroke="currentColor"
      strokeWidth={0.18}
      strokeLinecap="round"
    />
    <path
      d="M1.125 1.75v-0.25"
      stroke="currentColor"
      strokeWidth={0.18}
      strokeLinecap="round"
    />
    <path
      d="M0.5 1.5c0 -0.236 0 -0.353 0.073 -0.427S0.764 1 1 1h1c0.236 0 0.353 0 0.427 0.073S2.5 1.264 2.5 1.5v0.125c0 0.471 0 0.707 -0.146 0.854S1.971 2.625 1.5 2.625s-0.707 0 -0.854 -0.146S0.5 2.096 0.5 1.625z"
      stroke="currentColor"
      strokeWidth={0.18}
    />
  </svg>
)
export default SvgBag
