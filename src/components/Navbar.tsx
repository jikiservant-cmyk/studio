"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Church, Menu, X, Heart, Calendar, PlayCircle, BookOpen, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Sermons", href: "/sermons", icon: PlayCircle },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Scripture AI", href: "/scripture-finder", icon: BookOpen },
  { name: "Give", href: "/donate", icon: Heart },
  { name: "Contact", href: "/contact", icon: Mail },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="bg-primary p-1.5 rounded-lg shadow-md group-hover:scale-110 transition-transform">
                <Church className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-headline text-2xl font-bold tracking-tight text-primary">Beacon</span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild variant="secondary" className="ml-4 font-bold shadow-sm">
                <Link href="/donate">Join Us</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-background border-b animate-in slide-in-from-top-4 duration-300">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium",
                  pathname === link.href
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                <link.icon className="h-5 w-5" />
                <span>{link.name}</span>
              </Link>
            ))}
            <div className="pt-4 px-3">
              <Button asChild className="w-full font-bold shadow-sm" variant="secondary">
                <Link href="/donate" onClick={() => setIsOpen(false)}>Give Now</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
