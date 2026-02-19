"use client"

import * as React from "react"
import { Mail, Phone, MapPin, Send, MessageSquare, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We will get back to you shortly.",
      })
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-16 fade-in">
        <h1 className="font-headline text-5xl font-bold text-primary mb-4">Connect With Us</h1>
        <p className="text-muted-foreground text-lg font-body max-w-2xl mx-auto">
          Have a question or a prayer request? We're here to listen and support you in any way we can.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="space-y-8 fade-in" style={{ animationDelay: '0.1s' }}>
          <Card className="border-none shadow-md overflow-hidden bg-primary text-primary-foreground">
            <CardContent className="p-10 space-y-8">
              <h2 className="font-headline text-3xl font-bold mb-6">Reach Out</h2>
              <div className="flex items-start space-x-4">
                <div className="bg-secondary/20 p-3 rounded-xl">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Visit Us</h3>
                  <p className="text-primary-foreground/70">123 Faith Lane, Grace City, GC 45678</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-secondary/20 p-3 rounded-xl">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Call Us</h3>
                  <p className="text-primary-foreground/70">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-secondary/20 p-3 rounded-xl">
                  <Mail className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email Us</h3>
                  <p className="text-primary-foreground/70">hello@beaconchurch.org</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm bg-muted/50">
            <CardContent className="p-8 text-center">
              <Heart className="h-10 w-10 text-destructive mx-auto mb-4" />
              <h3 className="font-headline text-xl font-bold text-primary mb-2">Prayer Support</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                Our prayer team meets every Wednesday to lift up our community. Every request is handled with strict confidentiality and care.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2 fade-in" style={{ animationDelay: '0.2s' }}>
          <form onSubmit={handleSubmit} className="bg-card border p-10 rounded-2xl shadow-lg space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" placeholder="John" required className="h-12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" placeholder="Doe" required className="h-12" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="john@example.com" required className="h-12" />
            </div>

            <div className="space-y-4 pt-4">
              <Label className="text-base font-bold text-primary">I'm reaching out for:</Label>
              <RadioGroup defaultValue="inquiry" className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="inquiry" id="r1" />
                  <Label htmlFor="r1" className="flex items-center space-x-2 cursor-pointer">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    <span>General Inquiry</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="prayer" id="r2" />
                  <Label htmlFor="r2" className="flex items-center space-x-2 cursor-pointer">
                    <Heart className="h-4 w-4 text-primary" />
                    <span>Prayer Request</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2 pt-4">
              <Label htmlFor="message">How can we help you?</Label>
              <Textarea id="message" placeholder="Type your message or prayer request here..." className="min-h-[180px] text-lg p-4 resize-none" required />
            </div>

            <Button type="submit" className="w-full h-14 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md group" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : (
                <span className="flex items-center justify-center">
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              )}
            </Button>
          </form>
        </div>
      </div>

      {/* Map Section Placeholder */}
      <div className="mt-20 fade-in" style={{ animationDelay: '0.3s' }}>
        <div className="w-full h-[400px] bg-muted rounded-2xl relative overflow-hidden flex items-center justify-center border-2 border-dashed border-border group">
          <div className="text-center z-10">
            <MapPin className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-headline text-2xl font-bold text-primary">Join us in person</h3>
            <p className="text-muted-foreground font-body">123 Faith Lane, Grace City, GC 45678</p>
            <Button variant="link" className="mt-4 text-primary font-bold">Open in Google Maps</Button>
          </div>
          <div className="absolute inset-0 bg-primary/5 opacity-50" />
        </div>
      </div>
    </div>
  )
}
