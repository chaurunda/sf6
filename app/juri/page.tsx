import { FC } from "react"
import Svgloader from "../components/Svgloader"
import juriCombo from "../juri.json"

type juriProps = {}

const juri: FC<juriProps> = () => {
  return (
    <>
      <h1 className="text-center text-2xl mb-10">Juri Combo list - SF6</h1>
      <Svgloader combos={juriCombo}></Svgloader>
    </>
  )
}

export default juri