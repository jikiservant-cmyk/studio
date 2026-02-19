import Image from "next/image"
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const upcomingEvents = [
  {
    title: "Youth Night: Glow in the Dark",
    date: "Nov 3, 2023",
    time: "6:30 PM - 9:00 PM",
    location: "Youth Center",
    type: "Youth",
    image: "https://picsum.photos/seed/e1/600/400"
  },
  {
    title: "Community Outreach Lunch",
    date: "Nov 5, 2023",
    time: "12:30 PM",
    location: "Main Hall",
    type: "Service",
    image: "https://picsum.photos/seed/e2/600/400"
  },
  {
    title: "Marriage Seminar Weekend",
    date: "Nov 10-12, 2023",
    time: "Fri 7 PM - Sun 12 PM",
    location: "Sanctuary",
    type: "Seminar",
    image: "https://picsum.photos/seed/e3/600/400"
  },
  {
    title: "Choir Rehearsal & Christmas Prep",
    date: "Nov 15, 2023",
    time: "7:00 PM",
    location: "Music Room",
    type: "Worship",
    image: "https://picsum.photos/seed/e4/600/400"
  },
  {
    title: "Women's Coffee Morning",
    date: "Nov 18, 2023",
    time: "10:00 AM",
    location: "Fellowship Cafe",
    type: "Fellowship",
    image: "https://picsum.photos/seed/e5/600/400"
  },
  {
    title: "Baptism Service",
    date: "Nov 26, 2023",
    time: "2:00 PM",
    location: "North Garden",
    type: "Worship",
    image: "https://picsum.photos/seed/e6/600/400"
  }
]

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12 text-center fade-in">
        <h1 className="font-headline text-5xl font-bold text-primary mb-4">Upcoming Events</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
          Connect with our community through services, small groups, and special events.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Events List */}
        <div className="lg:col-span-2 space-y-8 fade-in">
          <h2 className="font-headline text-3xl font-bold text-primary mb-6">Featured Events</h2>
          {upcomingEvents.map((event, i) => (
            <Card key={i} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 relative h-48 md:h-auto overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-secondary text-secondary-foreground font-bold shadow-sm">
                      {event.type}
                    </Badge>
                  </div>
                </div>
                <div className="p-6 md:w-2/3 flex flex-col justify-between">
                  <div>
                    <h3 className="font-headline text-2xl font-bold text-primary mb-3">{event.title}</h3>
                    <div className="space-y-2 text-muted-foreground mb-4">
                      <div className="flex items-center text-sm">
                        <Calendar className="h-4 w-4 mr-2 text-secondary-foreground" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-secondary-foreground" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-2 text-secondary-foreground" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-border">
                    <Button variant="link" className="p-0 h-auto text-primary font-bold">
                      View Details
                    </Button>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                      Register Now
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-12 fade-in">
          {/* Calendar Widget Placeholder */}
          <div className="bg-card p-6 rounded-2xl border shadow-sm">
            <h3 className="font-headline text-xl font-bold text-primary mb-4 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-secondary-foreground" />
              Event Calendar
            </h3>
            <div className="aspect-square bg-muted rounded-xl flex items-center justify-center text-muted-foreground border-2 border-dashed border-border p-4">
               {/* Calendar component would go here */}
               <div className="text-center">
                 <p className="font-bold mb-2">October 2023</p>
                 <div className="grid grid-cols-7 gap-2 text-xs">
                   {Array.from({length: 31}).map((_, i) => (
                     <div key={i} className={`h-8 w-8 flex items-center justify-center rounded-full ${i+1 === 27 ? 'bg-primary text-white font-bold' : 'hover:bg-muted-foreground/10'}`}>
                       {i+1}
                     </div>
                   ))}
                 </div>
               </div>
            </div>
            <Button variant="outline" className="w-full mt-4 text-primary font-bold border-primary">
              Full Calendar View
            </Button>
          </div>

          {/* Connect Group CTA */}
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <Users className="h-40 w-40" />
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4 relative z-10">Connect Groups</h3>
            <p className="text-primary-foreground/80 mb-6 font-body relative z-10 leading-relaxed">
              Find your place in a smaller community. We have groups meeting throughout the week across the city.
            </p>
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full font-bold relative z-10">
              Join a Group
            </Button>
          </div>

          {/* Volunteer CTA */}
          <div className="bg-secondary p-8 rounded-2xl shadow-lg border border-secondary text-secondary-foreground">
            <h3 className="font-headline text-2xl font-bold mb-4">Volunteer</h3>
            <p className="mb-6 font-body leading-relaxed opacity-90">
              Help us make an impact! We're always looking for friendly faces to serve in various ministries.
            </p>
            <Button variant="outline" className="w-full font-bold border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
              Sign Up to Serve
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
