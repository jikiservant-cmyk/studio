import Image from "next/image"
import { Play, Calendar, User, Clock, Share2, Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { PlaceHolderImages } from "@/app/lib/placeholder-images"
import { KineticHeadline } from "@/components/KineticHeadline"
import { InkFlowText } from "@/components/InkFlowText"

const pastSermons = [
  {
    title: "Walking by Faith, Not by Sight",
    date: "Oct 27, 2023",
    speaker: "Pastor John Doe",
    duration: "42:15",
    image: "https://picsum.photos/seed/s1/400/250"
  },
  {
    title: "The Strength in Our Community",
    date: "Oct 20, 2023",
    speaker: "Associate Pastor Sarah Smith",
    duration: "38:40",
    image: "https://picsum.photos/seed/s2/400/250"
  },
  {
    title: "Finding Peace in the Storm",
    date: "Oct 13, 2023",
    speaker: "Pastor John Doe",
    duration: "45:20",
    image: "https://picsum.photos/seed/s3/400/250"
  },
  {
    title: "Grace Upon Grace",
    date: "Oct 6, 2023",
    speaker: "Elder Mike Williams",
    duration: "35:10",
    image: "https://picsum.photos/seed/s4/400/250"
  },
  {
    title: "The Heart of Worship",
    date: "Sep 29, 2023",
    speaker: "Worship Leader Amy Chen",
    duration: "40:00",
    image: "https://picsum.photos/seed/s5/400/250"
  },
  {
    title: "Legacy of Love",
    date: "Sep 22, 2023",
    speaker: "Pastor John Doe",
    duration: "48:30",
    image: "https://picsum.photos/seed/s6/400/250"
  }
]

export default function SermonsPage() {
  const liveImg = PlaceHolderImages.find(img => img.id === 'live-stream')

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <KineticHeadline 
          lines={["Sermons"]} 
          className="text-5xl font-bold text-primary mb-4"
        />
        <InkFlowText className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
          Watch our services live or browse through our library of past messages to find inspiration and guidance.
        </InkFlowText>
      </div>

      {/* Live Section */}
      <section className="mb-20">
        <div className="bg-card border rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-span-2 relative aspect-video bg-black fade-in">
              <Image
                src={liveImg?.imageUrl || "https://picsum.photos/seed/live/1280/720"}
                alt="Live Sermon"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="icon" className="w-20 h-20 rounded-full bg-secondary text-secondary-foreground hover:scale-110 transition-transform">
                  <Play className="h-10 w-10 fill-current ml-1" />
                </Button>
              </div>
              <div className="absolute top-4 left-4">
                <Badge className="bg-red-600 text-white animate-pulse border-none px-3 py-1 text-sm font-bold">
                  LIVE NOW
                </Badge>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center bg-primary text-primary-foreground">
              <KineticHeadline 
                lines={["Current Series:", "Foundations of Faith"]} 
                className="text-3xl font-bold mb-4"
              />
              <InkFlowText className="text-primary-foreground/80 mb-6 font-body leading-relaxed">
                Join us as we explore the essential pillars that sustain our spiritual walk in a modern world.
              </InkFlowText>
              <div className="space-y-4 mb-8 fade-in">
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-secondary" />
                  <span>Pastor John Doe</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-secondary" />
                  <span>Started at 11:00 AM</span>
                </div>
              </div>
              <div className="flex space-x-4 fade-in">
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 flex-1 font-bold">
                  Watch Live
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-12 fade-in">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search sermons by title, speaker or topic..." className="pl-10 h-12" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="h-12">
            <Filter className="h-4 w-4 mr-2" />
            Category
          </Button>
          <Button variant="outline" className="h-12">
            <Calendar className="h-4 w-4 mr-2" />
            Year
          </Button>
        </div>
      </div>

      {/* Archive Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {pastSermons.map((sermon, i) => (
          <div key={i} className="group bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={sermon.image}
                alt={sermon.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Play className="h-12 w-12 text-white" />
              </div>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {sermon.duration}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-headline text-xl font-bold text-primary mb-2 group-hover:text-secondary-foreground transition-colors line-clamp-1">{sermon.title}</h3>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4 font-body">
                <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" /> {sermon.date}</span>
                <span className="flex items-center"><User className="h-4 w-4 mr-1" /> {sermon.speaker}</span>
              </div>
              <Button variant="link" className="p-0 h-auto text-primary font-bold hover:text-secondary-foreground">
                Watch Message
              </Button>
            </div>
          </div>
        ))}
      </section>

      <div className="flex justify-center mt-8 fade-in">
        <Button variant="outline" className="px-8 font-bold text-primary">Load More Sermons</Button>
      </div>
    </div>
  )
}
