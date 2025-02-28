import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useState } from "react"
import { ToggleGroupDemo } from "./component/selectionComponent"

const CASoices = [
  {
    CASEID: "CAS001",
    PETITIONER: "Karthik S.",
    MEDIATOR: "Anjali Gupta",
    RESPONDENT: "Vikram Singh",
    STATUS: "ONGOING",
  },
  {
    CASEID: "CAS002",
    PETITIONER: "Karthik S.",
    MEDIATOR: "Deepak Reddy",
    RESPONDENT: "Suresh Patel",
    STATUS: "CLOSED",
  },
  {
    CASEID: "CAS003",
    PETITIONER: "Karthik S.",
    MEDIATOR: "Neha Desai",
    RESPONDENT: "Karan Iyer",
    STATUS: "REJECTED",
  },
  {
    CASEID: "CAS004",
    PETITIONER: "Karthik S.",
    MEDIATOR: "Rajesh Mehta",
    RESPONDENT: "Gaurav Yadav",
    STATUS: "ONGOING",
  },
  {
    CASEID: "CAS005",
    PETITIONER: "Karthik S.",
    MEDIATOR: "Amal Raj",
    RESPONDENT: "Amal Raj",
    STATUS: "CLOSED",
  },
  {
    CASEID: "CAS006",
    PETITIONER: "Karthik S.",
    MEDIATOR: "Ravi Verma",
    RESPONDENT: "Siddharth Gupta",
    STATUS: "REJECTED",
  },
]

const History = () => {
  const [row, setRow] = useState<any>(null)
  return (
    <div className="ml-10 min-h-screen flex-col items-center justify-center">
      <div className="mb-10 ml-50 w-fit self-center rounded-2xl px-5 pt-5 shadow-lg">
        <ToggleGroupDemo />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">CASEID</TableHead>
            <TableHead>PETITIONER</TableHead>
            <TableHead>MEDIATOR</TableHead>
            <TableHead>RESPONDENT</TableHead>
            <TableHead>STATUS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {CASoices.map((CASoice) => (
            <TableRow
              key={CASoice.CASEID}
              onClick={() => {
                setRow(CASoice)
              }}
            >
              <TableCell className="font-medium">{CASoice.CASEID}</TableCell>
              <TableCell className="font-medium">
                {CASoice.PETITIONER}
              </TableCell>
              <TableCell>{CASoice.MEDIATOR}</TableCell>
              <TableCell>{CASoice.RESPONDENT}</TableCell>
              <TableCell>
                {CASoice.STATUS == "REJECTED" ? (
                  <p className="text-red-500">Rejected</p>
                ) : CASoice.STATUS == "CLOSED" ? (
                  <p className="text-gray-400">Closed</p>
                ) : (
                  <p className="text-green-500">Ongoing`</p>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default History
