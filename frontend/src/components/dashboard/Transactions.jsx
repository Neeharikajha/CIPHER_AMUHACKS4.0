"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

const transactions = [
  {
    id: "1",
    name: "Grocery Store",
    amount: "-$85.00",
    date: "Today, 2:45 PM",
    status: "completed",
    type: "expense",
    icon: "🛒",
  },
  {
    id: "2",
    name: "Salary Deposit",
    amount: "+$3,500.00",
    date: "Yesterday, 9:00 AM",
    status: "completed",
    type: "income",
    icon: "💼",
  },
  {
    id: "3",
    name: "Electric Bill",
    amount: "-$120.00",
    date: "Apr 10, 2025",
    status: "completed",
    type: "expense",
    icon: "⚡",
  },
  {
    id: "4",
    name: "Savings Transfer",
    amount: "-$500.00",
    date: "Apr 8, 2025",
    status: "completed",
    type: "transfer",
    icon: "🏦",
  },
  {
    id: "5",
    name: "Freelance Payment",
    amount: "+$750.00",
    date: "Apr 5, 2025",
    status: "completed",
    type: "income",
    icon: "💻",
  },
]

export function RecentTransactions() {
  return (
    <ScrollArea className="h-[300px]">
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between space-x-4 rounded-md border p-3">
            <div className="flex items-center space-x-4">
              <Avatar className="h-9 w-9">
                <AvatarFallback>{transaction.icon}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium leading-none">{transaction.name}</p>
                <p className="text-sm text-muted-foreground">{transaction.date}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge
                variant={
                  transaction.type === "income" ? "success" : transaction.type === "expense" ? "destructive" : "outline"
                }
                className="hidden sm:inline-flex"
              >
                {transaction.type}
              </Badge>
              <span
                className={
                  transaction.type === "income"
                    ? "font-medium text-emerald-600"
                    : transaction.type === "expense"
                    ? "font-medium text-rose-600"
                    : "font-medium"
                }
              >
                {transaction.amount}
              </span>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
