import { FC } from "react"

const HCB: FC = ({}) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="24"
        viewBox="0 0 28 24"
        fill="none"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        role="img"
      >
        <title>Half Circle Left</title>
        <circle cx="13.74" cy="12" r="10" stroke-width=".5"></circle>
        <path d="m3.74,12c0,5.52,4.48,10,10,10s10-4.48,10-10"></path>
        <polyline points="6.92 14.31 3.97 11.33 1 14.27"></polyline>
        <line x1="23.74" y1="12" x2="17.74" y2="12"></line>
      </svg>
    </div>
  )
}

export default HCB
