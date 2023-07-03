import { FC } from "react"
import ComboBox from "./comboBox/ComboBox"
import combos from "../moveset.json"
import SvgHandler from "./SvgHandler"

type SvgloaderProps = {}

const Svgloader: FC<SvgloaderProps> = () => {
  return (
    <div>
      {combos.hit.map((combo, index) => {
        return (
          <>
            <h2 className="mb-3 text-text-white">{combo.title}</h2>
            <div className="grid-cols-4 grid gap-2.5 mb-10">
              {combo.combos.map((list) => {
                return (
                  <>
                    <ComboBox>
                      <SvgHandler list={list}></SvgHandler>
                    </ComboBox>
                  </>
                )
              })}
            </div>
          </>
        )
      })}
    </div>
  )
}

export default Svgloader
