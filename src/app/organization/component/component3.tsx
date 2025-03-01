"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState } from "react"

interface ChatMessage {
  role: "user" | "assistant"
  content: string
}

// Developer can set the initial prompt here
const INITIAL_PROMPT =
  "As a business managing a significant volume of ongoing disputes, including supplier delays, employee contract issues, and financial negotiations, it is crucial to resolve these conflicts efficiently without impacting the company's reputation. The upcoming mediation sessions include addressing a supplier delay affecting inventory, scheduled for March 5, 2025, where important documents such as purchase agreements and correspondence should be reviewed. Additionally, a contract dispute concerning non-compete clauses with an employee is set for March 7, 2025, for which the signed agreements and relevant communication need to be prepared. Lastly, a meeting with the bank representatives to finalize the loan restructuring proposal is scheduled for March 10, 2025, where a revised repayment plan, financial projections, and timelines will be discussed. It is essential to approach each case with clarity and preparedness to ensure swift resolutions and minimize any negative impacts on operations or reputation. Assistance with documentation and strategy preparation for these sessions is available as needed."

export default function AskAI() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "user",
      content:
        "Hi, can you help me with updates on the ongoing supplier dispute and the loan restructuring case?",
    },
    {
      role: "assistant",
      content:
        "Certainly. Regarding the supplier delay, the next mediation session is scheduled for March 5, 2025. The mediator will review the purchase agreements and communication between your business and the supplier. Please ensure all relevant documentation is prepared. As for the loan restructuring, a meeting with the bank representatives is scheduled for March 10, 2025, where the revised repayment plan and financial projections will be discussed. It’s important to have the latest financial records and any communications with the bank ready for the meeting.",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const newMessage: ChatMessage = { role: "user", content: input }
    setMessages((prev) => [...prev, newMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, newMessage],
          initialPrompt: INITIAL_PROMPT,
        }),
      })

      const data = await response.json()
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response },
      ])
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container ml-[-200px] w-full p-4">
      <div className="space-y-6">
        <ScrollArea className="h-[500px] rounded-lg border p-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 rounded-lg p-4 ${
                message.role === "user"
                  ? "text-primary-foreground ml-auto max-w-[80%] bg-gradient-to-r from-orange-400 to-orange-500"
                  : "bg-muted max-w-[80%]"
              }`}
            >
              {message.content}
            </div>
          ))}
          {isLoading && (
            <div className="p-2 text-center">
              <span className="animate-pulse">Thinking...</span>
            </div>
          )}
        </ScrollArea>

        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <Button
            className="rounded-xl bg-orange-400"
            onClick={handleSendMessage}
            disabled={isLoading}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  )
}
