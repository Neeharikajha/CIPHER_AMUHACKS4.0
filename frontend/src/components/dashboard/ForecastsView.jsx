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
    </div>
  );
}