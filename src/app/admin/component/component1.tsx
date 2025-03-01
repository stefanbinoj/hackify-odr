import { Component } from "@/app/organization/component/components/piechart2"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ArrowUpRight } from "lucide-react"
import { useState } from "react"

const Component1 = () => {
  const [row, setRow] = useState<any>(null)

  const stats = [
    {
      title: "Mediators",
      value: "450",
      change: "+12.5%",
      color: "bg-indigo-50",
      textColor: "text-indigo-600",
    },
    {
      title: "Arbitrators",
      value: "1260",
      change: "+8.2%",
      color: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      title: "Unapproved Mediators",
      value: "2300",
      change: "+5.4%",
      color: "bg-amber-50",
      textColor: "text-amber-600",
    },
    {
      title: "Unapproved Arbitrators",
      value: "120",
      change: "-3.2%",
      color: "bg-rose-50",
      textColor: "text-rose-600",
    },
  ]

  const users = [
    { id: "MED001", name: "Anjali Gupta", role: "Mediator" },
    { id: "ARB001", name: "Vikram Singh", role: "Arbitrator" },
    { id: "MED002", name: "Deepak Reddy", role: "Mediator" },
    { id: "ARB002", name: "Priya Sharma", role: "Arbitrator" },
    { id: "MED003", name: "Rajesh Kumar", role: "Mediator" },
    { id: "ARB003", name: "Sneha Patel", role: "Arbitrator" },
    { id: "MED004", name: "Arun Verma", role: "Mediator" },
    { id: "ARB004", name: "Kavita Nair", role: "Arbitrator" },
    { id: "MED005", name: "Sanjay Mehta", role: "Mediator" },
    { id: "ARB005", name: "Neha Desai", role: "Arbitrator" },
    { id: "MED006", name: "Amit Shah", role: "Mediator" },
    { id: "ARB006", name: "Ravi Krishnan", role: "Arbitrator" },
    { id: "MED007", name: "Meera Iyer", role: "Mediator" },
    { id: "ARB007", name: "Suresh Kumar", role: "Arbitrator" },
    { id: "MED008", name: "Kiran Bhat", role: "Mediator" },
    { id: "ARB008", name: "Anita Reddy", role: "Arbitrator" },
    { id: "MED009", name: "Prakash Jha", role: "Mediator" },
    { id: "ARB009", name: "Divya Menon", role: "Arbitrator" },
    { id: "MED010", name: "Shweta Singh", role: "Mediator" },
    { id: "ARB010", name: "Arjun Nair", role: "Arbitrator" },
    { id: "MED011", name: "Rahul Kapoor", role: "Mediator" },
    { id: "ARB011", name: "Maya Pillai", role: "Arbitrator" },
    { id: "MED012", name: "Vivek Sharma", role: "Mediator" },
    { id: "ARB012", name: "Pooja Hegde", role: "Arbitrator" },
    { id: "MED013", name: "Nandini Roy", role: "Mediator" },
    { id: "ARB013", name: "Ajay Mathur", role: "Arbitrator" },
    { id: "MED014", name: "Sarita Malik", role: "Mediator" },
    { id: "ARB014", name: "Rohit Shetty", role: "Arbitrator" },
    { id: "MED015", name: "Alok Nath", role: "Mediator" },
    { id: "ARB015", name: "Sheela Rani", role: "Arbitrator" },
    { id: "MED016", name: "Kunal Khanna", role: "Mediator" },
    { id: "ARB016", name: "Rekha Menon", role: "Arbitrator" },
    { id: "MED017", name: "Tarun Bose", role: "Mediator" },
    { id: "ARB017", name: "Jaya Kumar", role: "Arbitrator" },
    { id: "MED018", name: "Mohan Das", role: "Mediator" },
    { id: "ARB018", name: "Leela Krishna", role: "Arbitrator" },
    { id: "MED019", name: "Sudhir Mishra", role: "Mediator" },
    { id: "ARB019", name: "Padma Lakshmi", role: "Arbitrator" },
    { id: "MED020", name: "Girish Karnad", role: "Mediator" },
    { id: "ARB020", name: "Uma Devi", role: "Arbitrator" },
    { id: "MED021", name: "Bharat Bhushan", role: "Mediator" },
    { id: "ARB021", name: "Radha Swamy", role: "Arbitrator" },
    { id: "MED022", name: "Chetan Bhagat", role: "Mediator" },
    { id: "ARB022", name: "Lakshmi Rao", role: "Arbitrator" },
    { id: "MED023", name: "Dinesh Mohan", role: "Mediator" },
    { id: "ARB023", name: "Sarala Devi", role: "Arbitrator" },
    { id: "MED024", name: "Pankaj Udhas", role: "Mediator" },
    { id: "ARB024", name: "Kamala Harris", role: "Arbitrator" },
    { id: "MED025", name: "Ramesh Sippy", role: "Mediator" },
    { id: "ARB025", name: "Indira Varma", role: "Arbitrator" },
  ]

  return (
    <div className="flex gap-8 ml-[-180px]">
      <div className="flex flex-col">
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
        <div className="mt-8">
          <Component />
        </div>
      </div>

      <div className="w-[780px]">
        <Table className="border-2">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow
                className={`cursor-pointer ${row?.id === user.id ? "bg-blue-300" : ""}`}
                key={user.id}
                onClick={() => setRow(user)}
              >
                <TableCell className="font-medium">{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell className={user.role === "Mediator" ? "text-indigo-600" : "text-purple-600"}>
                  {user.role}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default Component1
