import Svgloader from "./components/Svgloader"

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <h1 className="text-center text-2xl mb-10">Juri Combo list - SF6</h1>
      <Svgloader></Svgloader>

      <p className="text-center underline ">
        <a href="https://github.com/chaurunda">Made by Chaurunda</a>
      </p>
    </main>
  )
}
