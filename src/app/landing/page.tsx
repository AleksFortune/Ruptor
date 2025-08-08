// src/app/landing/page.tsx

export default function Landing() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#181922] text-white px-4 py-10">
      {/* HEADER */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-[#11eefa] mb-4 text-center tracking-tight">
        RuptorGPT — Искусственный Интеллект без лишних сложностей
      </h1>
      <p className="text-lg md:text-2xl mb-8 text-center max-w-2xl text-[#c7f3f4]">
        Личный AI-ассистент, созданный для простоты, приватности и максимальной пользы. Без барьеров, сложных настроек и навязчивых подписок — всё честно и понятно.
      </p>
      
      {/* Блок преимуществ */}
      <section className="w-full max-w-4xl bg-[#232436] rounded-2xl shadow-xl p-8 mb-10 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-[#11eefa] mb-3">Преимущества RuptorGPT:</h2>
          <ul className="list-disc pl-5 space-y-2 text-[#b3eaff]">
            <li>⚡ Моментальные ответы на любые вопросы</li>
            <li>🔒 Приватность: ваши данные остаются только у вас</li>
            <li>🇷🇺 Локализация — всё на русском, поддержка 24/7</li>
            <li>👨‍💻 Живой техсаппорт в Telegram</li>
            <li>💡 Интуитивно понятный интерфейс</li>
            <li>📱 Работает везде — с телефона и компьютера</li>
            <li>🛡️ Никакой рекламы и “утечек”</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[#11eefa] mb-3">Как RuptorGPT помогает людям?</h2>
          <ul className="list-disc pl-5 space-y-2 text-[#b3eaff]">
            <li>👔 Бизнес: пишем тексты, письма, коммерческие предложения и договора</li>
            <li>📚 Учёба: объясняет сложные темы, помогает с домашкой и сочинениями</li>
            <li>💬 Жизнь: формулирует мысли, советы, идеи и даже рецепты</li>
            <li>🎨 Креатив: генерирует посты, контент, мемы, идеи для TikTok и Instagram</li>
            <li>🧠 Решает бытовые и рабочие вопросы, избавляет от “рутины”</li>
            <li>🌏 Переводы, резюме, путешествия — любые задачи одним кликом</li>
            <li>🕓 Экономит время и силы: даёт чёткие и понятные ответы</li>
            <li>🔥 Уже используют сотни пользователей — попробуй и ты!</li>
          </ul>
        </div>
      </section>
      
      {/* Тариф и CTA */}
      <section className="w-full max-w-xl bg-[#232436] rounded-2xl shadow-xl p-8 flex flex-col items-center mb-12">
        <div className="text-3xl font-extrabold text-[#11eefa] mb-2">Тариф — 990₽ / месяц</div>
        <div className="text-[#c7f3f4] mb-6 text-center">Всё включено! Без доплат и скрытых условий. Отменить можно в любой момент.</div>
        <a
          href="https://t.me/ruptorgpt_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 px-8 py-4 rounded-full bg-[#11eefa] text-[#181922] font-bold text-xl transition hover:bg-[#47f9fd] shadow-lg"
        >
          Написать RuptorGPT
        </a>
      </section>

      {/* Кратко о продукте */}
      <footer className="mt-6 text-[#9ea6bb] text-center text-sm max-w-2xl">
        RuptorGPT — твой персональный помощник на основе искусственного интеллекта.<br />
        Никакой бюрократии, только реальные ответы на реальные вопросы. <br />
        Присоединяйся к будущему прямо сейчас!
      </footer>
    </main>
  );
}
