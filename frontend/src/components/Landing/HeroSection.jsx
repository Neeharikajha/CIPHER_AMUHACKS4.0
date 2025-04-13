import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 lg:grid-cols-2">
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
          Track, Save, and <span className="text-primary">Grow</span> Your Finances
        </h1>
        <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
          FinTrack helps you manage your money, track your savings, and reach your financial goals with AI-powered
          insights.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/signup">Get Started for Free</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/login">Sign In</Link>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">No credit card required. Start your 14-day free trial today.</p>
      </div>
      <div className="hidden lg:block">
        <div className="relative mx-auto aspect-video overflow-hidden rounded-xl border shadow-xl">
          <Image
            src="/placeholder.svg?height=720&width=1280"
            alt="Dashboard Preview"
            width={1280}
            height={720}
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
        </div>
      </div>
    </section>
  )
}
