import { FC } from "react"
import KSVG from "../SVG/K.svg"
import { hitType } from "@/app/utils/types"

type kProps = {
  type?: hitType
}

const K: FC<kProps> = ({ type }) => {
  return <KSVG className={type} />
}

export default K
