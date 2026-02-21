import Link from "next/link"
import Image from "next/image"
import { MessageSquare, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PlaceHolderImages } from "@/app/lib/placeholder-images"

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'community-gathering')

  return (
    <div className="flex flex-col w-full relative">
      {/* Hero Section with Mobile-Compatible Parallax */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#2D2B44]">
        {/* 
            This container uses clip-path to ensure the fixed background 
            only stays visible within the bounds of the hero section.
            This works reliably on mobile where background-attachment: fixed fails.
        */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ clipPath: 'inset(0)' }}>
          <div 
            className="fixed inset-0 w-full h-full bg-center bg-cover -z-10"
            style={{
              backgroundImage: `url(${heroImg?.imageUrl || "https://picsum.photos/seed/church-hero/1920/1080"})`,
            }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 flex justify-center">
          <div className="flex flex-col items-center text-white slide-up">
            {/* Top Line with generous padding */}
            <span className="text-lg md:text-2xl font-bold uppercase tracking-[0.4em] mb-12 font-headline text-center">
              WELCOME TO
            </span>
            
            {/* Main Title Block - Flush margins, centered as a group */}
            <h1 className="flex flex-col items-start leading-[0.75] font-headline">
              <span className="text-7xl md:text-[12rem] font-[900] uppercase tracking-tighter">
                NCF
              </span>
              <span className="text-7xl md:text-[12rem] font-[900] uppercase tracking-tighter">
                CHURCH
              </span>
            </h1>
            
            {/* Short, thick horizontal white line with moderate margin */}
            <div className="w-24 h-3 bg-white mt-12 mb-8" />

            {/* Downward Arrow Icon */}
            <ChevronDown className="h-10 w-10 animate-bounce opacity-60" strokeWidth={1.5} />
          </div>
        </div>
      </section>

      {/* Floating Chat Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-[#2D2B44] text-white flex items-center space-x-3 px-6 py-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all group border-2 border-white/10">
          <div className="relative">
            <MessageSquare className="h-6 w-6 text-[#D12E8B]" />
            <div className="absolute -top-1 -right-1 bg-[#D12E8B] w-3 h-3 rounded-full border-2 border-[#2D2B44] animate-pulse" />
          </div>
          <span className="font-bold text-lg">Let's Chat!</span>
        </button>
      </div>

      {/* Introduction Section */}
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h2 className="text-[#2D2B44] text-4xl md:text-5xl font-black mb-8 uppercase leading-tight font-headline">
              A Place of <span className="text-[#D12E8B]">Grace and Truth</span>.
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed font-body">
              We are a vibrant community located in the heart of the city. 
              Our mission is to share the light of hope and provide a home where 
              everyone can grow in their journey of faith.
            </p>
            <div className="h-1 w-20 bg-[#D12E8B] mx-auto" />
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-[#F5F5F5] relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/events" className="group">
              <div className="bg-white p-10 h-full shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-[#D12E8B]">
                <h3 className="text-2xl font-black text-[#2D2B44] mb-4 uppercase font-headline">Calendar</h3>
                <p className="text-muted-foreground mb-6 text-base font-body">Stay updated with our weekly services and special events.</p>
                <span className="text-[#D12E8B] font-bold text-sm tracking-widest uppercase">Learn More →</span>
              </div>
            </Link>
            <Link href="/sermons" className="group">
              <div className="bg-white p-10 h-full shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-[#D12E8B]">
                <h3 className="text-2xl font-black text-[#2D2B44] mb-4 uppercase font-headline">Ministries</h3>
                <p className="text-muted-foreground mb-6 text-base font-body">Find a group that fits your season of life.</p>
                <span className="text-[#D12E8B] font-bold text-sm tracking-widest uppercase">Explore →</span>
              </div>
            </Link>
            <Link href="/donate" className="group">
              <div className="bg-white p-10 h-full shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-[#D12E8B]">
                <h3 className="text-2xl font-black text-[#2D2B44] mb-4 uppercase font-headline">Giving</h3>
                <p className="text-muted-foreground mb-6 text-base font-body">Partner with us in our mission through secure online giving.</p>
                <span className="text-[#D12E8B] font-bold text-sm tracking-widest uppercase">Give Now →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
