import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#2D2B44] text-white py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-3xl font-black uppercase tracking-tighter">NCF<br />CHURCH</span>
            </Link>
            <p className="text-white/70 leading-relaxed">
              Lighting the path together since 1995. A community dedicated to faith, hope, and love.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="hover:text-[#D12E8B] transition-colors"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-[#D12E8B] transition-colors"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-[#D12E8B] transition-colors"><Instagram className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-[#D12E8B] transition-colors"><Youtube className="h-5 w-5" /></Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-black mb-6 uppercase text-[#D12E8B]">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="hover:text-[#D12E8B] transition-colors">About Us</Link></li>
              <li><Link href="/events" className="hover:text-[#D12E8B] transition-colors">Events</Link></li>
              <li><Link href="/sermons" className="hover:text-[#D12E8B] transition-colors">Ministries</Link></li>
              <li><Link href="/donate" className="hover:text-[#D12E8B] transition-colors">Donate</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-black mb-6 uppercase text-[#D12E8B]">Worship Times</h3>
            <ul className="space-y-4 text-white/70">
              <li>Sunday Contemporary: 9:00 AM</li>
              <li>Sunday Traditional: 11:00 AM</li>
              <li>Wednesday Prayer: 7:00 PM</li>
              <li>Youth Night: Friday 6:30 PM</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-black mb-6 uppercase text-[#D12E8B]">Contact Info</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#D12E8B] mt-1 shrink-0" />
                <span className="text-white/70">123 Faith Lane, Grace City, GC 45678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#D12E8B] shrink-0" />
                <span className="text-white/70">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#D12E8B] shrink-0" />
                <span className="text-white/70">hello@ncfchurch.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 text-center text-sm text-white/40">
          <p>© {new Date().getFullYear()} NCF Church. Built with heart.</p>
        </div>
      </div>
    </footer>
  )
}
