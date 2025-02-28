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
  "Hello Karthik, this is Amal, your mediator. Regarding your Diskna dispute with your neighbor, the last mediation session did not yield a resolution, but the next hearing is scheduled for March 5, 2025. The mediator will conduct a property boundary survey to clear any misunderstandings, and it’s crucial that you bring all property documents, such as land titles and previous communication with your neighbor. As for your bank loan dispute, the bank has reviewed your application but is waiting for your revised payment proposal for the restructuring request. You should prepare to meet with the bank representatives on March 10, 2025, to discuss possible adjustments. A clear outline of your finances and repayment plan will be essential to ensure progress. If you need help preparing for either session, I’m here to support you with the necessary documentation or advice."

export default function AskAI() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "user",
      content: "Hi, can you help me with the update on my Diskna case?",
    },
    {
      role: "assistant",
      content:
        "Sure, Karthik. The next hearing for the Diskna case is scheduled for March 5, 2025. The mediator will conduct a property boundary survey. Make sure you bring all the relevant documents.",
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
    <div className="container mx-auto max-w-4xl p-4">
      <div className="space-y-6">
        <ScrollArea className="h-[600px] rounded-lg border p-4">
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
