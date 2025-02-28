"use client"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { CheckCircle, Clock } from "lucide-react"
import { useState } from "react"
import { ToggleGroupDemo } from "./component/selectionComponent"

type TimelineStep = {
  id: number
  title: string
  description: string
  date: string
  completed: boolean
}

const timelineSteps: TimelineStep[] = [
  {
    id: 1,
    title: "Dispute Filed",
    description: "Case opened",
    date: "Mar 15",
    completed: true,
  },
  {
    id: 2,
    title: "Documentation Review",
    description: "Evidence reviewed",
    date: "Mar 22",
    completed: true,
  },
  {
    id: 3,
    title: "Assessment",
    description: "Initial findings shared",
    date: "Apr 2",
    completed: true,
  },
  {
    id: 4,
    title: "Mediation",
    description: "Parties discussion",
    date: "Apr 15",
    completed: true,
  },
  {
    id: 5,
    title: "Resolution Proposal",
    description: "Draft submitted",
    date: "Apr 28",
    completed: true,
  },
  {
    id: 6,
    title: "Final Agreement",
    description: "Pending signatures",
    date: "May 10",
    completed: false,
  },
  {
    id: 7,
    title: "Case Closure",
    description: "Implementation",
    date: "May 20",
    completed: false,
  },
]

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
  const [row, setRow] = useState<any>(CASoices[0])
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
              className={`${row.CASEID === CASoice.CASEID ? "bg-blue-300" : ""}`}
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
      {row && (
        <div className="mx-auto mt-8 w-[500px] max-w-3xl border-orange-400 px-4 py-8 shadow-lg">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 transform bg-gray-200"></div>

            {timelineSteps.map((step, index) => (
              <div key={step.id} className="relative mb-6 last:mb-0">
                <div className="flex items-center">
                  {/* Left content */}
                  <div
                    className={cn(
                      "w-[45%] pr-4",
                      index % 2 === 0 ? "text-right" : "text-right opacity-0",
                    )}
                  >
                    {index % 2 === 0 && (
                      <>
                        <h3 className="text-sm font-semibold">{step.title}</h3>
                        <p className="text-muted-foreground text-xs">
                          {step.date}
                        </p>
                        <p className="text-muted-foreground text-xs">
                          {step.description}
                        </p>
                      </>
                    )}
                  </div>

                  {/* Center point */}
                  <div className="absolute left-1/2 flex -translate-x-1/2 transform items-center justify-center">
                    <div
                      className={cn(
                        "z-10 rounded-full border",
                        step.completed
                          ? "border-green-500 bg-green-100"
                          : "border-gray-300 bg-gray-100",
                      )}
                    >
                      {step.completed ? (
                        <CheckCircle className="h-3 w-3 text-green-500" />
                      ) : (
                        <Clock className="h-3 w-3 text-gray-400" />
                      )}
                    </div>
                  </div>

                  {/* Right content */}
                  <div
                    className={cn(
                      "w-[45%] pl-12",
                      index % 2 === 1 ? "text-left" : "text-left opacity-0",
                    )}
                  >
                    {index % 2 === 1 && (
                      <>
                        <h3 className="text-sm font-semibold">{step.title}</h3>
                        <p className="text-muted-foreground text-xs">
                          {step.date}
                        </p>
                        <p className="text-muted-foreground text-xs">
                          {step.description}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default History
