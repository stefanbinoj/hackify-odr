'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState } from 'react';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

// Developer can set the initial prompt here
const INITIAL_PROMPT = "You are a helpful AI assistant. Be concise and clear in your responses.";

export default function AskAI() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const newMessage: ChatMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, newMessage],
          initialPrompt: INITIAL_PROMPT,
        }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.response }]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-4xl p-4">
      <div className="space-y-4">
        <ScrollArea className="h-[600px] rounded-lg border p-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 p-4 rounded-lg ${message.role === 'user'
                ? 'bg-primary text-primary-foreground ml-auto max-w-[80%]'
                : 'bg-muted max-w-[80%]'
                }`}
            >
              {message.content}
            </div>
          ))}
          {isLoading && (
            <div className="text-center p-2">
              <span className="animate-pulse">Thinking...</span>
            </div>
          )}
        </ScrollArea>

        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button onClick={handleSendMessage} disabled={isLoading}>
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
