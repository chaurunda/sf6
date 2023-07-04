import "./styles/globals.css"
import "./styles/layout.css"
import { Roboto } from "next/font/google"

const roboto = Roboto({ weight: "500", style: "normal", subsets: ["latin"] })

export const metadata = {
  title: "Juri combo list",
  description: "A list of combo for Juri in Street Fighter 6",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
