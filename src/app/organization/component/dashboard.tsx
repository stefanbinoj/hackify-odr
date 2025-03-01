import { ArrowUpRight, Plus, Search } from "lucide-react"
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
      title: "Track Cases",
      value: "Track\nDisputes",
      icon: <Search className="h-12 w-12" />,
      color: "bg-indigo-50",
      textColor: "text-indigo-600",
      isAction: true,
    },
    {
      title: "Disputes for Approval",
      value: "2300",
      change: "+5.4%",
      color: "bg-orange-50",
      textColor: "text-orange-600",
    },
    {
      title: "Total Settlement",
      value: "$45,320",
      change: "+15.3%",
      color: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      title: "File Cases",
      value: "Upload\nFile",
      icon: <Plus className="h-12 w-12" />,
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
              className={`${stat.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 w-[260px] h-[160px] flex flex-col justify-between border border-gray-100`}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold tracking-wide">{stat.title}</p>
                <div className={`${stat.textColor} bg-white p-2 rounded-lg shadow-sm`}>
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
              <div className="mt-2">
                {stat.isAction || stat.isUpload ? (
                  <div className="flex items-center gap-4 cursor-pointer">
                    <div className={`${stat.textColor} bg-white p-3 rounded-lg shadow-sm`}>
                      {stat.icon}
                    </div>
                    <span className="text-xl font-medium text-gray-600 whitespace-pre-line leading-tight">{stat.value}</span>
                  </div>
                ) : (
                  <>
                    <p className="text-3xl font-bold tracking-tight">{stat.value}</p>
                    <p className={`mt-2 text-sm font-medium ${stat.textColor}`}>
                      {stat.change} from last month
                    </p>
                  </>
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
