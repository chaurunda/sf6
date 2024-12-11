import { FC } from "react"

const F: FC = ({}) => {
  return (
    <div className="text-white fill-current">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img">
        <title>Right</title>
        <line
          x1="5"
          y1="12"
          x2="19"
          y2="12"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        ></line>
        <polyline
          points="14 7 19 12 14 17"
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

export default F
