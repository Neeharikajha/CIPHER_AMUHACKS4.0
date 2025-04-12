import React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { SidebarProvider } from "@/components/dashboard/SidebarProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Finance Dashboard",
  description: "Track your savings and financial growth",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
          <SidebarProvider>{children}</SidebarProvider>

      </body>
    </html>
  )
}
