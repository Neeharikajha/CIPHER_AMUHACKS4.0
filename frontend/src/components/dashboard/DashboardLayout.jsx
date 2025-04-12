"use client"

import React, { useState } from "react"
import {
  BarChart3,
  DollarSign,
  Home,
  LineChart,
  LogOut,
  Settings,
  User,
  ChevronDown,
  Menu,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import DashboardContent from "./Dashboard"

export function DashboardLayout() {
  const [activeView, setActiveView] = useState("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  const menuItems = [
    { title: "Dashboard", icon: Home, value: "dashboard" },
    { title: "Analytics", icon: BarChart3, value: "analytics" },
    { title: "Forecasts", icon: LineChart, value: "forecasts" },
    { title: "Settings", icon: Settings, value: "settings" },
  ]

  const renderDashboardContent = () => {
    switch (activeView) {
      case "dashboard":
        return <DashboardContent />
      case "analytics":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Analytics Dashboard</CardTitle>
              <CardDescription>
                Detailed analysis of your financial data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-[300px] items-center justify-center rounded-md border border-dashed">
                <div className="flex flex-col items-center gap-2 text-center">
                  <BarChart3 className="h-10 w-10 text-muted-foreground" />
                  <h3 className="text-lg font-semibold">Analytics View</h3>
                  <p className="text-sm text-muted-foreground max-w-md">
                    This section contains detailed charts and analytics about your financial data, spending patterns, and investment performance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      case "forecasts":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Financial Forecasts</CardTitle>
              <CardDescription>
                AI-powered predictions for your financial future
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-[300px] items-center justify-center rounded-md border border-dashed">
                <div className="flex flex-col items-center gap-2 text-center">
                  <LineChart className="h-10 w-10 text-muted-foreground" />
                  <h3 className="text-lg font-semibold">Forecasts View</h3>
                  <p className="text-sm text-muted-foreground max-w-md">
                    This section contains AI-generated forecasts about your future savings, investment growth, and financial milestones based on your current financial behavior.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      case "settings":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>Manage your account preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-[3px] items-center justify-center rounded-md border border-dashed">
                <div className="flex flex-col items-center gap-2 text-center">
                  <Settings className="h-10 w-10 text-muted-foreground" />
                  <h3 className="text-lg font-semibold">Settings View</h3>
                  <p className="text-sm text-muted-foreground max-w-md">
                    Manage your account settings, preferences, and notification options.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      default:
        return <div>Select a view</div>
    }
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-16"
        } transition-all duration-300 border-r bg-muted p-4 overflow-hidden`}
      >
        <div className="flex items-center gap-2 mb-8">
          <DollarSign className="h-6 w-6 text-primary" />
          {sidebarOpen && <span className="text-xl font-bold">FinTrack</span>}
        </div>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <div
              key={item.value}
              onClick={() => setActiveView(item.value)}
              className={`flex items-center p-2 rounded-md cursor-pointer ${
                activeView === item.value ? "bg-primary text-white" : ""
              }`}
            >
              <item.icon className="h-5 w-5 mr-2" />
              {sidebarOpen && <span>{item.title}</span>}
            </div>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <header className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-semibold">
              {menuItems.find((item) => item.value === activeView)?.title || "Dashboard"}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-1">
                  <span>John Doe</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <main className="flex-1 p-6">{renderDashboardContent()}</main>
      </div>
    </div>
  )
}
