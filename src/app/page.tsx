import Link from "next/link"
import Image from "next/image"
import { MessageSquare, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/app/lib/placeholder-images"

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'community-gathering')

  return (
    <div className="flex flex-col w-full relative">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden flex items-center">
        <Image
          src={heroImg?.imageUrl || "https://picsum.photos/seed/community1/1200/800"}
          alt="NCF Church Community"
          fill
          className="object-cover"
          priority
          data-ai-hint="church community"
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl slide-up">
            <p className="text-[#D12E8B] text-lg md:text-xl font-bold tracking-[0.3em] mb-4 uppercase">
              Welcome To
            </p>
            <h1 className="text-white text-7xl md:text-[12rem] font-black leading-[0.85] mb-8 uppercase tracking-tighter">
              NCF<br />
              <span className="text-[#D12E8B]">CHURCH</span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <Button asChild size="lg" className="bg-[#D12E8B] text-white hover:bg-[#B12576] font-bold h-16 px-12 text-lg rounded-none transition-all hover:scale-105">
                <Link href="/contact">Visit Us Today</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#2D2B44] font-bold h-16 px-12 text-lg rounded-none transition-all">
                <Link href="/events" className="flex items-center">
                  Upcoming Events <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Chat Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-[#2D2B44] text-white flex items-center space-x-3 px-6 py-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group border-2 border-white/10">
          <div className="relative">
            <MessageSquare className="h-6 w-6 text-[#D12E8B]" />
            <div className="absolute -top-1 -right-1 bg-[#D12E8B] w-3 h-3 rounded-full border-2 border-[#2D2B44] animate-pulse" />
          </div>
          <span className="font-bold text-lg">Let's Chat!</span>
        </button>
      </div>

      {/* Introduction Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="fade-in">
              <h2 className="text-[#2D2B44] text-5xl md:text-6xl font-black mb-8 uppercase leading-none">
                Empowering lives through <span className="text-[#D12E8B]">faith and community</span>.
              </h2>
              <p className="text-muted-foreground text-xl mb-10 leading-relaxed font-body">
                We are a vibrant multi-generational church located in the heart of the community. 
                Our mission is to share the light of hope and provide a place where everyone 
                belongs and can grow in their spiritual journey.
              </p>
              <Button asChild variant="link" className="text-[#D12E8B] font-black text-xl p-0 h-auto hover:translate-x-2 transition-transform uppercase tracking-wider">
                <Link href="/sermons">Learn More About Us →</Link>
              </Button>
            </div>
            <div className="relative aspect-square rounded-none overflow-hidden shadow-2xl slide-up" style={{ animationDelay: '0.2s' }}>
              <Image 
                src="https://picsum.photos/seed/church-inside/800/800" 
                alt="Inside NCF Church" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                data-ai-hint="church interior"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            <Link href="/events" className="group">
              <div className="bg-white p-12 h-full border-r border-muted group-hover:bg-[#2D2B44] transition-all duration-500">
                <h3 className="text-3xl font-black text-[#2D2B44] group-hover:text-white mb-6 uppercase">Upcoming Events</h3>
                <p className="text-muted-foreground group-hover:text-white/70 mb-8 text-lg">Discover what's happening at NCF this month.</p>
                <span className="text-[#D12E8B] font-black text-lg group-hover:translate-x-2 transition-transform inline-block">VIEW CALENDAR →</span>
              </div>
            </Link>
            <Link href="/sermons" className="group">
              <div className="bg-white p-12 h-full border-r border-muted group-hover:bg-[#2D2B44] transition-all duration-500">
                <h3 className="text-3xl font-black text-[#2D2B44] group-hover:text-white mb-6 uppercase">Ministries</h3>
                <p className="text-muted-foreground group-hover:text-white/70 mb-8 text-lg">Find your place in our diverse ministry teams.</p>
                <span className="text-[#D12E8B] font-black text-lg group-hover:translate-x-2 transition-transform inline-block">EXPLORE MORE →</span>
              </div>
            </Link>
            <Link href="/donate" className="group">
              <div className="bg-white p-12 h-full group-hover:bg-[#2D2B44] transition-all duration-500">
                <h3 className="text-3xl font-black text-[#2D2B44] group-hover:text-white mb-6 uppercase">Give Online</h3>
                <p className="text-muted-foreground group-hover:text-white/70 mb-8 text-lg">Support our mission safely and securely.</p>
                <span className="text-[#D12E8B] font-black text-lg group-hover:translate-x-2 transition-transform inline-block">GIVE NOW →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}