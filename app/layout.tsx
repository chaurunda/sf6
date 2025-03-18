import Providers from "./provider"
import "./styles/globals.css"
import "./styles/layout.css"
import { Roboto } from "next/font/google"

const roboto = Roboto({ weight: "300", style: "normal", subsets: ["latin"] })

export const metadata = {
  title: "Street fighter combo list",
  description: "A list of combo in Street Fighter 6",
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="min-h-screen p-4 md:p-10 lg:p-24">
          <Providers>{children}</Providers>
        </div>

        <p className="text-center underline mb-8">
          <a href="https://github.com/chaurunda">Made by Chaurunda</a>
        </p>
      </body>
    </html>
  )
}
