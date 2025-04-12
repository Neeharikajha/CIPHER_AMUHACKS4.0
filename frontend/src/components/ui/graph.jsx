"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export const Chart = React.forwardRef(({ className, ...props }, ref) => {
  return <div className={cn("relative", className)} ref={ref} {...props} />
})
Chart.displayName = "Chart"

export const ChartContainer = React.forwardRef(({ className, data, tooltipOptions, ...props }, ref) => {
  return <div className={cn("relative", className)} ref={ref} {...props} />
})
ChartContainer.displayName = "ChartContainer"

export const ChartTooltip = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute z-50 opacity-0 transition-opacity duration-100 data-[state=open]:opacity-100",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
ChartTooltip.displayName = "ChartTooltip"

export const ChartTooltipContent = React.forwardRef(({ className, valueLabelFormatter, labelFormatter, ...props }, ref) => {
  return (
    <div className={cn("rounded-md border bg-popover p-2 text-sm shadow-sm", className)} ref={ref} {...props}>
      {props.children}
    </div>
  )
})
ChartTooltipContent.displayName = "ChartTooltipContent"

export const ChartLegend = React.forwardRef(({ className, ...props }, ref) => {
  return <div className={cn("flex flex-wrap items-center justify-center gap-2", className)} ref={ref} {...props} />
})
ChartLegend.displayName = "ChartLegend"

export const ChartLegendItem = React.forwardRef(({ className, name, value, color, ...props }, ref) => {
  return (
    <div className={cn("flex items-center gap-1 text-sm", className)} ref={ref} {...props}>
      <span className="block h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
      <span>{name}:</span>
      <span className="font-medium">{value}</span>
    </div>
  )
})
ChartLegendItem.displayName = "ChartLegendItem"
