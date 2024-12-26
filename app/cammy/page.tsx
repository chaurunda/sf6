import { FC } from "react"
import cammyCombo from "../cammy.json"
import Svgloader from "../components/Svgloader"
import PageLayout from "../PageLayout/index"

const page: FC = () => {
  return (
    <>
      <PageLayout name="Cammy">
        <Svgloader combos={cammyCombo}></Svgloader>
      </PageLayout>
    </>
  )
}

export default page
