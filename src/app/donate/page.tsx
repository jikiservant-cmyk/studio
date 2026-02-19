"use client"

import * as React from "react"
import { Heart, ShieldCheck, RefreshCw, Smartphone, CreditCard, Banknote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export default function DonatePage() {
  const [amount, setAmount] = React.useState<string>("50")
  const [recurring, setRecurring] = React.useState(false)
  const { toast } = useToast()

  const handleDonate = () => {
    toast({
      title: "Redirecting...",
      description: "You are being redirected to our secure payment processor.",
    })
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="text-center mb-12 fade-in">
        <h1 className="font-headline text-5xl font-bold text-primary mb-4">Support Our Mission</h1>
        <p className="text-muted-foreground text-lg font-body max-w-2xl mx-auto">
          Your generosity enables us to serve our community, maintain our ministries, and share the message of hope with the world.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Donation Form */}
        <div className="fade-in" style={{ animationDelay: '0.1s' }}>
          <Card className="shadow-2xl border-primary/5">
            <CardHeader className="bg-primary text-primary-foreground rounded-t-xl text-center pb-8 pt-10">
              <div className="inline-flex p-3 rounded-full bg-secondary mb-4 shadow-lg">
                <Heart className="h-8 w-8 text-secondary-foreground" />
              </div>
              <CardTitle className="font-headline text-3xl font-bold">Safe & Secure Giving</CardTitle>
              <CardDescription className="text-primary-foreground/70">Choose an amount to contribute</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-3 gap-3 mb-8">
                {["25", "50", "100", "250", "500", "Custom"].map((val) => (
                  <Button
                    key={val}
                    variant={amount === val || (val === 'Custom' && !["25", "50", "100", "250", "500"].includes(amount)) ? "default" : "outline"}
                    className={`h-16 text-lg font-bold ${amount === val ? 'bg-primary' : 'border-primary/20 text-primary hover:bg-primary/10'}`}
                    onClick={() => val !== 'Custom' ? setAmount(val) : setAmount("")}
                  >
                    {val === 'Custom' ? val : `$${val}`}
                  </Button>
                ))}
              </div>

              <div className="space-y-6">
                <div>
                  <Label className="text-base font-bold text-primary mb-2 block">Gift Amount</Label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-muted-foreground font-bold">$</span>
                    <Input
                      type="number"
                      placeholder="Enter custom amount"
                      className="pl-10 h-14 text-xl font-bold focus-visible:ring-primary/20"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between bg-muted/50 p-4 rounded-xl border">
                  <div className="flex items-center space-x-3">
                    <RefreshCw className={`h-5 w-5 ${recurring ? 'text-primary animate-spin-slow' : 'text-muted-foreground'}`} />
                    <div>
                      <p className="font-bold text-primary">Make this a recurring gift</p>
                      <p className="text-xs text-muted-foreground">Automate your giving monthly</p>
                    </div>
                  </div>
                  <Switch checked={recurring} onCheckedChange={setRecurring} />
                </div>

                <Button className="w-full h-16 text-xl font-bold bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg" onClick={handleDonate}>
                  Give {recurring ? 'Monthly' : 'Once'} - ${amount || '0'}
                </Button>
              </div>
            </CardContent>
            <CardFooter className="bg-muted/30 border-t p-6 flex items-center justify-center space-x-4">
              <CreditCard className="h-6 w-6 text-muted-foreground" />
              <Smartphone className="h-6 w-6 text-muted-foreground" />
              <Banknote className="h-6 w-6 text-muted-foreground" />
              <span className="text-xs text-muted-foreground uppercase tracking-widest font-bold">All major methods accepted</span>
            </CardFooter>
          </Card>
        </div>

        {/* Info and Impact */}
        <div className="space-y-8 fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="bg-card p-8 rounded-2xl border shadow-sm">
            <h3 className="font-headline text-3xl font-bold text-primary mb-6">Why Your Giving Matters</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-secondary/20 p-3 rounded-xl mt-1">
                  <Users className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Local Outreach</h4>
                  <p className="text-muted-foreground leading-relaxed">Helping our local neighbors with food, shelter, and essential support programs through our food bank and community center.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-secondary/20 p-3 rounded-xl mt-1">
                  <PlayCircle className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Digital Ministry</h4>
                  <p className="text-muted-foreground leading-relaxed">Funding our live streaming services and the Scripture AI tool to reach those who cannot join us in person.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-secondary/20 p-3 rounded-xl mt-1">
                  <Church className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Campus Preservation</h4>
                  <p className="text-muted-foreground leading-relaxed">Maintaining our sacred spaces for worship, prayer, and community gathering for generations to come.</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-primary text-primary-foreground border-none overflow-hidden relative">
            <div className="absolute right-0 top-0 w-32 h-32 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <ShieldCheck className="h-8 w-8 text-secondary" />
                <h3 className="font-headline text-2xl font-bold">100% Transparent</h3>
              </div>
              <p className="text-primary-foreground/80 font-body mb-6 leading-relaxed">
                Beacon Church is a registered 501(c)(3) non-profit organization. All donations are tax-deductible. We provide annual contribution statements for your records every January.
              </p>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold">
                View Annual Impact Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function Users(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function PlayCircle(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" />
    </svg>
  )
}

function Church(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
      <path d="M18 5v17" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
      <path d="M12 2v5" />
      <path d="M9 4h6" />
    </svg>
  )
}
