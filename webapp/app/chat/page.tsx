"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

// Mock function to simulate API call
const mockApiCall = async (message: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return `This is a mock response to: "${message}"`;
};

export default function Page() {
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string }[]
  >([]);
  const [input, setInput] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { role: "user", content: input } satisfies {
        role: "user" | "assistant";
        content: string;
      },
    ];
    setMessages(newMessages);
    setInput("");

    const response = await mockApiCall(input);
    setMessages([...newMessages, { role: "assistant", content: response }]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <ScrollArea className="flex-grow p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 ${message.role === "user" ? "text-right" : "text-left"}`}
          >
            <div
              className={`inline-block p-2 rounded-lg ${message.role === "user" ? "bg-blue-600" : "bg-gray-700"}`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </ScrollArea>
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700">
        <div className="flex">
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow mr-2 bg-gray-800 text-white"
          />
          <Button type="submit">Send</Button>
        </div>
      </form>
    </div>
  );
}
