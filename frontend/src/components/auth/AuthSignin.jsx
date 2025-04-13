"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

export function SignUpFormPopup({ className, isOpen, onClose, onOpenLogin, ...props }) {
  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black/50 dark:bg-black/70",
        className
      )}
      onClick={onClose}
      {...props}
    >
      <Card
        className="relative w-full max-w-md mx-4 dark:bg-gray-800 dark:border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 dark:text-gray-200 dark:hover:bg-gray-700"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </Button>
        <CardHeader>
          <CardTitle className="text-2xl dark:text-gray-100">Sign Up</CardTitle>
          <CardDescription className="dark:text-gray-400">
            Create your account by filling in the details below
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name" className="dark:text-gray-200">
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="dark:text-gray-200">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password" className="dark:text-gray-200">
                  Set Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone" className="dark:text-gray-200">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  required
                  className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="dob" className="dark:text-gray-200">
                  Date of Birth
                </Label>
                <Input
                  id="dob"
                  type="date"
                  required
                  className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                />
              </div>
              <Button
                type="submit"
                className="w-full dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-gray-100"
              >
                Sign Up
              </Button>
            </div>
            <div className="mt-4 text-center text-sm dark:text-gray-400">
              Already have an account?{" "}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  onOpenLogin();
                }}
                className="underline underline-offset-4 dark:text-gray-300"
              >
                Log in
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
