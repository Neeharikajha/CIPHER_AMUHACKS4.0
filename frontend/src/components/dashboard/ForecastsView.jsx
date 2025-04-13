"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ForecastCard } from "@/components/dashboard/ForecastCard";
import { LineChart, BarChart3, Target } from "lucide-react";

export default function ForecastsView() {
  return (
    <div className="flex flex-col w-full h-full space-y-6">
      <Tabs defaultValue="short" className="flex-1 flex flex-col w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="short">Short Term</TabsTrigger>
          <TabsTrigger value="medium">Medium Term</TabsTrigger>
          <TabsTrigger value="long">Long Term</TabsTrigger>
        </TabsList>

        <TabsContent value="short" className="flex-1 mt-6">
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle>3-Month Forecast</CardTitle>
              <CardDescription>Projected financial status over the next 3 months</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ForecastCard />
            </CardContent>
            <CardFooter className="text-sm text-muted-foreground">
              Based on your last 6 months of financial activity
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="medium" className="flex-1 mt-6">
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle>1-Year Forecast</CardTitle>
              <CardDescription>Projected financial status over the next year</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="h-full flex items-center justify-center border rounded-md border-dashed">
                <p className="text-muted-foreground">1-Year Financial Forecast Chart</p>
              </div>
            </CardContent>
            <CardFooter className="text-sm text-muted-foreground">
              Based on your last 12 months of financial activity
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="long" className="flex-1 mt-6">
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle>5-Year Forecast</CardTitle>
              <CardDescription>Long-term financial projection</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="h-full flex items-center justify-center border rounded-md border-dashed">
                <p className="text-muted-foreground">5-Year Financial Forecast Chart</p>
              </div>
            </CardContent>
            <CardFooter className="text-sm text-muted-foreground">
              Based on current savings rate and market conditions
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Savings Growth Forecast</CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="flex-1">
            <div className="h-full flex items-center justify-center border rounded-md border-dashed">
              <p className="text-sm text-muted-foreground">Savings Growth Projection</p>
            </div>
          </CardContent>
        </Card>

        <Card className="flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Investment Returns</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="flex-1">
            <div className="h-full flex items-center justify-center border rounded-md border-dashed">
              <p className="text-sm text-muted-foreground">Investment Returns Projection</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle>Financial Goals Forecast</CardTitle>
          <CardDescription>Progress forecast for your financial goals</CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-primary" />
                  <span className="font-medium">Emergency Fund</span>
                </div>
                <span className="text-sm font-medium">$10,000 by Dec 2025</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: "65%" }}></div>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Current: $6,500</span>
                <span>Forecast: On track (85% chance)</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-primary" />
                  <span className="font-medium">Home Down Payment</span>
                </div>
                <span className="text-sm font-medium">$60,000 by Jun 2027</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: "35%" }}></div>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Current: $21,000</span>
                <span>Forecast: On track (75% chance)</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-primary" />
                  <span className="font-medium">Retirement</span>
                </div>
                <span className="text-sm font-medium">$1.2M by 2045</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: "15%" }}></div>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Current: $180,000</span>
                <span>Forecast: On track (90% chance)</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}