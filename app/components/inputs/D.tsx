import { FC } from "react"

const D: FC = ({}) => {
  return (
    <div className="text-white fill-current">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img">
        <title>Down</title>
        <line
          x1="12"
          y1="5"
          x2="12"
          y2="19"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        ></line>
        <polyline
          points="17 14 12 19 7 14"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        ></polyline>
      </svg>
    </div>
  )
}

export default D
