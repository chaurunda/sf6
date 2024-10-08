import { FC } from "react"
import cammyCombo from "../cammy.json"
import Svgloader from "../components/Svgloader"

const page: FC = () => {
  return (
    <>
      <h1 className="text-center text-2xl mb-10">Cammy Combo list - SF6</h1>
      <Svgloader combos={cammyCombo}></Svgloader>
    </>
  )
}

export default page
