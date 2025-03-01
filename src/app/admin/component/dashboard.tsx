import { ArrowUpRight } from "lucide-react"
import Chart1 from "./components/chart1"
import { Chart2 } from "./components/chart2"

const Dashboard = () => {
  const stats = [
    {
      title: "Active Disputes",
      value: "450",
      change: "+12.5%",
      color: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: "Resolved Disputes",
      value: "1260",
      change: "+8.2%",
      color: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      title: "Disputes for Approval",
      value: "2300",
      change: "+5.4%",
      color: "bg-orange-50",
      textColor: "text-orange-600",
    },
    {
      title: "Unapproved Disputes",
      value: "120",
      change: "-3.2%",
      color: "bg-red-50",
      textColor: "text-red-600",
    },
  ]

  return (
    <>
      <div className="ml-[-180px] flex gap-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className={`${stat.color} rounded-xl p-6 shadow-sm`}>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">{stat.title}</p>
                <ArrowUpRight className={`h-4 w-4 ${stat.textColor}`} />
              </div>
              <div className="mt-4">
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className={`mt-1 text-sm ${stat.textColor}`}>
                  {stat.change} from last month
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Chart placeholder */}

        {/* Chart will be added here */}
        <Chart1 />
      </div>
      <div className="mt-10 ml-[-180px]">
        <Chart2 />
      </div>
    </>
  )
}

export default Dashboard
