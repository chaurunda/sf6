import Link from "next/link"

export default function Home() {
  const characters = [
    "aki",
    "akuma",
    "blanka",
    "cammy",
    "chunli",
    "deejay",
    "dhalsim",
    "ed",
    "ehonda",
    "guile",
    "jamie",
    "jp",
    "juri",
    "ken",
    "kimberly",
    "lily",
    "luke",
    "mai",
    "mbison",
    "manon",
    "marisa",
    "rashid",
    "ryu",
    "terry",
    "zangief",
  ]
  const background: { [key: string]: string } = {
    aki: "bg-[url('/aki.png')] hover:bg-[url('/aki_over.png')]",
    akuma: "bg-[url('/akuma.png')] hover:bg-[url('/akuma_over.png')]",
    blanka: "bg-[url('/blanka.png')] hover:bg-[url('/blanka_over.png')]",
    cammy: "bg-[url('/cammy.png')] hover:bg-[url('/cammy_over.png')]",
    chunli: "bg-[url('/chunli.png')] hover:bg-[url('/chunli_over.png')]",
    deejay: "bg-[url('/deejay.png')] hover:bg-[url('/deejay_over.png')]",
    dhalsim: "bg-[url('/dhalsim.png')] hover:bg-[url('/dhalsim_over.png')]",
    ed: "bg-[url('/ed.png')] hover:bg-[url('/ed_over.png')]",
    ehonda: "bg-[url('/ehonda.png')] hover:bg-[url('/ehonda_over.png')]",
    guile: "bg-[url('/guile.png')] hover:bg-[url('/guile_over.png')]",
    jamie: "bg-[url('/jamie.png')] hover:bg-[url('/jamie_over.png')]",
    jp: "bg-[url('/jp.png')] hover:bg-[url('/jp_over.png')]",
    juri: "bg-[url('/juri.png')] hover:bg-[url('/juri_over.png')]",
    ken: "bg-[url('/ken.png')] hover:bg-[url('/ken_over.png')]",
    kimberly: "bg-[url('/kimberly.png')] hover:bg-[url('/kimberly_over.png')]",
    lily: "bg-[url('/lily.png')] hover:bg-[url('/lily_over.png')]",
    luke: "bg-[url('/luke.png')] hover:bg-[url('/luke_over.png')]",
    mai: "bg-[url('/mai.png')] hover:bg-[url('/mai_over.png')]",
    mbison: "bg-[url('/mbison.png')] hover:bg-[url('/mbison_over.png')]",
    manon: "bg-[url('/manon.png')] hover:bg-[url('/manon_over.png')]",
    marisa: "bg-[url('/marisa.png')] hover:bg-[url('/marisa_over.png')]",
    rashid: "bg-[url('/rashid.png')] hover:bg-[url('/rashid_over.png')]",
    ryu: "bg-[url('/ryu.png')] hover:bg-[url('/ryu_over.png')]",
    terry: "bg-[url('/terry.png')] hover:bg-[url('/terry_over.png')]",
    zangief: "bg-[url('/zangief.png')] hover:bg-[url('/zangief_over.png')]",
  }
  return (
    <main>
      <h1 className="text-center text-2xl mb-10">Street Fighter Combo list</h1>
      <p className="mb-10">
        {/* <Link href="/add" className="border-neutral-100 border rounded p-2">
          Add new Combo
        </Link> */}
      </p>

      <ul className="grid-cols-2 grid md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
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
