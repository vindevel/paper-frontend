import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "논문한입",
  description: "AI를 활용한 논문 분석 서비스",
  generator: "YEP",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`font-sans antialiased bg-white`}>
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
