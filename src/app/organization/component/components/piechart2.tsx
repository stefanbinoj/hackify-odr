"use client"

import { TrendingUp } from "lucide-react"
import * as React from "react"
import { Label, Pie, PieChart } from "recharts"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { browser: "chrome", visitors: 500, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 250, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 0, fill: "var(--color-firefox)" },
  // { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 1200, fill: "var(--color-other)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Mediators",
    color: "#59a9fc",  // Brighter blue
  },
  safari: {
    label: "Arbitrators",
    color: "#d48eff",  // Brighter green
  },
  firefox: {
    label: "Users",
    color: "#d48eff",  // Brighter orange
  },
  // edge: {
  //   label: "Edge",
  //   color: "#d48eff",  // Brighter purple
  // },
  other: {
    label: "Users",
    color: "#a3b2c4",  // Brighter grey
  },

} satisfies ChartConfig

export function Component() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <Card className="flex w-[370px] flex-col">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        ></tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          User registrations up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total users since launch
        </div>
      </CardFooter>
    </Card>
  )
}
