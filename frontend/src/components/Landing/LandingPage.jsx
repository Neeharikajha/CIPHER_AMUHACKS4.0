"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  ChevronRight,
  DollarSign,
  LineChart,
  Lock,
  PiggyBank,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react";
import { LoginFormPopup } from "@/components/auth/AuthLogin";

export default function LandingPage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <PiggyBank className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">FinTrack</span>
          </div>
          <nav className="hidden gap-8 md:flex">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="#benefits"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Benefits
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center gap-6">
            <button
              onClick={openLogin}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Login
            </button>
            <Button asChild size="sm" className="px-4">
              <Link href="/signup">Sign Up Free</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-20 md:py-28 lg:py-36">
          <div className="container flex flex-col items-center justify-between gap-12 px-4 sm:px-6 lg:px-8 md:flex-row">
            <div className="flex flex-col items-start gap-6 md:max-w-lg">
              <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
                Take Control of Your <span className="text-primary">Financial Future</span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Track your savings, monitor expenses, and reach your financial goals with our powerful dashboard.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="px-6">
                  <Link href="/signup">
                    Get Started Free
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="px-6">
                  <a href="#features">Learn More</a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">No credit card required. Free 14-day trial.</p>
            </div>
            <div className="w-full max-w-md">
              <div className="relative rounded-lg border bg-card p-4 shadow-xl">
                <div className="absolute -right-1 -top-1 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  New
                </div>
                <div className="overflow-hidden rounded-md border">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Dashboard Preview"
                    width={800}
                    height={600}
                    className="aspect-video object-cover"
                    priority
                  />
                </div>
                <div className="mt-4 flex items-center justify-between px-3">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-xs font-medium">Live Dashboard</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Updated in real-time</span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -left-20 -top-20 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl"></div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 md:py-28">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Powerful Features for Financial Success</h2>
              <p className="text-lg text-muted-foreground">
                Our dashboard provides all the tools you need to manage your finances effectively.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: PiggyBank,
                  title: "Smart Savings Tracking",
                  description: "Track your savings goals and progress with intuitive visualizations.",
                },
                {
                  icon: BarChart3,
                  title: "Expense Analytics",
                  description: "Understand your spending patterns with detailed categorization.",
                },
                {
                  icon: LineChart,
                  title: "Financial Forecasting",
                  description: "AI-powered predictions to help you plan for the future.",
                },
                {
                  icon: TrendingUp,
                  title: "Growth Insights",
                  description: "See how your investments and savings grow over time.",
                },
                {
                  icon: Shield,
                  title: "Secure & Private",
                  description: "Bank-level security to keep your financial data safe.",
                },
                {
                  icon: Zap,
                  title: "Real-time Updates",
                  description: "Always see the most current state of your finances.",
                },
              ].map((feature, index) => (
                <div key={index} className="rounded-lg border bg-card p-8 shadow-sm transition-all hover:shadow-md">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="bg-muted/30 py-20 md:py-28">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Why Choose FinTrack?</h2>
              <p className="text-lg text-muted-foreground">
                Our platform is designed to help you achieve financial freedom with ease.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Secure & Private</h3>
                </div>
                <p className="mb-6 text-muted-foreground">
                  Your financial data is encrypted and protected with bank-level security. We never share your
                  information with third parties.
                </p>
                <ul className="space-y-3">
                  {["End-to-end encryption", "Two-factor authentication", "Regular security audits"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border bg-card p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Save More Money</h3>
                </div>
                <p className="mb-6 text-muted-foreground">
                  Our users save an average of 15% more money after using FinTrack for just three months.
                </p>
                <ul className="space-y-3">
                  {["Automated savings recommendations", "Expense reduction insights", "Goal-based saving plans"].map(
                    (item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span className="text-sm">{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 md:py-28">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">What Our Users Say</h2>
              <p className="text-lg text-muted-foreground">
                Join thousands of satisfied users who have transformed their financial lives.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  quote:
                    "FinTrack helped me save for my dream vacation in just 6 months. The visualization tools made it easy to stay on track.",
                  name: "Sarah Johnson",
                  title: "Marketing Manager",
                },
                {
                  quote:
                    "I've tried many finance apps, but FinTrack is the only one that actually helped me understand where my money was going.",
                  name: "Michael Chen",
                  title: "Software Engineer",
                },
                {
                  quote:
                    "The forecasting feature is incredible. I can now plan my finances years in advance with confidence.",
                  name: "Aisha Patel",
                  title: "Small Business Owner",
                },
              ].map((testimonial, index) => (
                <div key={index} className="rounded-lg border bg-card p-8 shadow-sm">
                  <div className="mb-6 text-lg italic text-muted-foreground">"{testimonial.quote}"</div>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-muted"></div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-20 md:py-28 text-primary-foreground">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Transform Your Finances?</h2>
              <p className="mb-8 text-lg text-primary-foreground/90">
                Join thousands of users who are saving more and stressing less with FinTrack.
              </p>
              <Button asChild size="lg" variant="secondary" className="px-6">
                <Link href="/signup">Get Started Free</Link>
              </Button>
              <p className="mt-6 text-sm text-primary-foreground/80">No credit card required. Free 14-day trial.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <PiggyBank className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">FinTrack</span>
              </div>
              <p className="mb-6 text-muted-foreground">
                The smart way to track your finances and achieve your financial goals.
              </p>
              <div className="flex gap-6">
                {["Twitter", "LinkedIn", "Facebook"].map((social) => (
                  <a key={social} href="#" className="text-muted-foreground hover:text-foreground">
                    {social}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-lg font-bold">Product</h3>
              <ul className="space-y-3">
                {["Features", "Pricing", "Testimonials", "FAQ"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-lg font-bold">Company</h3>
              <ul className="space-y-3">
                {["About Us", "Careers", "Blog", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-lg font-bold">Legal</h3>
              <ul className="space-y-3">
                {["Terms of Service", "Privacy Policy", "Cookie Policy", "Security"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} FinTrack. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Login Popup */}
      <LoginFormPopup isOpen={isLoginOpen} onClose={closeLogin} />
    </div>
  );
}