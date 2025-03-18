import { FC } from "react"

const B: FC = ({}) => {
  return (
    <div className="text-white co-text-white fill-current">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        role="img"
      >
        <title>Left</title>
        <line
          x1="19"
          y1="12"
          x2="5"
          y2="12"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></line>
        <polyline
          points="10 17 5 12 10 7"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></polyline>
      </svg>
    </div>
  )
}

export default B
