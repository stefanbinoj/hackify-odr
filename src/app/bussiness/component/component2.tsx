"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
const chartData = [
  { date: "2024-04-01", total: 15, solved: 10 },
  { date: "2024-04-02", total: 12, solved: 8 },
  { date: "2024-04-03", total: 10, solved: 7 },
  { date: "2024-04-04", total: 14, solved: 11 },
  { date: "2024-04-05", total: 13, solved: 9 },
  { date: "2024-04-06", total: 15, solved: 12 },
  { date: "2024-04-07", total: 13, solved: 10 },
  { date: "2024-04-08", total: 15, solved: 13 },
  { date: "2024-04-09", total: 11, solved: 6 },
  { date: "2024-04-10", total: 14, solved: 10 },
  { date: "2024-04-11", total: 12, solved: 8 },
  { date: "2024-04-12", total: 15, solved: 13 },
  { date: "2024-04-13", total: 14, solved: 12 },
  { date: "2024-04-14", total: 11, solved: 7 },
  { date: "2024-04-15", total: 13, solved: 9 },
  { date: "2024-04-16", total: 10, solved: 5 },
  { date: "2024-04-17", total: 15, solved: 11 },
  { date: "2024-04-18", total: 13, solved: 10 },
  { date: "2024-04-19", total: 12, solved: 9 },
  { date: "2024-04-20", total: 8, solved: 5 },
  { date: "2024-04-21", total: 11, solved: 7 },
  { date: "2024-04-22", total: 12, solved: 10 },
  { date: "2024-04-23", total: 13, solved: 11 },
  { date: "2024-04-24", total: 10, solved: 6 },
  { date: "2024-04-25", total: 15, solved: 12 },
  { date: "2024-04-26", total: 9, solved: 7 },
  { date: "2024-04-27", total: 13, solved: 10 },
  { date: "2024-04-28", total: 15, solved: 12 },
  { date: "2024-04-29", total: 11, solved: 8 },
  { date: "2024-04-30", total: 14, solved: 11 },
  { date: "2024-05-01", total: 13, solved: 10 },
  { date: "2024-05-02", total: 12, solved: 9 },
  { date: "2024-05-03", total: 15, solved: 12 },
  { date: "2024-05-04", total: 10, solved: 7 },
  { date: "2024-05-05", total: 13, solved: 10 },
  { date: "2024-05-06", total: 11, solved: 8 },
  { date: "2024-05-07", total: 15, solved: 13 },
  { date: "2024-05-08", total: 12, solved: 9 },
  { date: "2024-05-09", total: 10, solved: 7 },
  { date: "2024-05-10", total: 13, solved: 11 },
  { date: "2024-05-11", total: 14, solved: 12 },
  { date: "2024-05-12", total: 9, solved: 6 },
  { date: "2024-05-13", total: 12, solved: 9 },
  { date: "2024-05-14", total: 11, solved: 8 },
  { date: "2024-05-15", total: 13, solved: 10 },
  { date: "2024-05-16", total: 10, solved: 7 },
  { date: "2024-05-17", total: 14, solved: 11 },
  { date: "2024-05-18", total: 13, solved: 9 },
  { date: "2024-05-19", total: 11, solved: 8 },
  { date: "2024-05-20", total: 12, solved: 9 },
]

const chartConfig = {
  views: {
    label: "Page Views",
  },
  total: {
    label: "Total disputes",
    color: "#f08a24",
  },
  solved: {
    label: "Solved disputes",
    color: "#45c92a",
  },
} satisfies ChartConfig

const Component2 = () => {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("total")
  const total = React.useMemo(
    () => ({
      total: chartData.reduce((acc, curr) => acc + curr.total, 0),
      solved: chartData.reduce((acc, curr) => acc + curr.solved, 0),
    }),
    [],
  )
  return (
    <div className="ml-[-180px]">
      <Card className="max-w-7xl">
        <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
          <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
            <CardTitle>Line Chart - Disputes</CardTitle>
            <CardDescription>
              Showing total disputes for the last 3 months
            </CardDescription>
          </div>
          <div className="flex">
            {["total", "solved"].map((key) => {
              const chart = key as keyof typeof chartConfig
              return (
                <button
                  key={chart}
                  data-active={activeChart === chart}
                  className="data-[active=true]:bg-muted/50 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l sm:border-t-0 sm:border-l sm:px-8 sm:py-6"
                  onClick={() => setActiveChart(chart)}
                >
                  <span className="text-muted-foreground text-xs">
                    {chartConfig[chart].label}
                  </span>
                  <span className="text-lg leading-none font-bold sm:text-3xl">
                    {total[key as keyof typeof total].toLocaleString()}
                  </span>
                </button>
              )
            })}
          </div>
        </CardHeader>
        <CardContent className="px-2 sm:p-6">
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[360px] w-full"
          >
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  const date = new Date(value)
                  return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })
                }}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    className="w-[150px]"
                    nameKey="views"
                    labelFormatter={(value) => {
                      return new Date(value).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })
                    }}
                  />
                }
              />
              <Line
                dataKey={activeChart}
                type="monotone"
                stroke={`var(--color-${activeChart})`}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}

export default Component2
