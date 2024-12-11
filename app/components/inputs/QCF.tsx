import { FC } from "react"

const QCF: FC = ({}) => {
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
        <title>Quarter Circle Right</title>
        <circle cx="12" cy="12" r="10" stroke-width=".5"></circle>
        <path d="m12,22c5.52,0,10-4.48,10-10"></path>
        <polyline points="24.75 13.98 21.8 11 18.83 13.94"></polyline>
        <line x1="12" y1="16" x2="12" y2="22"></line>
      </svg>
    </div>
  )
}

export default QCF
