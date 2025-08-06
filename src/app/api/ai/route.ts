import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const { messages }: { messages: { from: string; text: string }[] } = await req.json();
  const chatHistory = messages.map((m) => ({
    role: m.from === "user" ? "user" : "assistant",
    content: m.text,
  }));

  const apiKey = process.env.OPENAI_KEY; // в .env.local
  if (!apiKey)
    return NextResponse.json({ text: "OpenAI API ключ не найден!" }, { status: 500 });

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "Ты дружелюбный AI Ruptor.AI, отвечай креативно и понятно!",
        },
        ...chatHistory,
      ],
      max_tokens: 250,
    }),
  });

  const data = await res.json();
  const text =
    data?.choices?.[0]?.message?.content || "Нет ответа от AI";
  return NextResponse.json({ text });
}
