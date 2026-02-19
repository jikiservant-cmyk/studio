"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Search } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "About Us", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Our Ministries", href: "/sermons" },
  { name: "Podcast", href: "#" },
  { name: "Donate", href: "/donate" },
  { name: "Visit Us", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <header className="w-full z-50">
      {/* Pink Top Bar */}
      <div className="h-2 w-full bg-[#D12E8B]" />
      
      <nav className="bg-[#2D2B44] text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex h-24 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative h-12 w-12 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
                  <path d="M7 13c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V9a2 2 0 0 0-2-2h-2V5a1 1 0 0 0-2 0v2H9a2 2 0 0 0-2 2v4z" />
                  <path d="M12 17v3" />
                  <path d="M12 3v1" />
                  <path d="M7 21h10" />
                  <circle cx="12" cy="12" r="10" strokeOpacity="0.2" />
                </svg>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium tracking-wide transition-colors hover:text-[#D12E8B]",
                    pathname === link.href ? "text-[#D12E8B]" : "text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <button className="p-2 hover:text-[#D12E8B] transition-colors">
                <Search className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
               <button className="p-2">
                <Search className="h-5 w-5" />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                className="p-2"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Links */}
        {isOpen && (
          <div className="md:hidden bg-[#2D2B44] border-t border-white/10 px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "block text-lg font-medium",
                  pathname === link.href ? "text-[#D12E8B]" : "text-white"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
