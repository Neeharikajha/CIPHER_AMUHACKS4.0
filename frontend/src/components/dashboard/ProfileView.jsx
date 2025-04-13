"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export default function ProfileView({ theme, toggleTheme }) {
  return (
    <Card className="max-w-2xl mx-auto dark:bg-gray-800 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="dark:text-gray-100">User Profile</CardTitle>
        <CardDescription className="dark:text-gray-400">
          Manage your personal information and preferences
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 dark:text-gray-200">
        <div className="flex flex-col items-center gap-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src="/placeholder.svg?height=96&width=96" alt="User" />
            <AvatarFallback className="dark:bg-gray-600 dark:text-gray-100">JD</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <h2 className="text-2xl font-semibold dark:text-gray-100">John Doe</h2>
            <p className="text-sm text-muted-foreground dark:text-gray-400">
              john.doe@example.com
            </p>
            <p className="text-sm text-muted-foreground dark:text-gray-400">
              Joined: January 15, 2023
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium dark:text-gray-100">Account Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="text-sm font-medium dark:text-gray-300">Full Name</div>
              <div className="rounded-md border px-4 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200">
                John Doe
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium dark:text-gray-300">Email Address</div>
              <div className="rounded-md border px-4 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200">
                john.doe@example.com
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium dark:text-gray-300">Phone Number</div>
              <div className="rounded-md border px-4 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200">
                +1 (555) 123-4567
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium dark:text-gray-300">Date of Birth</div>
              <div className="rounded-md border px-4 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200">
                May 15, 1985
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium dark:text-gray-100">Preferences</h3>
          <div className="flex items-center justify-between p-4 bg-muted rounded-md dark:bg-gray-700">
            <span className="text-sm font-medium dark:text-gray-200">Theme</span>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className="flex items-center gap-2 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-600"
            >
              {theme === "light" ? (
                <>
                  <Moon className="h-4 w-4" />
                  Switch to Dark
                </>
              ) : (
                <>
                  <Sun className="h-4 w-4" />
                  Switch to Light
                </>
              )}
            </Button>
          </div>
          <div className="flex items-center justify-between p-4 bg-muted rounded-md dark:bg-gray-700">
            <span className="text-sm font-medium dark:text-gray-200">Notification Preferences</span>
            <Button
              variant="outline"
              size="sm"
              className="dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-600"
            >
              Manage
            </Button>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button
            variant="outline"
            className="dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-600"
          >
            Cancel
          </Button>
          <Button className="dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-gray-100">
            Save Changes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}