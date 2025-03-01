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
import {
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  Mail,
  MapPin,
  Phone,
  User,
  UserCog,
} from "lucide-react"
import { useState } from "react"

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
  // {
  //   id: 22,
  //   title: "Mediation Initial Review",
  //   description: "Circumstances head",
  //   date: "Mar 24",
  //   completed: true,
  // },
  // {
  //   id: 3,
  //   title: "Assessment",
  //   description: "Initial findings shared",
  //   date: "Apr 2",
  //   completed: true,
  // },
  {
    id: 33,
    title: "Contacting opposite party",
    description: "Contacted opposite party",
    date: "Apr 10",
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
    id: 55,
    title: "Signing of Proposal",
    description: "Signing submitted",
    date: "Apr 29",
    completed: false,
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

interface HorizontalTimelineProps {
  totalDays: number
  currentDay: number
  className?: string
}

function HorizontalTimeline({
  totalDays = 45,
  currentDay = 20,
  className,
}: HorizontalTimelineProps) {
  // Calculate progress percentage
  const progressPercentage = (currentDay / totalDays) * 100

  return (
    <div className={cn("relative mx-auto w-full max-w-4xl px-4", className)}>
      <div className="relative mb-8">
        {/* Timeline bar */}
        <div className="h-2 rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-gray-400"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {/* Current day marker/pointer */}
        <div
          className="absolute top-0 -mt-1 h-4 w-4 -translate-x-1/2 transform rounded-full bg-orange-500"
          style={{ left: `${progressPercentage}%` }}
        >
          {/* Pointer label */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 transform rounded bg-orange-500 px-2 py-1 text-xs whitespace-nowrap text-white">
            Day {currentDay}
          </div>
          {/* Pointer stem */}
          <div className="absolute top-4 left-1/2 h-5 w-0.5 -translate-x-1/2 transform bg-orange-500"></div>
        </div>

        {/* Only show start and end markers */}
        <div className="mt-6 flex justify-between">
          <div className="flex flex-col items-center">
            <div className="mb-1 h-3 w-0.5 bg-gray-300"></div>
            <span className="text-xs text-gray-500">0</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-1 h-3 w-0.5 bg-gray-300"></div>
            <span className="text-xs text-gray-500">{totalDays}</span>
          </div>
        </div>
      </div>

      {/* Timeline label */}
      <div className="absolute top-15 left-35 mb-16 text-center text-sm font-medium text-gray-700">
        Days: {currentDay} completed, {totalDays - currentDay} remaining
      </div>
      {/* Case details section */}
      <div className="border-border bg-card/50 mt-28 rounded-lg border p-5">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <FileText className="text-primary mr-2 h-5 w-5" />
            <h3 className="font-semibold">Case ID: DR-2023-0456</h3>
          </div>
          <div className="flex items-center">
            <Calendar className="text-primary mr-2 h-5 w-5" />
            <span className="text-sm">Filed on: March 15, 2023</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {/* Petitioner */}
          <div className="border-border border-b pb-4">
            <h4 className="text-muted-foreground mb-3 text-sm font-medium tracking-wider uppercase">
              Petitioner
            </h4>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="flex items-center">
                <User className="text-muted-foreground mr-2 h-4 w-4" />
                <span className="text-sm">Karthik S.</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-muted-foreground mr-2 h-4 w-4" />
                <span className="text-sm">karthik@example.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-muted-foreground mr-2 h-4 w-4" />
                <span className="text-sm">(+91) 9453566</span>
              </div>
              <div className="flex items-start md:col-span-2">
                <MapPin className="text-muted-foreground mt-0.5 mr-2 h-4 w-4" />
                <span className="text-sm">Kochi (683574) , kerala</span>
              </div>
            </div>
          </div>
          <div className="border-border border-b pb-4">
            <h4 className="text-muted-foreground mb-3 text-sm font-medium tracking-wider uppercase">
              Respondent
            </h4>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="flex items-center">
                <User className="text-muted-foreground mr-2 h-4 w-4" />
                <span className="text-sm">Amal Thomas</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-muted-foreground mr-2 h-4 w-4" />
                <span className="text-sm">amal@example.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-muted-foreground mr-2 h-4 w-4" />
                <span className="text-sm">(+91) 9876543</span>
              </div>
              <div className="flex items-start md:col-span-2">
                <MapPin className="text-muted-foreground mt-0.5 mr-2 h-4 w-4" />
                <span className="text-sm">456 Chalakudy, Kerala</span>
              </div>
            </div>
          </div>

          {/* Mediator */}
          <div>
            <h4 className="text-muted-foreground mb-3 text-sm font-medium tracking-wider uppercase">
              Mediator
            </h4>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="flex items-center">
                <UserCog className="text-muted-foreground mr-2 h-4 w-4" />
                <span className="text-sm">Ayussh Yadav</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-muted-foreground mr-2 h-4 w-4" />
                <span className="text-sm">ayyush.chen@example.com</span>
              </div>
              <div className="flex items-center md:col-span-2">
                <Phone className="text-muted-foreground mr-2 h-4 w-4" />
                <span className="text-sm">(91) 4567890</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const History = () => {
  const [row, setRow] = useState<any>(CASoices[0])

  return (
    <div className="ml-10 min-h-screen flex-col items-center justify-center">
      {/* <div className="mb-10 ml-50 w-fit self-center rounded-2xl px-5 pt-5 shadow-lg">
        <ToggleGroupDemo />
      </div> */}
      <Table className="ml-2 border-2">
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
      <div className="flex">
        <div className="mt-8 ml-5 h-[800px] w-[570px] shadow-md">
          <div className="mx-auto mt-4 w-full max-w-4xl px-4">
            <h2 className="mb-4 text-xl font-semibold">Case Duration</h2>
            <HorizontalTimeline totalDays={30} currentDay={20} />
          </div>
        </div>
        <div className="mt-8 ml-auto w-[450px] max-w-3xl border-orange-400 px-4 py-8 shadow-lg">
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
      </div>
    </div>
  )
}

export default History
