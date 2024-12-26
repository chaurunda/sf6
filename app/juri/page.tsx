import { FC } from "react"
import Svgloader from "../components/Svgloader"
import juriCombo from "../juri.json"
import PageLayout from "../PageLayout/index"

const juri: FC = () => {
  return (
    <>
      <PageLayout name="Juri">
        <Svgloader combos={juriCombo}></Svgloader>
      </PageLayout>
    </>
  )
}

export default juri
