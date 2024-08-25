import Image from "next/image"
import Svgloader from "./components/Svgloader"

export default function Home() {
  const characters = ["juri", "cammy"]
  return (
    <main>
      <h1 className="text-center text-2xl mb-10">Street Fighter Combo list</h1>
      <ul className="flex justify-center flex-col lg:flex-row">
        {characters.map((character) => (
          <li key={character}>
            <a
              className={`bg-[url('/${character}.png')] w-[575px] h-[625px] block hover:bg-[url('/${character}_over.png')]`}
              href={`/${character}`}
            ></a>
          </li>
        ))}
      </ul>
    </main>
  )
}
