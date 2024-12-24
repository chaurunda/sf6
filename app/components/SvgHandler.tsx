"use client"
import { FC, useState } from "react"
import { getSVG } from "../utils/getSVG"
import { combo } from "../utils/types"

type SvgHandlerProps = {
  list: combo
}

const SvgHandler: FC<SvgHandlerProps> = ({ list }) => {
  const { combo: comboString, comment } = list
  const comboArray = comboString.split(" ")

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button className="flex justify-center flex-wrap" onClick={() => setIsOpen(!isOpen)}>
        {comboArray.map((combo, index) => (
          <span key={index}>{getSVG(combo)}</span>
        ))}
      </button>
      {isOpen && comment && <p className="mt-4">{comment}</p>}
    </>
  )
}

export default SvgHandler
