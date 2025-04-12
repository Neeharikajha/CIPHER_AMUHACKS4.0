"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  ArrowDown,
  ArrowUp,
  CreditCard,
  DollarSign,
  LineChart,
  PiggyBank,
  TrendingUp,
  Users,
} from "lucide-react";
import { SavingsChart } from "@/components/dashboard/Graph";
import { RecentTransactions } from "@/components/dashboard/Transactions";
import { SavingsSummary } from "@/components/dashboard/SavingsSummary";
import { ForecastCard } from "@/components/dashboard/ForecastCard";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function DashboardContent() {
  const [useClient, setUseClient] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
      </div>

      <Tabs defaultValue="overview" className="space-y-1">
        <TabsContent value="overview" className="space-y-6">
          {/* Summary Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Total Balance */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$12,546.00</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-emerald-500 flex items-center">
                    <ArrowUp className="mr-1 h-3 w-3" />
                    +2.5%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>

            {/* Total Savings */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Savings</CardTitle>
                <PiggyBank className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$4,935.00</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-emerald-500 flex items-center">
                    <ArrowUp className="mr-1 h-3 w-3" />
                    +18.2%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>

            {/* Monthly Expenses */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Monthly Expenses</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$2,450.00</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-rose-500 flex items-center">
                    <ArrowDown className="mr-1 h-3 w-3" />
                    -4.1%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>

            {/* Savings Rate */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Savings Rate</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24.5%</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-emerald-500 flex items-center">
                    <ArrowUp className="mr-1 h-3 w-3" />
                    +5.2%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Savings Growth</CardTitle>
                <CardDescription>Your savings growth over the past 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <SavingsChart />
              </CardContent>
            </Card>

            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Savings Summary</CardTitle>
                <CardDescription>Breakdown of your savings by category</CardDescription>
              </CardHeader>
              <CardContent>
                <SavingsSummary />
              </CardContent>
            </Card>
          </div>

          {/* Transactions + Forecast */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Your most recent financial activities</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentTransactions />
              </CardContent>
            </Card>

            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Savings Forecast</CardTitle>
                <CardDescription>AI-powered prediction of your future savings</CardDescription>
              </CardHeader>
              <CardContent>
                <ForecastCard />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Conditionally Rendered Sections */}
      {useClient && (
        <div className="space-y-4">
          {/* Analytics Section */}
          <Card>
            <CardHeader>
              <CardTitle>Analytics Dashboard</CardTitle>
              <CardDescription>Detailed analysis of your financial data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-[300px] items-center justify-center rounded-md border border-dashed">
                <div className="flex flex-col items-center gap-2 text-center">
                  <LineChart className="h-10 w-10 text-muted-foreground" />
                  <h3 className="text-lg font-semibold">Analytics View</h3>
                  <p className="text-sm text-muted-foreground max-w-md">
                    This section would contain detailed charts and analytics about your financial data, spending patterns, and investment performance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Forecast Section */}
          <Card>
            <CardHeader>
              <CardTitle>Financial Forecasts</CardTitle>
              <CardDescription>AI-powered predictions for your financial future</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-[300px] items-center justify-center rounded-md border border-dashed">
                <div className="flex flex-col items-center gap-2 text-center">
                  <Users className="h-10 w-10 text-muted-foreground" />
                  <h3 className="text-lg font-semibold">Forecasts View</h3>
                  <p className="text-sm text-muted-foreground max-w-md">
                    This section would contain AI-generated forecasts about your future savings, investment growth, and financial milestones based on your current financial behavior.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
