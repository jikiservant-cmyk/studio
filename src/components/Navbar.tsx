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
  { name: "Donate", href: "/donate" },
  { name: "Visit Us", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <header className="w-full z-50 sticky top-0">
      {/* Pink Top Bar */}
      <div className="h-2 w-full bg-[#D12E8B]" />
      
      <nav className="bg-[#2D2B44] text-white shadow-xl">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex h-24 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex flex-col items-start group">
              <span className="text-3xl font-black uppercase tracking-tighter leading-[0.8] group-hover:text-[#D12E8B] transition-colors">
                NCF<br />CHURCH
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-black uppercase tracking-widest transition-all hover:text-[#D12E8B] relative py-2",
                    pathname === link.href ? "text-[#D12E8B]" : "text-white"
                  )}
                >
                  {link.name}
                  {pathname === link.href && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D12E8B]" />
                  )}
                </Link>
              ))}
              <button className="p-2 hover:text-[#D12E8B] transition-colors">
                <Search className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                className="p-2 text-[#D12E8B]"
              >
                {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Links */}
        {isOpen && (
          <div className="md:hidden bg-[#2D2B44] border-t border-white/10 px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "block text-2xl font-black uppercase tracking-widest",
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