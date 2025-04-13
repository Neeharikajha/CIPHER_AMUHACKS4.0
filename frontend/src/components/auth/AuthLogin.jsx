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

  export function LoginFormPopup({ className, isOpen, onClose, onOpenSignUp, ...props }) {
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
            <CardTitle className="text-2xl dark:text-gray-100">Login</CardTitle>
            <CardDescription className="dark:text-gray-400">
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
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
                  <div className="flex items-center">
                    <Label htmlFor="password" className="dark:text-gray-200">
                      Password
                    </Label>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-gray-100"
                >
                  Login
                </Button>
              </div>
              <div className="mt-4 text-center text-sm dark:text-gray-400">
                Don't have an account?{" "}
                <button
                  onClick={onOpenSignUp}
                  className="underline underline-offset-4 dark:text-gray-300"
                >
                  Sign up
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }