"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
// Import everything except SheetContent which we'll customize
import {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetTitle
} from "@/components/ui/sheet"
// Add our custom SheetContent that supports hideCloseButton
import { SheetContent } from "./components/sheet-custom"
import Image from "next/image"

// Navigation items abstracted to avoid repetition
const navigationItems = [
  { name: "HOME", path: "/" },
  { name: "TEAMS", path: "/teams" },
  { name: "PLAYERS", path: "/players" },
  { name: "MATCHES", path: "/matches" },
  { name: "ABOUT", path: "/about" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  // Check if we're at the top of the page
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  // Solid white header with border bottom
  const headerBackgroundClass = "bg-white border-b border-gray-200";

  // Updated nav link class - using gold for active and hover states
  const navLinkClass = (isActive: boolean) => {
    return cn(
      "relative px-4 py-2 text-sm font-bold tracking-wide transition-colors group",
      isActive ? "text-elon-gold" : "text-gray-800 hover:text-elon-gold"
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main header */}
      <div className={cn(
        "w-full h-16 transition-all duration-300",
        headerBackgroundClass
      )}>
        <div className="h-full container mx-auto px-6 flex items-center justify-between">
          {/* Logo with ElonEsports text - clickable to home */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <Image 
              src="/logo.svg"
              alt="logo"
              width={40}
              height={40}
            />
            <span className="font-bold text-xl">
              <span className="text-elon-maroon">Elon</span>
              <span className="text-elon-gold">Esports</span>
            </span>
          </Link>
          
          {/* Desktop Nav - Now on the right side */}
          <div className="flex items-center">
            <nav className="hidden md:flex items-center gap-1">
              {navigationItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.path}
                  className={navLinkClass(pathname === item.path)}
                >
                  {item.name}
                  {pathname === item.path && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-elon-gold"></span>
                  )}
                  {pathname !== item.path && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-elon-gold group-hover:w-4/5 transition-all duration-300"></span>
                  )}
                </Link>
              ))}
            </nav>
            
            {/* Mobile Menu Button - Only visible on mobile */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden border rounded-md border-gray-300 hover:bg-gray-100 text-gray-800"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                hideCloseButton
                className="border-l border-gray-200 bg-white p-0"
              >
                {/* Adding SheetTitle for accessibility */}
                <SheetTitle className="sr-only">
                  Navigation Menu
                </SheetTitle>
                
                <div className="flex items-center justify-between h-16 px-6">
                  {/* Logo with ElonEsports text in mobile menu - clickable to home */}
                  <SheetClose asChild>
                    <Link href="/" className="flex items-center gap-2 cursor-pointer">
                      <Image 
                        src="/logo.svg"
                        alt="logo"
                        width={28}
                        height={28}
                      />
                      <span className="text-elon-gold font-bold text-lg">ElonEsports</span>
                    </Link>
                  </SheetClose>
                  
                  {/* Only one close button here */}
                  <SheetClose className="rounded-md p-1 hover:bg-gray-100 cursor-pointer">
                    <X className="h-5 w-5 text-gray-800" />
                    <span className="sr-only">Close menu</span>
                  </SheetClose>
                </div>
                
                {/* Mobile navigation */}
                <nav className="flex flex-col px-2 py-4">
                  {navigationItems.map((item) => (
                    <SheetClose asChild key={item.name}>
                      <Link
                        href={item.path}
                        className={cn(
                          "py-3 px-4 my-1 text-base font-bold tracking-wide rounded-md transition-colors",
                          pathname === item.path 
                            ? "bg-gray-100 text-elon-gold border-l-2 border-elon-gold" 
                            : "text-gray-800 hover:bg-gray-50 hover:text-elon-gold"
                        )}
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}