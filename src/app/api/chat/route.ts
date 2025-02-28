import { Groq } from "groq-sdk" // Groq SDK import
import { NextResponse } from "next/server"

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY! }) // Initialize Groq SDK

export async function POST(request: Request) {
  try {
    const { messages, initialPrompt } = await request.json()

    // Initialize Groq's chat completion model
    const model = groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: initialPrompt || "Hello, how can I assist you?",
        },
        ...messages,
      ],
      model: "llama-3.3-70b-versatile", // Groq's model name (you can change this)
    })

    // Request chat completion from Groq API
    const chatCompletion = await model

    // Get the response text from Groq API
    const responseText =
      chatCompletion.choices[0]?.message?.content || "No response from AI"

    return NextResponse.json({ response: responseText })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 },
    )
  }
}
