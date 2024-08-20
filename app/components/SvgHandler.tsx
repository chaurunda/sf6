import { FC } from "react"
import { getSVG } from "../utils/getSVG"

type SvgHandlerProps = {
  list: string
}

const SvgHandler: FC<SvgHandlerProps> = async ({ list }) => {
  const comboArray = list.split(" ")

  return (
    <>
      {comboArray.map((combo, index) => (
        <span key={index}>{getSVG(combo)}</span>
      ))}
    </>
  )
}

export default SvgHandler
