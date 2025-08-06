'use client';
import React, { useEffect } from 'react';

export default function LoginPage() {
  // После успешной авторизации Telegram редиректит на этот адрес
  useEffect(() => {
    // Можно обрабатывать query параметры Telegram (по желанию)
  }, []);

  return (
    <main style={{
      minHeight: "100vh",
      background: "#0b0c16",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <h1 style={{ color: "#13eaf6", fontSize: "2.5em", fontWeight: 900 }}>
        Войти через Telegram
      </h1>
      <p style={{ marginBottom: 36, color: "#aadbe5" }}>
        Быстрая авторизация — просто нажмите кнопку:
      </p>
      {/* КНОПКА TELEGRAM LOGIN */}
      <div>
        <script async src="https://telegram.org/js/telegram-widget.js?7"
          data-telegram-login="ruptorgptbot"  // Например, ruptorgptbot
          data-size="large"
          data-radius="14"
          data-auth-url="/api/telegram-auth"
          data-request-access="write"
        ></script>
      </div>
    </main>
  );
}
