import { FC } from "react"
import PSVG from "../SVG/P.svg"
import { hitType } from "@/app/utils/types"

type PProps = {
  type?: hitType
}

const P: FC<PProps> = ({ type }) => {
  return <PSVG width={32} height={32} className={type} />
}

export default P
