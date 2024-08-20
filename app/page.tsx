import Image from "next/image"
import Svgloader from "./components/Svgloader"

export default function Home() {
  return (
    <main>
      <h1 className="text-center text-2xl mb-10">Street Fighter Combo list</h1>
      <ul className="flex">
        <li>
          <a
            className="bg-[url('/juri.png')] w-[575px] h-[625px] block hover:bg-[url('/juri_over.png')]"
            href="/juri"
          ></a>
        </li>
        <li>
          <a
            className="bg-[url('/cammy.png')] w-[575px] h-[625px] block hover:bg-[url('/cammy_over.png')]"
            href="cammy"
          ></a>
        </li>
      </ul>
    </main>
  )
}
