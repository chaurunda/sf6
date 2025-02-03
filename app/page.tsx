export default function Home() {
  const characters = ["juri", "cammy"]
  const background: { [key: string]: string } = {
    juri: "bg-[url('/juri.png')] hover:bg-[url('/juri_over.png')]",
    cammy: "bg-[url('/cammy.png')] hover:bg-[url('/cammy_over.png')]",
  }
  return (
    <main>
      <h1 className="text-center text-2xl mb-10">Street Fighter Combo list</h1>
      <p className="mb-10">
        <a href="/add" className="border-neutral-100 border rounded p-2">
          Add new Combo
        </a>
      </p>

      <ul className="grid-cols-2 grid lg:grid-cols-4">
        {characters.map((character) => (
          <li className="pb-5" key={character}>
            <a
              className={`${background[character]} w-[192px] h-[208px] block bg-cover`}
              href={`/${character}`}
            ></a>
          </li>
        ))}
      </ul>
    </main>
  )
}
