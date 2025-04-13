// "use client";

// import { useState } from "react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@/components/ui/tabs";
// import {
//   ArrowDown,
//   ArrowUp,
//   CreditCard,
//   DollarSign,
//   LineChart,
//   PiggyBank,
//   TrendingUp,
//   Users,
// } from "lucide-react";
// import { SavingsChart } from "@/components/dashboard/Graph";
// import { RecentTransactions } from "@/components/dashboard/Transactions";
// import { SavingsSummary } from "@/components/dashboard/SavingsSummary";
// import { ForecastCard } from "@/components/dashboard/ForecastCard";
// import { Switch } from "@/components/ui/switch";
// import { Label } from "@/components/ui/label";

// export default function DashboardContent() {
//   const [useClient, setUseClient] = useState(false);

//   return (
//     <div className="flex flex-col gap-6">
//       <div className="flex items-center justify-between">
//       </div>

//       <Tabs defaultValue="overview" className="space-y-1">
//         <TabsContent value="overview" className="space-y-6">
// {/* Summary Cards + Intro Section */}
// <div className="grid gap-4 md:grid-cols-8 lg:grid-cols-8 items-start">
//   {/* Summary Cards */}
//   <div className="col-span-6 grid grid-cols-2 gap-4">
//     {/* Total Balance */}
//     <Card className="h-full">
//       <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//         <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
//         <DollarSign className="h-4 w-4 text-muted-foreground" />
//       </CardHeader>
//       <CardContent>
//         <div className="text-2xl font-bold">$12,546.00</div>
//         <p className="text-xs text-muted-foreground">
//           <span className="text-emerald-500 flex items-center">
//             <ArrowUp className="mr-1 h-3 w-3" />
//             +2.5%
//           </span>{" "}
//           from last month
//         </p>
//       </CardContent>
//     </Card>

//     {/* Total Savings */}
//     <Card className="h-full">
//       <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//         <CardTitle className="text-sm font-medium">Total Savings</CardTitle>
//         <PiggyBank className="h-4 w-4 text-muted-foreground" />
//       </CardHeader>
//       <CardContent>
//         <div className="text-2xl font-bold">$4,935.00</div>
//         <p className="text-xs text-muted-foreground">
//           <span className="text-emerald-500 flex items-center">
//             <ArrowUp className="mr-1 h-3 w-3" />
//             +18.2%
//           </span>{" "}
//           from last month
//         </p>
//       </CardContent>
//     </Card>

//     {/* Monthly Expenses */}
//     <Card className="h-full">
//       <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//         <CardTitle className="text-sm font-medium">Monthly Expenses</CardTitle>
//         <CreditCard className="h-4 w-4 text-muted-foreground" />
//       </CardHeader>
//       <CardContent>
//         <div className="text-2xl font-bold">$2,450.00</div>
//         <p className="text-xs text-muted-foreground">
//           <span className="text-rose-500 flex items-center">
//             <ArrowDown className="mr-1 h-3 w-3" />
//             -4.1%
//           </span>{" "}
//           from last month
//         </p>
//       </CardContent>
//     </Card>

//     {/* Savings Rate */}
//     <Card className="h-full">
//       <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//         <CardTitle className="text-sm font-medium">Savings Rate</CardTitle>
//         <TrendingUp className="h-4 w-4 text-muted-foreground" />
//       </CardHeader>
//       <CardContent>
//         <div className="text-2xl font-bold">24.5%</div>
//         <p className="text-xs text-muted-foreground">
//           <span className="text-emerald-500 flex items-center">
//             <ArrowUp className="mr-1 h-3 w-3" />
//             +5.2%
//           </span>{" "}
//           from last month
//         </p>
//       </CardContent>
//     </Card>
//   </div>

//   {/* Text + Button Placeholder (matches height of 2 cards) */}
//   <div className="col-span-2 row-span-2 flex flex-col justify-center gap-4 p-6 bg-muted rounded-md h-full">
//     <h2 className="text-xl font-semibold">Kickstart Your Savings</h2>
//     <p className="text-sm text-muted-foreground">
//       Begin your savings journey today. Track your goals and build financial freedom.
//     </p>
//     <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition">
//       Start Saving
//     </button>
//   </div>
// </div>

//           {/* Charts Section */}
//           <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
//   <Card className="lg:col-span-4">
//     <CardHeader>
//       <CardTitle>Savings Summary</CardTitle>
//       <CardDescription>Your savings growth over the past 6 months</CardDescription>
//     </CardHeader>
//     <CardContent>
//       <SavingsChart />
//     </CardContent>
//   </Card>

