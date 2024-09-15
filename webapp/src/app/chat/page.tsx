"use client";

import { useState } from "react";
import { sendPrompt } from "@/services/api";

export default function ChatPage() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    try {
      const result = await sendPrompt(prompt);
      setResponse(result);
    } catch (error) {
      console.error("Error fetching response:", error);
      setResponse("An error occurred while fetching the response.");
    } finally {
      setIsLoading(false);
      setPrompt("");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sherloq</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here"
          className="w-full p-2 border border-gray-300 rounded"
          disabled={isLoading}
        />
        <button
          type="submit"
          className={`mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
      {response && (
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="font-bold mb-2">Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
