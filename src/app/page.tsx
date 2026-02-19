import Link from "next/link"
import Image from "next/image"
import { PlayCircle, Calendar, BookOpen, Heart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PlaceHolderImages } from "@/app/lib/placeholder-images"

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-church')
  const studyImg = PlaceHolderImages.find(img => img.id === 'scripture-study')

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src={heroImg?.imageUrl || "https://picsum.photos/seed/church/1200/800"}
          alt="Beacon Church"
          fill
          className="object-cover"
          priority
          data-ai-hint="church building"
        />
        <div className="absolute inset-0 bg-primary/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl fade-in">
          <h1 className="font-headline text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            A Light for the Way Ahead
          </h1>
          <p className="text-lg md:text-2xl mb-8 font-body max-w-2xl mx-auto drop-shadow-md">
            Join a community dedicated to walking the path of faith, serving others, and sharing hope.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-8 shadow-lg">
              <Link href="/sermons">Watch Live Service</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 text-white border-white hover:bg-white/20 font-bold px-8">
              <Link href="/events">Upcoming Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="font-headline text-4xl font-bold text-primary mb-4">Connect With Us</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Whether you're joining us for the first time or the hundredth, there's a place for you here.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="Sermons"
              description="Watch live services or catch up on past messages anytime."
              icon={PlayCircle}
              href="/sermons"
              delay="0.1s"
            />
            <FeatureCard
              title="Events"
              description="Stay active in the community with our upcoming activities."
              icon={Calendar}
              href="/events"
              delay="0.2s"
            />
            <FeatureCard
              title="Scripture AI"
              description="Get guidance and answers from the Bible using our AI tool."
              icon={BookOpen}
              href="/scripture-finder"
              delay="0.3s"
            />
            <FeatureCard
              title="Give"
              description="Support our mission through safe and secure online giving."
              icon={Heart}
              href="/donate"
              delay="0.4s"
            />
          </div>
        </div>
      </section>

      {/* Scripture AI Callout */}
      <section className="py-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6 fade-in">
              <h2 className="font-headline text-4xl font-bold">Deepen Your Understanding</h2>
              <p className="text-lg text-primary-foreground/80 font-body">
                Have questions about faith? Our AI Scripture Finder is designed to help you navigate the Word of God by providing relevant verses and theological insights tailored to your curiosity.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="bg-secondary p-1 rounded-full"><ArrowRight className="h-4 w-4 text-secondary-foreground" /></div>
                  <span>Ask any question about faith or life</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="bg-secondary p-1 rounded-full"><ArrowRight className="h-4 w-4 text-secondary-foreground" /></div>
                  <span>Receive curated Bible verses</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="bg-secondary p-1 rounded-full"><ArrowRight className="h-4 w-4 text-secondary-foreground" /></div>
                  <span>Explore theological explanations</span>
                </li>
              </ul>
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold mt-4">
                <Link href="/scripture-finder">Try Scripture AI</Link>
              </Button>
            </div>
            <div className="lg:w-1/2 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl fade-in">
              <Image
                src={studyImg?.imageUrl || "https://picsum.photos/seed/bible/800/600"}
                alt="Studying Scripture"
                fill
                className="object-cover"
                data-ai-hint="open bible"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Times Callout */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-headline text-3xl font-bold text-primary mb-8">Join Us This Sunday</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-background p-8 rounded-xl shadow-sm border border-border">
              <h3 className="text-xl font-bold mb-2 text-primary">Contemporary Service</h3>
              <p className="text-2xl font-bold text-secondary-foreground mb-4">9:00 AM</p>
              <p className="text-muted-foreground">Modern worship and practical teaching in the Sanctuary.</p>
            </div>
            <div className="bg-background p-8 rounded-xl shadow-sm border border-border">
              <h3 className="text-xl font-bold mb-2 text-primary">Traditional Service</h3>
              <p className="text-2xl font-bold text-secondary-foreground mb-4">11:00 AM</p>
              <p className="text-muted-foreground">Classic hymns and choral music in our main chapel.</p>
            </div>
          </div>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-8">
            <Link href="/contact">Plan Your Visit</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ title, description, icon: Icon, href, delay }: { title: string, description: string, icon: any, href: string, delay: string }) {
  return (
    <Link href={href}>
      <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 duration-300 border-none bg-card shadow-md group overflow-hidden" style={{ animationDelay: delay }}>
        <div className="h-1 bg-secondary w-0 group-hover:w-full transition-all duration-500" />
        <CardContent className="p-8 text-center flex flex-col items-center">
          <div className="bg-muted p-4 rounded-full mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
            <Icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
          </div>
          <h3 className="font-headline text-2xl font-bold mb-3 text-primary">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
