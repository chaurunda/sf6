export default function Home() {
  const characters = ["juri", "cammy"]
  const background: { [key: string]: string } = {
    juri: "bg-[url('/juri.png')] hover:bg-[url('/juri_over.png')]",
    cammy: "bg-[url('/cammy.png')] hover:bg-[url('/cammy_over.png')]",
  }
  return (
    <main>
      <h1 className="text-center text-2xl mb-10">Street Fighter Combo list</h1>
      <ul className="flex justify-center flex-col lg:flex-row">
        {characters.map((character) => (
          <li key={character}>
            <a
              className={`${background[character]} w-[575px] h-[625px] block`}
              href={`/${character}`}
            ></a>
          </li>
        ))}
      </ul>
    </main>
  )
}
