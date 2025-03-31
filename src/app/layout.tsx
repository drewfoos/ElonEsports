// app/layout.tsx
import "./globals.css"
import { Header } from "@/modules/header/ui/header"
import { Footer } from "@/modules/footer/ui/components/footer"

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