import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

interface DisputeDistributionChartProps {
    totalDisputes: number
}

export const DisputeDistributionChart = ({ totalDisputes }: DisputeDistributionChartProps) => {
    const data = [
        { name: "Active", value: 450, color: "#3B82F6" },  // blue
        { name: "Resolved", value: 1260, color: "#22C55E" }, // green
        { name: "For Approval", value: 2300, color: "#F97316" }, // orange
        { name: "Unapproved", value: 120, color: "#EF4444" }, // red
    ]

    return (
        <div className="relative h-[300px]">
            <h3 className="text-lg font-semibold mb-4">Dispute Distribution</h3>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-3xl font-bold">{totalDisputes}</p>
                <p className="text-sm text-gray-500">Total Disputes</p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-sm text-gray-600">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
} 