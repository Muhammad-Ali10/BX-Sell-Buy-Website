import "./globals.css"
import { Sora } from "next/font/google"

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata = {
  title: "EX - Buy & Sell Companies",
  description: "The #1 platform for buying & selling companies",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sora.className} font-sora`} suppressHydrationWarning>
        <main>{children}</main>
      </body>
    </html>
  )
}
