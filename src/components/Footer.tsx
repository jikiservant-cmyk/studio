import Link from "next/link"
import { Church, Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Church className="h-8 w-8 text-secondary" />
              <span className="font-headline text-3xl font-bold">Beacon</span>
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed font-body">
              Sharing the light of faith and community. Lighting the path together since 1995.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-secondary transition-colors"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-secondary transition-colors"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-secondary transition-colors"><Instagram className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-secondary transition-colors"><Youtube className="h-5 w-5" /></Link>
            </div>
          </div>

          <div>
            <h3 className="font-headline text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/sermons" className="hover:text-secondary transition-colors">Sermons</Link></li>
              <li><Link href="/events" className="hover:text-secondary transition-colors">Upcoming Events</Link></li>
              <li><Link href="/donate" className="hover:text-secondary transition-colors">Give Online</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Prayer Request</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-xl font-bold mb-4">Service Times</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Sunday Worship: 9:00 AM & 11:00 AM</li>
              <li>Sunday School: 10:15 AM</li>
              <li>Midweek Prayer: Wednesday 7:00 PM</li>
              <li>Youth Meeting: Friday 6:30 PM</li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary mt-1 shrink-0" />
                <span className="text-primary-foreground/80">123 Faith Lane, Grace City, GC 45678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span className="text-primary-foreground/80">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span className="text-primary-foreground/80">hello@beaconchurch.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Beacon Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
