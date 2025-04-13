"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SavingsSummary } from "@/components/dashboard/SavingsSummary";
import { BarChart3, LineChart, PieChart } from "lucide-react";

export default function AnalyticsView() {
  return (
    <div className="min-h-screen space-y-6 w-full flex flex-col overflow-x-hidden">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 flex-1 max-w-full">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Expense Breakdown</CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="pt-4">
            <div className="h-48 flex items-center justify-center border rounded-md border-dashed">
              <p className="text-sm text-muted-foreground">Expense Breakdown Chart</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Income Analysis</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="pt-4">
            <div className="h-48 flex items-center justify-center border rounded-md border-dashed">
              <p className="text-sm text-muted-foreground">Income Analysis Chart</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Spending Trends</CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="pt-4">
            <div className="h-48 flex items-center justify-center border rounded-md border-dashed">
              <p className="text-sm text-muted-foreground">Spending Trends Chart</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Savings Analytics</CardTitle>
          <CardDescription>Detailed breakdown of your savings performance</CardDescription>
        </CardHeader>
        <CardContent>
          <SavingsSummary />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Financial Health Score</CardTitle>
          <CardDescription>AI analysis of your overall financial health</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full border-8 border-primary flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl font-bold">82</p>
                  <p className="text-sm text-muted-foreground">Good</p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-4">Score Breakdown</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Savings Rate</span>
                    <span className="text-sm font-medium">90/100</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Expense Management</span>
                    <span className="text-sm font-medium">75/100</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Debt-to-Income Ratio</span>
                    <span className="text-sm font-medium">85/100</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
