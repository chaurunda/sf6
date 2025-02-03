import { FC } from "react"
import ComboBox from "./comboBox/ComboBox"
import SvgHandler from "./SvgHandler"
import { comboListType } from "@/types"

type SvgloaderProps = {
  combos: comboListType
}

const Svgloader: FC<SvgloaderProps> = ({ combos }) => {
  return (
    <div>
      {combos.hit.map((combo, index) => {
        return (
          <div key={index}>
            <h2 className="mb-3 text-text-white">{combo.title}</h2>
            <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid gap-2.5 mb-10">
              {combo.combos.map((list, comboIndex) => (
                <ComboBox key={comboIndex}>
                  <SvgHandler list={list}></SvgHandler>
                </ComboBox>
              ))}
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
                <a href={source} className="text-wrap break-words" target="_blank">
                  - {source}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default Svgloader
