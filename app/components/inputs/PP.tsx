import { FC } from "react"
import PPSVG from "./SVG/PP.svg"

type PPProps = {}

const PP: FC<PPProps> = ({}) => {
  return <PPSVG width={32} height={32} className="white" />
}

export default PP
