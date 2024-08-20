import { FC } from "react"
import ComboBox from "./comboBox/ComboBox"
import SvgHandler from "./SvgHandler"
import { comboListType } from "../utils/types"

type SvgloaderProps = {
  combos: comboListType
}

const Svgloader: FC<SvgloaderProps> = ({ combos }) => {
  console.log(combos)
  return (
    <div>
      {combos.hit.map((combo, index) => {
        return (
          <div key={index}>
            <h2 className="mb-3 text-text-white">{combo.title}</h2>
            <div className="grid-cols-4 grid gap-2.5 mb-10">
              {combo.combos.map((list, comboIndex) => {
                return (
                  <ComboBox key={comboIndex}>
                    <SvgHandler list={list}></SvgHandler>
                  </ComboBox>
                )
              })}
            </div>
          </div>
        )
      })}
      {combos.source.length > 0 && (
        <>
          <h2>Sources :</h2>
          <ul>
            {combos.source.map((source, index) => (
              <li key={index}>
                <a href={source}>- {source}</a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default Svgloader
