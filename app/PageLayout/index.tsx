"use client"
import Link from "next/link"
import { ReactElement } from "react"
import Notation from "../components/Notation/index"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

type LayoutProps = {
  name: string
  children: ReactElement
}

const PageLayout = ({ name, children }: LayoutProps) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Link href="/">← Home</Link>
      <h1 className="text-center text-2xl mb-10">{name} Combo list - SF6</h1>
      <Notation />
      {children}
    </QueryClientProvider>
  )
}

export default PageLayout
