'use client';
import React, { useState, useRef, useEffect } from "react";

export default function AiChatPage() {
  const [chat, setChat] = useState([
    { from: "ai", text: "Здравствуйте! Я — AI-бот Ruptor.AI. Задайте мне вопрос о технологиях, бизнесе или AI!" }
  ]);
  const [input, setInput] = useState("");
  const [waiting, setWaiting] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current) boxRef.current.scrollTop = boxRef.current.scrollHeight;
  }, [chat]);

  async function send(e?: any) {
    if (e) e.preventDefault();
    if (!input.trim()) return;
    setChat(c => [...c, { from: "user", text: input }]);
    setWaiting(true);
    const q = input;
    setInput("");
    try {
      const resp = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...chat, { from: "user", text: q }] })
      });
      const data = await resp.json();
      setChat(c => [...c, { from: "ai", text: data.text }]);
    } catch {
      setChat(c => [...c, { from: "ai", text: "Ошибка соединения с AI." }]);
    }
    setWaiting(false);
  }

  return (
    <main style={{ minHeight: "100vh", background: "#0b0c16", color: "#fff", fontFamily: "'Orbitron', Arial, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&display=swap" rel="stylesheet" />
      <div style={{ maxWidth: 480, margin: "0 auto", padding: "60px 10px 40px 10px" }}>
        <h1 style={{ color: "#13eaf6", fontWeight: 900, fontSize: 34, textAlign: "center", letterSpacing: "0.09em" }}>🤖 Ruptor.AI Chat</h1>
        <div ref={boxRef} style={{ background: "#181b27", borderRadius: 16, minHeight: 340, maxHeight: 410, overflowY: "auto", padding: 20, margin: "22px 0", boxShadow: "0 0 22px #13eaf622" }}>
          {chat.map((m, i) => (
            <div key={i} style={{
              marginBottom: 12,
              display: "flex",
              flexDirection: m.from === "user" ? "row-reverse" : "row"
            }}>
              <div style={{
                background: m.from === "user" ? "#13eaf6" : "#232a3a",
                color: m.from === "user" ? "#00293a" : "#fff",
                borderRadius: m.from === "user" ? "18px 5px 18px 18px" : "5px 18px 18px 18px",
                padding: "10px 14px",
                maxWidth: 280,
                fontWeight: 500,
                boxShadow: "0 2px 10px #13eaf655",
                wordBreak: "break-word"
              }}>{m.text}</div>
            </div>
          ))}
          {waiting &&
            <div style={{ color: "#13eaf6", margin: "6px 0 0 0", fontWeight: 600, fontStyle: "italic" }}>AI пишет…</div>
          }
        </div>
        <form onSubmit={send} style={{ display: "flex", gap: 8 }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Ваш вопрос…"
            style={{
              flex: 1,
              padding: "13px 11px",
              borderRadius: 11,
              border: "none",
              fontSize: 17,
              background: "#232c42",
              color: "#fff"
            }}
            autoFocus
            disabled={waiting}
          />
          <button type="submit"
            style={{
              background: "#13eaf6",
              color: "#02111a",
              fontWeight: 800,
              border: "none",
              borderRadius: 9,
              padding: "0 19px",
              fontSize: 19,
              cursor: "pointer"
            }}
            disabled={waiting}
          >⮞</button>
        </form>
        <div style={{ color: "#9befff", marginTop: 16, fontSize: "1.08em", textAlign: "center" }}>Ruptor.AI отвечает на любые вопросы 24/7</div>
      </div>
    </main>
  );
}
