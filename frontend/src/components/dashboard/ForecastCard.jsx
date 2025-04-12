"use client"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { LineChart, TrendingUp } from "lucide-react"

export function ForecastCard() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-emerald-500" />
            <span className="text-sm font-medium">Projected Growth</span>
          </div>
          <span className="text-sm font-medium text-emerald-500">+24.5%</span>
        </div>
        <Progress value={24.5} className="h-2" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Savings Goal: $10,000</span>
          <span className="text-sm font-medium">49.4% Complete</span>
        </div>
        <Progress value={49.4} className="h-2" />
        <p className="text-xs text-muted-foreground">Estimated completion: October 2025</p>
      </div>

      <div className="rounded-md border p-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">AI Recommendation</p>
            <p className="text-xs text-muted-foreground">
              Increase monthly savings by $100 to reach your goal 2 months earlier
            </p>
          </div>
          <Button size="sm" variant="outline" className="h-8">
            <LineChart className="mr-2 h-3.5 w-3.5" />
            View Details
          </Button>
        </div>
      </div>

      <div className="rounded-md border p-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Savings Potential</p>
            <p className="text-xs text-muted-foreground">
              You could save an additional $250/month by optimizing expenses
            </p>
          </div>
          <Button size="sm" className="h-8">
            Get Insights
          </Button>
        </div>
      </div>
    </div>
  )
}
