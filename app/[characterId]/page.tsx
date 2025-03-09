"use client"
import Svgloader from "../components/Svgloader"
import PageLayout from "../PageLayout/index"
import { useQuery } from "@tanstack/react-query"
import { getCharacterData } from "../utils/queries"
import { comboListType } from "@/types"
import { useParams } from "next/navigation"

const Page = () => {
  const router = useParams()

  const combo = useQuery({
    queryKey: ["todos"],
    queryFn: () => getCharacterData(router ? (router.characterId as string) : ""),
  })

  console.log(combo.data)
  return (
    <>
      <PageLayout name="Cammy">
        <>
          {!combo.data && <p>Loading</p>}
          {combo.data && <Svgloader combos={combo.data}></Svgloader>}
        </>
      </PageLayout>
    </>
  )
}

export default Page
