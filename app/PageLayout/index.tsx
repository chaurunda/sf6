import Link from "next/link"
import { ReactElement } from "react"
import Notation from "../components/Notation/index"

type LayoutProps = {
  name: string
  children: ReactElement
}

const PageLayout = ({ name, children }: LayoutProps) => {
  return (
    <>
      <Link href="/">← Home</Link>
      <h1 className="text-center text-2xl mb-10">{name} Combo list - SF6</h1>
      <Notation />
      {children}
    </>
  )
}

export default PageLayout
