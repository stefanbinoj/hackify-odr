import { TrendingUp } from "lucide-react"
import {
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts"

const chartData = [
  { month: "January", Mediator: 186, Arbitrator: 80 },
  { month: "February", Mediator: 305, Arbitrator: 200 },
  { month: "March", Mediator: 237, Arbitrator: 120 },
  { month: "April", Mediator: 173, Arbitrator: 60 },
  { month: "May", Mediator: 209, Arbitrator: 130 },
  { month: "June", Mediator: 214, Arbitrator: 140 },
  { month: "July", Mediator: 254, Arbitrator: 120 },
]

const Chart1 = () => {
  return (
    <div className="w-[800px] rounded-lg bg-white p-4 shadow-md">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Total Hirings</h3>
        <p className="text-sm text-gray-500">January - June 2024</p>
      </div>
      <div className="h-64 w-[700px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 10,
            }}
          >
            <CartesianGrid vertical={false} stroke="#f0f0f0" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <Tooltip />
            <Line
              dataKey="Mediator"
              type="natural"
              stroke="#4f46e5"
              strokeWidth={2}
              dot={{
                fill: "#4f46e5",
                r: 4,
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                fill="#333333"
                fontSize={12}
              />
            </Line>
            <Line
              dataKey="Arbitrator"
              type="natural"
              stroke="#10b981"
              strokeWidth={2}
              dot={{
                fill: "#10b981",
                r: 4,
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-sm">
        <div className="flex items-center gap-1 font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-gray-500">
          Showing total visitors for the last 6 months
        </div>
      </div>
    </div>
  )
}

export default Chart1
