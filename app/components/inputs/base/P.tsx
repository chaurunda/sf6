import { FC } from "react"
import { hitType } from "@/app/utils/types"

type PProps = {
  type?: hitType
}

const P: FC<PProps> = ({ type }) => {
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
        <title>P</title>
        <path d="m12,3C7.04,3,3,7.04,3,12s4.04,9,9,9,9-4.04,9-9S16.96,3,12,3Zm4.45,8.73c-.29.52-.71.92-1.25,1.21-.53.29-1.16.43-1.87.43h-2.42v4.41h-2.14V6.42h4.56c.72,0,1.34.14,1.88.43.53.29.95.69,1.24,1.21.3.53.45,1.14.45,1.84s-.15,1.31-.45,1.83Z"></path>
        <path d="m14.68,9.9c0,.42-.12.76-.36,1.02s-.55.39-.94.39h-2.47v-2.83h2.47c.39,0,.71.13.94.39.24.25.36.6.36,1.03Z"></path>
      </svg>
    </div>
  )
}

export default P
