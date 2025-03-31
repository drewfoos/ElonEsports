// app/layout.tsx
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/modules/header/ui/header"
import { Footer } from "@/modules/footer/ui/components/footer"

// Initialize the Inter font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}