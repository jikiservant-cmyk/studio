import Link from "next/link"
import Image from "next/image"
import { MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/app/lib/placeholder-images"

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'community-gathering')

  return (
    <div className="flex flex-col w-full relative">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden flex items-center">
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
          <div className="max-w-2xl slide-up">
            <h2 className="text-white text-xl md:text-2xl font-bold tracking-[0.2em] mb-4 uppercase">
              Welcome To
            </h2>
            <h1 className="text-white text-6xl md:text-9xl font-black leading-none mb-8 uppercase tracking-tighter">
              NCF<br />CHURCH
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#D12E8B] text-white hover:bg-[#B12576] font-bold h-14 px-10">
                <Link href="/contact">Visit Us Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Chat Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-[#2D2B44] text-white flex items-center space-x-3 px-6 py-4 rounded-lg shadow-2xl hover:scale-105 transition-transform group">
          <MessageSquare className="h-5 w-5 text-[#D12E8B]" />
          <span className="font-bold">Let's Chat!</span>
          <div className="absolute -top-1 -right-1 bg-[#D12E8B] w-4 h-4 rounded-full border-2 border-[#2D2B44]" />
        </button>
      </div>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in">
              <h2 className="text-[#2D2B44] text-4xl md:text-5xl font-black mb-6 uppercase leading-tight">
                Empowering lives through <span className="text-[#D12E8B]">faith and community</span>.
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We are a vibrant multi-generational church located in the heart of the community. 
                Our mission is to share the light of hope and provide a place where everyone 
                belongs and can grow in their spiritual journey.
              </p>
              <Button asChild variant="outline" className="border-[#2D2B44] text-[#2D2B44] hover:bg-[#2D2B44] hover:text-white font-bold h-12">
                <Link href="/sermons">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl slide-up" style={{ animationDelay: '0.2s' }}>
              <Image 
                src="https://picsum.photos/seed/church-inside/800/600" 
                alt="Inside NCF Church" 
                fill 
                className="object-cover"
                data-ai-hint="church interior"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/events" className="group">
              <div className="bg-white p-10 h-full border-b-4 border-transparent group-hover:border-[#D12E8B] transition-all shadow-sm hover:shadow-xl">
                <h3 className="text-2xl font-black text-[#2D2B44] mb-4 uppercase">Upcoming Events</h3>
                <p className="text-muted-foreground mb-4">Discover what's happening at NCF this month.</p>
                <span className="text-[#D12E8B] font-bold group-hover:translate-x-2 transition-transform inline-block">View Calendar →</span>
              </div>
            </Link>
            <Link href="/sermons" className="group">
              <div className="bg-white p-10 h-full border-b-4 border-transparent group-hover:border-[#D12E8B] transition-all shadow-sm hover:shadow-xl">
                <h3 className="text-2xl font-black text-[#2D2B44] mb-4 uppercase">Ministries</h3>
                <p className="text-muted-foreground mb-4">Find your place in our diverse ministry teams.</p>
                <span className="text-[#D12E8B] font-bold group-hover:translate-x-2 transition-transform inline-block">Explore More →</span>
              </div>
            </Link>
            <Link href="/donate" className="group">
              <div className="bg-white p-10 h-full border-b-4 border-transparent group-hover:border-[#D12E8B] transition-all shadow-sm hover:shadow-xl">
                <h3 className="text-2xl font-black text-[#2D2B44] mb-4 uppercase">Give Online</h3>
                <p className="text-muted-foreground mb-4">Support our mission safely and securely.</p>
                <span className="text-[#D12E8B] font-bold group-hover:translate-x-2 transition-transform inline-block">Give Now →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
