import { FC } from "react"

const U: FC = ({}) => {
  return (
    <div className="text-white fill-current">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img">
        <title>Up</title>
        <line
          x1="12"
          y1="19"
          x2="12"
          y2="5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></line>
        <polyline
          points="7 10 12 5 17 10"
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

export default U
