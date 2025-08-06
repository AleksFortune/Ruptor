'use client';
import { useEffect } from "react";

export default function LoginPage() {
  useEffect(() => {
    // Telegram виджет подключится к div c id="telegram-login"
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.setAttribute("data-telegram-login", "ruptorgptbot"); // без @
    script.setAttribute("data-size", "large");
    script.setAttribute("data-radius", "18");
    script.setAttribute("data-auth-url", "/api/telegram-auth"); // сюда придёт результат авторизации
    script.setAttribute("data-request-access", "write");
    script.async = true;
    document.getElementById("telegram-login")?.appendChild(script);
  }, []);

  return (
    <main style={{
      minHeight: "100vh", background: "#0b0c16", color: "#fff",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"
    }}>
      <h1 style={{
        color: "#13eaf6", fontWeight: 900, fontSize: "2.7em", textAlign: "center"
      }}>
        Войти через Telegram
      </h1>
      <div style={{ color: "#b7fffa", marginBottom: 28 }}>
        Быстрая авторизация — просто нажмите кнопку:
      </div>
      <div id="telegram-login" />
    </main>
  );
}
