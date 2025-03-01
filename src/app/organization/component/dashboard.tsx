import { ArrowUpRight, Plus } from "lucide-react"
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
    {
      title: "Total Settlement",
      value: "$45,320",
      change: "+15.3%",
      color: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      title: "Upload File",
      value: "Click to Upload",
      icon: <Plus className="h-6 w-6" />,
      color: "bg-teal-50",
      textColor: "text-teal-600",
      isUpload: true,
    },
  ]

  return (
    <>
      <div className="ml-[-180px]">
        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-5 w-[800px]">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`${stat.color} rounded-xl p-5 shadow-sm w-[260px] h-[160px]`}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">{stat.title}</p>
                {stat.icon ? (
                  stat.icon
                ) : (
                  <ArrowUpRight className={`h-4 w-4 ${stat.textColor}`} />
                )}
              </div>
              <div className="mt-4">
                <p className="text-3xl font-bold">{stat.value}</p>
                {!stat.isUpload && (
                  <p className={`mt-1 text-sm ${stat.textColor}`}>
                    {stat.change} from last month
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 ml-[-180px]">
        <Chart2 />
      </div>
    </>
  )
}

export default Dashboard
