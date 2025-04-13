"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { SavingsSummary } from "@/components/dashboard/SavingsSummary";
import ForecastsView from "./ForecastsView";

export default function AnalyticsView() {
  return (
    <>
<div className="space-y-6">
  <Card>
    <CardHeader>
      <CardTitle>Savings Analytics</CardTitle>
      <CardDescription>Detailed breakdown of your savings performance</CardDescription>
    </CardHeader>
    <CardContent>
      <SavingsSummary />
    </CardContent>
  </Card>

  <ForecastsView/>
</div>

    </>
  );
}