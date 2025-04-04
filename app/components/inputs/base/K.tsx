import { FC } from "react"
import { hitType } from "@/app/utils/types"

type kProps = {
  type?: hitType
}

const K: FC<kProps> = ({ type }) => {
  return (
    <div className={type}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        role="img"
      >
        <title>K</title>
        <path d="m12,3C7.04,3,3,7.04,3,12s4.04,9,9,9,9-4.04,9-9S16.96,3,12,3Zm2.59,14.78l-2.7-4.73-1.63,2.26v2.47h-2.14V6.42h2.14v5.63l3.7-5.63h2.7l-3.38,4.69,3.85,6.67h-2.54Z"></path>
      </svg>
    </div>
  )
}

export default K
