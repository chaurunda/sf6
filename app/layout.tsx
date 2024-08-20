import "./styles/globals.css"
import "./styles/layout.css"
import { Roboto } from "next/font/google"

const roboto = Roboto({ weight: "500", style: "normal", subsets: ["latin"] })

export const metadata = {
  title: "Street fighter combo list",
  description: "A list of combo in Street Fighter 6",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="min-h-screen p-24">{children}</div>

        <p className="text-center underline mb-8">
          <a href="https://github.com/chaurunda">Made by Chaurunda</a>
        </p>
      </body>
    </html>
  )
}
