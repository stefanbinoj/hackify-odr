"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { Calendar, CheckCircle, Clock, FileText, Mail, MapPin, Phone, User, UserCog, X } from "lucide-react"
import { useState } from "react"

const timelineSteps = [
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

const cases = [
  {
    caseId: "CAS001",
    respondent: "Vikram Singh",
    mediator: "Anjali Gupta",
    status: "ONGOING",
    details: {
      petitioner: {
        name: "Karthik S.",
        email: "karthik@example.com",
        phone: "(+91) 9453566",
        address: "Kochi (683574), Kerala"
      },
      respondent: {
        name: "Vikram Singh",
        email: "vikram@example.com",
        phone: "(+91) 9876543",
        address: "456 Mumbai, Maharashtra"
      },
      mediator: {
        name: "Anjali Gupta",
        email: "anjali@example.com",
        phone: "(+91) 8765432"
      },
      filingDate: "March 15, 2023"
    }
  },
  {
    caseId: "CAS002",
    respondent: "Rahul Kumar",
    mediator: "Priya Sharma",
    status: "CLOSED",
    details: {
      petitioner: {
        name: "Amit Shah",
        email: "amit@example.com",
        phone: "(+91) 9453577",
        address: "Delhi (110001), India"
      },
      respondent: {
        name: "Rahul Kumar",
        email: "rahul@example.com",
        phone: "(+91) 9876544",
        address: "Bangalore, Karnataka"
      },
      mediator: {
        name: "Priya Sharma",
        email: "priya@example.com",
        phone: "(+91) 8765433"
      },
      filingDate: "April 1, 2023"
    }
  },
  {
    caseId: "CAS003",
    respondent: "Meera Patel",
    mediator: "Rajesh Kumar",
    status: "ONGOING",
    details: {
      petitioner: { name: "Suresh M.", email: "suresh@example.com", phone: "(+91) 9453588", address: "Chennai, Tamil Nadu" },
      respondent: { name: "Meera Patel", email: "meera@example.com", phone: "(+91) 9876545", address: "Ahmedabad, Gujarat" },
      mediator: { name: "Rajesh Kumar", email: "rajesh@example.com", phone: "(+91) 8765434" },
      filingDate: "April 15, 2023"
    }
  },
  // Add more cases as needed
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
  const progressPercentage = (currentDay / totalDays) * 100

  return (
    <div className={cn("relative mx-auto w-full max-w-4xl px-4", className)}>
      <div className="relative mb-8">
        <div className="h-2 rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-gray-400"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        <div
          className="absolute top-0 -mt-1 h-4 w-4 -translate-x-1/2 transform rounded-full bg-orange-500"
          style={{ left: `${progressPercentage}%` }}
        >
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 transform whitespace-nowrap rounded bg-orange-500 px-2 py-1 text-xs text-white">
            Day {currentDay}
          </div>
          <div className="absolute top-4 left-1/2 h-5 w-0.5 -translate-x-1/2 transform bg-orange-500"></div>
        </div>

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

      <div className="absolute top-15 left-35 mb-16 text-center text-sm font-medium text-gray-700">
        Days: {currentDay} completed, {totalDays - currentDay} remaining
      </div>
    </div>
  )
}

const Component1 = () => {
  const [selectedCase, setSelectedCase] = useState<any>(null)
  const [showModal, setShowModal] = useState(false)

  const handleRowClick = (caseData: any) => {
    setSelectedCase(caseData)
    setShowModal(true)
  }

  return (
    <>
      <div className="p-0 -ml-[180px]">
        <Table className="w-[calc(100vw-150px)] rounded-xl border border-gray-200 shadow-sm">
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="rounded-tl-xl py-4 font-semibold text-gray-700 w-[15%]">Case ID</TableHead>
              <TableHead className="font-semibold text-gray-700 w-[35%]">Respondent</TableHead>
              <TableHead className="font-semibold text-gray-700 w-[35%]">Mediator/Arbitrator</TableHead>
              <TableHead className="rounded-tr-xl font-semibold text-gray-700 w-[15%]">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cases.map((caseItem) => (
              <TableRow
                key={caseItem.caseId}
                className="cursor-pointer hover:bg-gray-50"
                onClick={() => handleRowClick(caseItem)}
              >
                <TableCell className="font-medium">{caseItem.caseId}</TableCell>
                <TableCell>{caseItem.respondent}</TableCell>
                <TableCell>{caseItem.mediator}</TableCell>
                <TableCell>
                  <span className={`rounded-full px-3 py-1 text-sm ${caseItem.status === "ONGOING" ? "bg-green-100 text-green-700" :
                    caseItem.status === "CLOSED" ? "bg-gray-100 text-gray-700" :
                      "bg-red-100 text-red-700"
                    }`}>
                    {caseItem.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {showModal && selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="relative h-[95vh] w-[1200px] overflow-y-auto rounded-2xl bg-white/95 p-6 shadow-2xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 rounded-full p-2 hover:bg-gray-100/80 transition-colors"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>

            <div className="mb-6 flex items-center justify-between border-b border-gray-200/80 pb-4">
              <div className="flex items-center">
                <FileText className="mr-2 h-5 w-5 text-orange-500" />
                <h3 className="text-xl font-semibold text-gray-800">Case ID: {selectedCase.caseId}</h3>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-orange-500" />
                <span className="text-sm text-gray-600">Filed on: {selectedCase.details.filingDate}</span>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-[400px] space-y-4">
                <div className="rounded-xl bg-white/50 p-4 shadow-md backdrop-blur-sm">
                  <h4 className="mb-3 text-sm font-medium uppercase text-gray-600">Petitioner</h4>
                  <div className="grid gap-2">
                    <DetailItem icon={<User className="h-5 w-5" />} text={selectedCase.details.petitioner.name} />
                    <DetailItem icon={<Mail className="h-5 w-5" />} text={selectedCase.details.petitioner.email} />
                    <DetailItem icon={<Phone className="h-5 w-5" />} text={selectedCase.details.petitioner.phone} />
                    <DetailItem icon={<MapPin className="h-5 w-5" />} text={selectedCase.details.petitioner.address} />
                  </div>
                </div>

                <div className="rounded-xl bg-white/50 p-4 shadow-md backdrop-blur-sm">
                  <h4 className="mb-3 text-sm font-medium uppercase text-gray-600">Respondent</h4>
                  <div className="grid gap-2">
                    <DetailItem icon={<User className="h-5 w-5" />} text={selectedCase.details.respondent.name} />
                    <DetailItem icon={<Mail className="h-5 w-5" />} text={selectedCase.details.respondent.email} />
                    <DetailItem icon={<Phone className="h-5 w-5" />} text={selectedCase.details.respondent.phone} />
                    <DetailItem icon={<MapPin className="h-5 w-5" />} text={selectedCase.details.respondent.address} />
                  </div>
                </div>

                <div className="rounded-xl bg-white/50 p-4 shadow-md backdrop-blur-sm">
                  <h4 className="mb-3 text-sm font-medium uppercase text-gray-600">Mediator</h4>
                  <div className="grid gap-2">
                    <DetailItem icon={<UserCog className="h-5 w-5" />} text={selectedCase.details.mediator.name} />
                    <DetailItem icon={<Mail className="h-5 w-5" />} text={selectedCase.details.mediator.email} />
                    <DetailItem icon={<Phone className="h-5 w-5" />} text={selectedCase.details.mediator.phone} />
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div className="w-full rounded-xl bg-white/50 p-6 shadow-md">
                  <div className="w-full">
                    <h2 className="mb-4 text-xl font-semibold text-gray-800">Case Duration</h2>
                    <HorizontalTimeline totalDays={30} currentDay={20} />
                  </div>
                </div>

                <div className="w-full rounded-xl bg-white/50 p-6 shadow-lg">
                  <div className="relative">
                    <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 transform bg-gray-200"></div>
                    {timelineSteps.map((step, index) => (
                      <div key={step.id} className="relative mb-6 last:mb-0">
                        <div className="flex items-center">
                          <div className={cn(
                            "w-[45%] pr-4",
                            index % 2 === 0 ? "text-right" : "text-right opacity-0",
                          )}>
                            {index % 2 === 0 && (
                              <>
                                <h3 className="text-sm font-semibold text-gray-800">{step.title}</h3>
                                <p className="text-xs text-gray-600">{step.date}</p>
                                <p className="text-xs text-gray-500">{step.description}</p>
                              </>
                            )}
                          </div>

                          <div className="absolute left-1/2 flex -translate-x-1/2 transform items-center justify-center">
                            <div className={cn(
                              "z-10 rounded-full border-2 p-1",
                              step.completed ? "border-green-500 bg-green-50" : "border-gray-300 bg-gray-50",
                            )}>
                              {step.completed ? (
                                <CheckCircle className="h-4 w-4 text-green-500" />
                              ) : (
                                <Clock className="h-4 w-4 text-gray-400" />
                              )}
                            </div>
                          </div>

                          <div className={cn(
                            "w-[45%] pl-12",
                            index % 2 === 1 ? "text-left" : "text-left opacity-0",
                          )}>
                            {index % 2 === 1 && (
                              <>
                                <h3 className="text-sm font-semibold text-gray-800">{step.title}</h3>
                                <p className="text-xs text-gray-600">{step.date}</p>
                                <p className="text-xs text-gray-500">{step.description}</p>
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
          </div>
        </div>
      )}
    </>
  )
}

const DetailItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center space-x-3 rounded-lg bg-white/30 p-3 shadow-sm">
    <span className="text-gray-500">{icon}</span>
    <span className="text-sm text-gray-700">{text}</span>
  </div>
)

export default Component1
