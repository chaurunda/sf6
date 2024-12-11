import { FC } from "react"

const HCF: FC = ({}) => {
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
        <title>Half Circle Right</title>
        <circle cx="13.74" cy="12" r="10" stroke-width=".5"></circle>
        <path d="m3.74,12c0,5.52,4.48,10,10,10s10-4.48,10-10"></path>
        <polyline points="26.49 13.98 23.54 11 20.57 13.94"></polyline>
        <line x1="9.74" y1="12" x2="3.74" y2="12"></line>
      </svg>
    </div>
  )
}

export default HCF
