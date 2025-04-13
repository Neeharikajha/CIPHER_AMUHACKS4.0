"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  DollarSign,
  LineChart,
  Lock,
  PiggyBank,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react";
import { AuthContainer } from "../auth/AuthContainer";

const Hero4 = ({ onSignUp }) => (
  <div className="w-full pt-0 pb-8 md:pb-12 lg:pb-16">
    <div className="container mx-auto pl-8 md:pl-12 lg:pl-16 pr-8 md:pr-12 lg:pr-16">
      <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
              Take charge of your finances!
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              Managing money shouldn’t be a hassle. Ditch complicated spreadsheets and outdated tools. FinTrack simplifies budgeting, tracks savings, and empowers you to achieve your financial goals effortlessly.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button size="lg" className="gap-4" variant="outline" asChild>
              <a href="#features">About Us</a>
            </Button>
            <Button size="lg" className="gap-4" onClick={onSignUp}>
              Sign up here
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-muted rounded-md aspect-square"></div>
          <div className="bg-muted rounded-md row-span-2"></div>
          <div className="bg-muted rounded-md aspect-square"></div>
        </div>
      </div>
    </div>
  </div>
);

export default function LandingPage() {
  const authContainerRef = useRef(null);

  const handleLogin = () => {
    authContainerRef.current?.openLogin();
  };

  const handleSignUp = () => {
    authContainerRef.current?.openSignUp(); // ✅ Correct method name
  };

  const handleGetStarted = () => {
    authContainerRef.current?.openSignup();
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <PiggyBank className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">FinTrack</span>
          </div>
          <nav className="hidden gap-8 md:flex">
            <a href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Features</a>
            <a href="#benefits" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Benefits</a>
            <a href="#testimonials" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Testimonials</a>
          </nav>
          <div className="flex items-center gap-6">
            <button onClick={handleLogin} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Login</button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Hero4 onSignUp={handleSignUp} />

        <section id="features" className="pt-8 md:pt-12 lg:pt-16 pb-20 md:pb-28">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Powerful Features for Financial Success</h2>
              <p className="text-lg text-muted-foreground">Our dashboard provides all the tools you need to manage your finances effectively.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: PiggyBank, title: "Smart Savings Tracking", description: "Track your savings goals and progress with intuitive visualizations." },
                { icon: BarChart3, title: "Expense Analytics", description: "Understand your spending patterns with detailed categorization." },
                { icon: LineChart, title: "Financial Forecasting", description: "AI-powered predictions to help you plan for the future." },
                { icon: TrendingUp, title: "Growth Insights", description: "See how your investments and savings grow over time." },
                { icon: Shield, title: "Secure & Private", description: "Bank-level security to keep your financial data safe." },
                { icon: Zap, title: "Real-time Updates", description: "Always see the most current state of your finances." },
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

        <section id="benefits" className="bg-muted/30 py-20 md:py-28">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Why Choose FinTrack?</h2>
              <p className="text-lg text-muted-foreground">Our platform is designed to help you achieve financial freedom with ease.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Secure & Private</h3>
                </div>
                <p className="mb-6 text-muted-foreground">Your financial data is encrypted and protected with bank-level security. We never share your information with third parties.</p>
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
                <p className="mb-6 text-muted-foreground">Our users save an average of 15% more money after using FinTrack for just three months.</p>
                <ul className="space-y-3">
                  {["Automated savings recommendations", "Expense reduction insights", "Goal-based saving plans"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t bg-muted/30 py-16">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} FinTrack. All rights reserved.
        </p>
      </footer>

      <AuthContainer ref={authContainerRef} onAuthSuccess={() => { window.location.href = "/dashboard"; }} />
    </div>
  );
}