//   <Card className="lg:col-span-4">
//     <CardHeader>
//       <CardTitle>Savings Forecast</CardTitle>
//       <CardDescription>AI-powered prediction of your future savings</CardDescription>
//     </CardHeader>
//     <CardContent>
//       <ForecastCard />
//     </CardContent>
//   </Card>
// </div>

          

//           {/* Transactions + Forecast */}
//           <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
//   <Card className="w-full h-full col-span-full">
//     <CardHeader>
//       <CardTitle>Recent Transactions</CardTitle>
//       <CardDescription>Your most recent financial activities</CardDescription>
//     </CardHeader>
//     <CardContent>
//       <RecentTransactions />
//     </CardContent>
//   </Card>
// </div>

//         </TabsContent>
//       </Tabs>

//       {/* Conditionally Rendered Sections */}
//       {useClient && (
//         <div className="space-y-4">
//           {/* Analytics Section */}
//           <Card>
//             <CardHeader>
//               <CardTitle>Analytics Dashboard</CardTitle>
//               <CardDescription>Detailed analysis of your financial data</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="flex h-[300px] items-center justify-center rounded-md border border-dashed">
//                 <div className="flex flex-col items-center gap-2 text-center">
//                   <LineChart className="h-10 w-10 text-muted-foreground" />
//                   <h3 className="text-lg font-semibold">Analytics View</h3>
//                   <p className="text-sm text-muted-foreground max-w-md">
//                     This section would contain detailed charts and analytics about your financial data, spending patterns, and investment performance.
//                   </p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Forecast Section */}
//           <Card>
//             <CardHeader>
//               <CardTitle>Financial Forecasts</CardTitle>
//               <CardDescription>AI-powered predictions for your financial future</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="flex h-[300px] items-center justify-center rounded-md border border-dashed">
//                 <div className="flex flex-col items-center gap-2 text-center">
//                   <Users className="h-10 w-10 text-muted-foreground" />
//                   <h3 className="text-lg font-semibold">Forecasts View</h3>
//                   <p className="text-sm text-muted-foreground max-w-md">
//                     This section would contain AI-generated forecasts about your future savings, investment growth, and financial milestones based on your current financial behavior.
//                   </p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       )}
//     </div>
//   );
// }


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
  const [showPayment, setShowPayment] = useState(false);
  const [amount, setAmount] = useState(500);

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpay();
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "process.env.NEXT_PUBLIC_RAZORPAY_KEY",
      amount: amount * 100,
      currency: "INR",
      name: "Pennywise",
      description: "Kickstart your savings",
      handler: function (response) {
        alert("Payment successful!");
        console.log(response);
        setShowPayment(false);
      },
      prefill: {
        name: "Your Name",
        email: "your@email.com",
      },
      theme: {
        color: "#6366f1",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="flex flex-col gap-6">
      <Tabs defaultValue="overview" className="space-y-1">
        <TabsContent value="overview" className="space-y-6">
          {/* Summary Cards + Intro Section */}
          <div className="grid gap-4 md:grid-cols-8 lg:grid-cols-8 items-start">
            <div className="col-span-6 grid grid-cols-2 gap-4">
              {/* Total Balance */}
              <Card className="h-full">
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
              <Card className="h-full">
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
              <Card className="h-full">
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
              <Card className="h-full">
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

            {/* Razorpay Trigger Button */}
            <div className="col-span-2 row-span-2 flex flex-col justify-center gap-4 p-6 bg-muted rounded-md h-full">
              <h2 className="text-xl font-semibold">Kickstart Your Savings</h2>
              <p className="text-sm text-muted-foreground">
                Begin your savings journey today. Track your goals and build financial freedom.
              </p>
              <button
                onClick={() => setShowPayment(true)}
                className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition"
              >
                Start Saving
              </button>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Savings Summary</CardTitle>
                <CardDescription>Your savings growth over the past 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <SavingsChart />
              </CardContent>
            </Card>

            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Savings Forecast</CardTitle>
                <CardDescription>AI-powered prediction of your future savings</CardDescription>
              </CardHeader>
              <CardContent>
                <ForecastCard />
              </CardContent>
            </Card>
          </div>

          {/* Transactions */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
            <Card className="w-full h-full col-span-full">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Your most recent financial activities</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentTransactions />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Analytics & Forecasts */}
      {useClient && (
        <div className="space-y-4">
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
                    This section would contain detailed charts and analytics about your financial data.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

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
                    AI-generated forecasts based on your current financial behavior.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Razorpay Modal */}
      {showPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Start Saving</h3>
            <p className="mb-2">Recommended amount: ₹500</p>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min={1}
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowPayment(false)}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handlePayment}
                className="px-4 py-2 rounded bg-primary text-white hover:bg-primary/90 transition"
              >
                Pay ₹{amount}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

