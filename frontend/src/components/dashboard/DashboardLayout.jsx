"use client";

import React, { useState, useEffect } from "react";
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
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DashboardContent from "./Dashboard";
import AnalyticsView from "@/components/dashboard/AnalyticsView";
import ForecastsView from "@/components/dashboard/ForecastsView";
import ProfileView from "@/components/dashboard/ProfileView";
import { LoginFormPopup } from "@/components/dashboard/AuthLogin"; // Import the popup

export function DashboardLayout() {
  const [activeView, setActiveView] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [theme, setTheme] = useState("light");
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State for popup

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleLogout = () => {
    // Show login popup instead of redirecting
    setIsLoginOpen(true);
  };

  const closeLogin = () => {
    setIsLoginOpen(false);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const menuItems = [
    { title: "Dashboard", icon: Home, value: "dashboard" },
    { title: "Analytics", icon: BarChart3, value: "analytics" },
    { title: "Forecasts", icon: LineChart, value: "forecasts" },
    { title: "Profile", icon: Settings, value: "profile" },
  ];

  const renderDashboardContent = () => {
    switch (activeView) {
      case "dashboard":
        return <DashboardContent />;
      case "analytics":
        return <AnalyticsView />;
      case "forecasts":
        return <ForecastsView />;
      case "profile":
        return <ProfileView theme={theme} toggleTheme={toggleTheme} />;
    }
  };

  return (
    <div className="flex min-h-screen w-full dark:bg-gray-900">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-16"
        } transition-all duration-300 border-r bg-muted p-4 flex-shrink-0 dark:bg-gray-800 dark:border-gray-700`}
      >
        <div className="flex items-center gap-2 mb-8">
          <DollarSign className="h-6 w-6 text-primary dark:text-blue-400" />
          {sidebarOpen && (
            <span className="text-xl font-bold dark:text-gray-100">FinTrack</span>
          )}
        </div>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <div
              key={item.value}
              onClick={() => setActiveView(item.value)}
              className={`flex items-center p-2 rounded-md cursor-pointer transition ${
                activeView === item.value
                  ? "bg-primary text-white dark:bg-blue-600 dark:text-gray-100"
                  : "dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              <item.icon className="h-5 w-5" />
              {sidebarOpen && <span className="ml-2">{item.title}</span>}
            </div>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="flex justify-between items-center p-4 border-b flex-shrink-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-semibold dark:text-gray-100">
              {menuItems.find((item) => item.value === activeView)?.title ||
                "Dashboard"}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="gap-1 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  <span>John Doe</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="dark:bg-gray-800 dark:border-gray-700"
              >
                <DropdownMenuLabel className="dark:text-gray-200">
                  My Account
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="dark:bg-gray-700" />
                <DropdownMenuItem className="dark:text-gray-200 dark:hover:bg-gray-700">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="dark:text-gray-200 dark:hover:bg-gray-700">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="dark:bg-gray-700" />
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback className="dark:bg-gray-600 dark:text-gray-100">
                JD
              </AvatarFallback>
            </Avatar>
          </div>
        </header>
        <main className="flex-1 p-6 w-full dark:bg-gray-900">
          {renderDashboardContent()}
        </main>

        {/* Login Popup */}
        <LoginFormPopup isOpen={isLoginOpen} onClose={closeLogin} />
      </div>
    </div>
  );
}