import { FC } from "react"

const QCB: FC = ({}) => {
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
        <title>Quarter Circle Left</title>
        <circle cx="13.74" cy="12" r="10" stroke-width=".5"></circle>
        <path d="m13.74,22c-5.52,0-10-4.48-10-10"></path>
        <polyline points="6.92 14.31 3.97 11.33 1 14.27"></polyline>
        <line x1="13.74" y1="16" x2="13.74" y2="22"></line>
      </svg>
    </div>
  )
}

export default QCB
