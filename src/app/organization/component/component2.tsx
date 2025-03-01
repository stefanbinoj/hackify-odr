"use client"

import { cn } from "@/lib/utils"
import {
  Archive,
  ArrowLeft,
  ArrowRight,
  Clock,
  MoreVertical,
  Search,
  Trash,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

type Message = {
  id: string
  sender: {
    name: string
    email: string
    initials: string
  }
  subject: string
  preview: string
  content: string
  date: string
  timeAgo: string
  labels: string[]
  read: boolean
}

const messages: Message[] = [
  {
    id: "1",
    sender: {
      name: "Amal (Mediator)",
      email: "amal.mediator@example.com",
      initials: "AM",
    },
    subject: "Diskna Dispute Update",
    preview:
      "Hello Karthik, I wanted to inform you that the next hearing for the Diskna dispute with your neighbor is scheduled for March 5, 2025. Please remember to bring all property-related documents.",
    content:
      "Hello Karthik, this is Amal, your mediator. Regarding your Diskna dispute with your neighbor, the next hearing is scheduled for March 5, 2025. During this session, we will conduct a property boundary survey to clarify the situation. Please ensure you bring all relevant documents such as your land titles, maps, and any previous communication with your neighbor.\n\nIf you have any questions or need assistance in preparing for the session, feel free to reach out. I'll be here to guide you.",
    date: "Feb 25, 2025, 10:30:00 AM",
    timeAgo: "3 days ago",
    labels: ["diskna dispute", "important", "hearing"],
    read: false,
  },
  {
    id: "2",
    sender: {
      name: "Karthik",
      email: "karthik.krishna@example.com",
      initials: "KK",
    },
    subject: "Re: Bank Loan Restructuring Update",
    preview:
      "Hi Amal, I’ve received the latest update from the bank. They are waiting for my revised payment proposal. Can you advise how to structure the proposal?",
    content:
      "Hi Amal, I’ve received an update from the bank regarding my loan restructuring. They have reviewed my initial application and are now waiting for a revised payment proposal. Could you help me outline a payment schedule that would be acceptable to the bank, taking into account my current financial situation?\n\nLooking forward to your advice.\n\nBest, Karthik",
    date: "Feb 24, 2025, 4:00:00 PM",
    timeAgo: "4 days ago",
    labels: ["loan dispute", "important", "work"],
    read: true,
  },
  {
    id: "3",
    sender: {
      name: "Amal (Mediator)",
      email: "amal.mediator@example.com",
      initials: "AM",
    },
    subject: "Settlement Proposal - Bank Loan Dispute",
    preview:
      "Following our mediation session, I've drafted a settlement proposal that the bank has reviewed. It addresses your concerns and provides options for restructuring the loan.",
    content:
      "Hi Karthik, following our last mediation session regarding your bank loan dispute, I’ve prepared a settlement proposal that the bank has reviewed. This proposal offers a revised payment schedule based on your current financial capabilities.\n\nThe proposal includes:\n1. A new payment plan over 24 months\n2. Reduced interest rates\n3. A final lump sum settlement after 12 months\n\nPlease review the attached document and let me know if any adjustments are required before the meeting with the bank on March 10, 2025.\n\nBest regards,\nAmal (Mediator)",
    date: "Feb 23, 2025, 2:15:00 PM",
    timeAgo: "5 days ago",
    labels: ["loan dispute", "settlement", "work"],
    read: true,
  },
  {
    id: "4",
    sender: {
      name: "Amal (Mediator)",
      email: "amal.mediator@example.com",
      initials: "AM",
    },
    subject: "Mediation Session Reminder",
    preview:
      "Just a reminder that the mediation session for your Diskna dispute is coming up. Please ensure all documents are prepared.",
    content:
      "Hi Karthik, this is a friendly reminder about your upcoming mediation session for the Diskna dispute with your neighbor. It is scheduled for March 5, 2025.\n\nPlease ensure that you have the following documents ready:\n1. Property title deed\n2. Boundary survey maps\n3. Any previous correspondence with your neighbor\n\nIf you need any assistance before the hearing, don't hesitate to get in touch.\n\nLooking forward to helping you resolve this issue.\n\nBest regards,\nAmal (Mediator)",
    date: "Feb 22, 2025, 10:00:00 AM",
    timeAgo: "6 days ago",
    labels: ["diskna dispute", "reminder", "work"],
    read: false,
  },
  {
    id: "5",
    sender: {
      name: "Karthik",
      email: "karthik.krishna@example.com",
      initials: "KK",
    },
    subject: "Bank Loan - Follow-up",
    preview:
      "I’ve reviewed the bank’s proposal. It seems fair, but I’d like your opinion before finalizing the agreement. What do you think?",
    content:
      "Hi Amal, I’ve gone through the bank's latest proposal for restructuring my loan. It seems fair overall, but I’d appreciate your opinion before I finalize the agreement.\n\nThe terms look reasonable, but I want to ensure that the payment schedule is achievable and that the interest rates are manageable given my current situation.\n\nCould we discuss this further before I meet with the bank on March 10, 2025?\n\nBest regards,\nKarthik",
    date: "Feb 21, 2025, 3:00:00 PM",
    timeAgo: "7 days ago",
    labels: ["loan dispute", "follow-up", "work"],
    read: true,
  },
]

const Inbox = () => {
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)
  const [activeFilter, setActiveFilter] = useState("All mail")
  return (
    <div className="ml-[-200px] min-h-screen w-[1300px]">
      <div className="flex h-screen flex-col">
        {/* Header */}
        <header className="bg-background border-border border-b p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Inbox</h1>
            <div className="flex space-x-2">
              <Link href="/" className="text-primary text-sm hover:underline">
                Home
              </Link>
            </div>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="border-border flex w-full max-w-md flex-col border-r">
            {/* Filters */}
            <div className="border-border flex space-x-2 border-b p-2">
              <button
                className={cn(
                  "rounded-full px-4 py-2 text-sm",
                  activeFilter === "All mail"
                    ? "bg-secondary"
                    : "hover:bg-secondary/50",
                )}
                onClick={() => setActiveFilter("All mail")}
              >
                All mail
              </button>
              <button
                className={cn(
                  "rounded-full px-4 py-2 text-sm",
                  activeFilter === "Unread"
                    ? "bg-secondary"
                    : "hover:bg-secondary/50",
                )}
                onClick={() => setActiveFilter("Unread")}
              >
                Unread
              </button>
            </div>

            {/* Search */}
            <div className="border-border border-b p-2">
              <div className="relative">
                <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-secondary/50 focus:ring-primary w-full rounded-full py-2 pr-4 pl-10 text-sm focus:ring-1 focus:outline-none"
                />
              </div>
            </div>

            {/* Message list */}
            <div className="flex-1 overflow-y-auto">
              {messages
                .filter(
                  (msg) =>
                    activeFilter === "All mail" ||
                    (activeFilter === "Unread" && !msg.read),
                )
                .map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "border-border hover:bg-secondary/50 cursor-pointer border-b p-4",
                      !message.read && "bg-secondary/20",
                      selectedMessage?.id === message.id && "bg-secondary",
                    )}
                    onClick={() => setSelectedMessage(message)}
                  >
                    <div className="mb-1 flex items-start justify-between">
                      <div className="font-medium">{message.sender.name}</div>
                      <div className="text-muted-foreground text-xs">
                        {message.timeAgo}
                      </div>
                    </div>
                    <div className="mb-1 font-medium">{message.subject}</div>
                    <div className="text-muted-foreground line-clamp-2 text-sm">
                      {message.preview}
                    </div>

                    <div className="mt-2 flex flex-wrap gap-1">
                      {message.labels.map((label) => (
                        <span
                          key={label}
                          className="bg-secondary text-secondary-foreground rounded-full px-2 py-0.5 text-xs"
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Message view */}
          <div className="flex flex-1 flex-col overflow-hidden">
            {selectedMessage ? (
              <>
                {/* Message header */}
                <div className="border-border flex items-start justify-between border-b p-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-secondary flex h-10 w-10 items-center justify-center rounded-full">
                      <span className="text-sm font-medium">
                        {selectedMessage.sender.initials}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold">
                        {selectedMessage.sender.name}
                      </h2>
                      <div className="text-muted-foreground text-sm">
                        {selectedMessage.subject}
                      </div>
                      <div className="text-muted-foreground text-xs">
                        Reply-To: {selectedMessage.sender.email}
                      </div>
                    </div>
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {selectedMessage.date}
                  </div>
                </div>

                {/* Message content */}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="whitespace-pre-line">
                    {selectedMessage.content}
                  </div>
                </div>

                {/* Message actions */}
                <div className="border-border flex justify-between border-t p-4">
                  <div className="flex space-x-2">
                    <button className="hover:bg-secondary rounded-full p-2">
                      <ArrowLeft className="h-5 w-5" />
                    </button>
                    <button className="hover:bg-secondary rounded-full p-2">
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="flex space-x-2">
                    <button className="hover:bg-secondary rounded-full p-2">
                      <Archive className="h-5 w-5" />
                    </button>
                    <button className="hover:bg-secondary rounded-full p-2">
                      <Trash className="h-5 w-5" />
                    </button>
                    <button className="hover:bg-secondary rounded-full p-2">
                      <Clock className="h-5 w-5" />
                    </button>
                    <button className="hover:bg-secondary rounded-full p-2">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-muted-foreground flex flex-1 items-center justify-center">
                <div className="text-center">
                  <p>Select a message to view</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inbox
