import { FC } from "react"
import cammyCombo from "../cammy.json"
import Svgloader from "../components/Svgloader"
import Link from "next/link"

const page: FC = () => {
  return (
    <>
      <Link href="/">← Home</Link>
      <h1 className="text-center text-2xl mb-10">Cammy Combo list - SF6</h1>
      <Svgloader combos={cammyCombo}></Svgloader>
    </>
  )
}

export default page
