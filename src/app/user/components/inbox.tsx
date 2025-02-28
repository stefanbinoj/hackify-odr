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
      name: "William Smith",
      email: "williamsmith@example.com",
      initials: "WS",
    },
    subject: "Meeting Tomorrow",
    preview:
      "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share...",
    content:
      "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.\n\nPlease come prepared with any questions or insights you may have. Looking forward to our meeting!\n\nBest regards,\nWilliam",
    date: "Oct 22, 2023, 9:00:00 AM",
    timeAgo: "over 1 year ago",
    labels: ["meeting", "work", "important"],
    read: false,
  },
  {
    id: "2",
    sender: {
      name: "Alice Smith",
      email: "alice.smith@example.com",
      initials: "AS",
    },
    subject: "Re: Project Update",
    preview:
      "Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a...",
    content:
      "Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic job addressing all the key issues we identified last month.\n\nI particularly appreciate the detailed analysis of the customer feedback. This will be invaluable as we move into the next phase of development.\n\nLet's schedule a call next week to discuss the implementation timeline.\n\nRegards,\nAlice",
    date: "Oct 15, 2023, 2:30:00 PM",
    timeAgo: "over 1 year ago",
    labels: ["work", "important"],
    read: true,
  },
  {
    id: "3",
    sender: {
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      initials: "BJ",
    },
    subject: "Weekend Plans",
    preview:
      "Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor...",
    content:
      "Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor activity, and the weather forecast looks perfect.\n\nIf you're interested, we could meet at the trailhead around 9 AM on Saturday. I'll bring some snacks and water, but feel free to bring anything else you might need.\n\nLet me know if you're up for it!\n\nCheers,\nBob",
    date: "Oct 10, 2023, 6:15:00 PM",
    timeAgo: "almost 2 years ago",
    labels: ["personal"],
    read: true,
  },
  {
    id: "4",
    sender: {
      name: "Sarah Miller",
      email: "sarah.miller@example.com",
      initials: "SM",
    },
    subject: "Dispute Resolution Update",
    preview:
      "I've reviewed the documentation for your case #DR-2023-0456 and have some updates regarding the resolution process. Based on the evidence...",
    content:
      "I've reviewed the documentation for your case #DR-2023-0456 and have some updates regarding the resolution process. Based on the evidence provided, we're ready to move to the mediation phase.\n\nThe other party has agreed to participate in a facilitated discussion next Tuesday at 2 PM. Please confirm if this time works for you, and I'll send the official invitation with the virtual meeting details.\n\nIn preparation, please review the attached mediation guidelines and prepare any additional points you'd like to discuss.\n\nBest regards,\nSarah Miller\nDispute Resolution Specialist",
    date: "Sep 28, 2023, 11:20:00 AM",
    timeAgo: "almost 2 years ago",
    labels: ["dispute", "important", "work"],
    read: false,
  },
  {
    id: "5",
    sender: {
      name: "Michael Chen",
      email: "michael.chen@example.com",
      initials: "MC",
    },
    subject: "Settlement Proposal",
    preview:
      "Following our mediation session, I've drafted a settlement proposal that addresses the key concerns raised by both parties. The proposal includes...",
    content:
      "Following our mediation session, I've drafted a settlement proposal that addresses the key concerns raised by both parties. The proposal includes:\n\n1. A payment schedule that accommodates the financial constraints discussed\n2. Revised delivery timelines for the remaining project milestones\n3. Clear performance metrics for quality assurance\n4. A dispute resolution mechanism for any future disagreements\n\nPlease review the attached document and provide your feedback by Friday. If both parties agree, we can proceed with finalizing the settlement agreement.\n\nRegards,\nMichael Chen\nMediation Coordinator",
    date: "Sep 15, 2023, 3:45:00 PM",
    timeAgo: "almost 2 years ago",
    labels: ["dispute", "settlement", "work"],
    read: true,
  },
]
const Inbox = () => {
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)
  const [activeFilter, setActiveFilter] = useState("All mail")
  return (
    <div className="ml-10 min-h-screen">
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
