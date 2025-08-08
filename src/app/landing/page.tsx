'use client';

import Image from 'next/image';

const CARDS_FEATURES = [
  {
    title: "GPT-ассистенты",
    emoji: "🤖",
    desc: "AI-помощники для сайтов, CRM и мессенджеров. Отвечают 24/7 и обучаются под бизнес.",
  },
  {
    title: "RAG-системы",
    emoji: "🔍",
    desc: "ChatGPT на ваших данных, автоматические ответы по PDF, базе знаний.",
  },
  {
    title: "AI для e-commerce",
    emoji: "🛒",
    desc: "Генерация описаний, рекомендации, прогнозы покупок и оттока.",
  },
  {
    title: "AI для логистики",
    emoji: "🚚",
    desc: "Оптимизация маршрутов, прогноз поставок, анализ складов.",
  },
  {
    title: "AI для HR",
    emoji: "👥",
    desc: "AI-интервьюеры, разбор резюме, soft skills, автоматизация подбора.",
  },
  {
    title: "AI-видео и аватары",
    emoji: "🎬",
    desc: "Генерация видео, цифровые аватары, AI-озвучка с эмоциями.",
  },
];

const CARDS_HELP = [
  {
    title: "Бизнес",
    emoji: "📈",
    desc: "Пишет тексты, коммерческие предложения, договора, помогает с клиентами.",
  },
  {
    title: "Учёба",
    emoji: "🎓",
    desc: "Объясняет сложные темы, помогает с домашкой и рефератами.",
  },
  {
    title: "Жизнь",
    emoji: "💡",
    desc: "Формулирует мысли, советы, идеи, даже помогает с готовкой.",
  },
  {
    title: "Креатив",
    emoji: "🎨",
    desc: "Посты, контент, мемы, TikTok и Instagram — всё для творчества.",
  },
  {
    title: "Рутина",
    emoji: "🧠",
    desc: "Решает бытовые, рабочие задачи, экономит время и нервы.",
  },
  {
    title: "Путешествия",
    emoji: "🌏",
    desc: "Переводы, советы, маршруты — всё на одном языке.",
  },
];

export default function Landing() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start bg-black overflow-hidden">
      {/* BG VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#181922]/90 z-10"></div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl flex flex-col items-center px-4 py-16">
        {/* HEADER */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#11eefa] mb-4 text-center tracking-tight font-[var(--font-geist)]">
          RuptorGPT — Искусственный Интеллект для людей и бизнеса
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl text-[#c7f3f4] font-[var(--font-geist)]">
          Без барьеров, сложных настроек и навязчивых условий. Личный AI, которому можно доверять.
        </p>

        {/* Карточки-преимущества */}
        <section className="w-full max-w-5xl mb-12">
          <div className="text-3xl font-bold text-[#11eefa] mb-8 text-center font-[var(--font-geist)]">Преимущества RuptorGPT</div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            {CARDS_FEATURES.map((card, i) => (
              <div key={i} className="bg-[#232436cc] rounded-2xl shadow-lg p-8 flex flex-col items-center justify-between border-2 border-[#11eefa22] hover:border-[#11eefa] transition duration-200 hover:shadow-xl min-h-[220px] group">
                <span className="text-5xl mb-2">{card.emoji}</span>
                <div className="text-xl font-bold text-[#11eefa] text-center mb-2 font-[var(--font-geist)]">{card.title}</div>
                <div className="text-base text-center text-[#c7f3f4] font-[var(--font-geist)]">{card.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Карточки — как помогает */}
        <section className="w-full max-w-5xl mb-12">
          <div className="text-3xl font-bold text-[#11eefa] mb-8 text-center font-[var(--font-geist)]">Как RuptorGPT помогает людям?</div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            {CARDS_HELP.map((card, i) => (
              <div key={i} className="bg-[#232436cc] rounded-2xl shadow-lg p-8 flex flex-col items-center justify-between border-2 border-[#11eefa22] hover:border-[#11eefa] transition duration-200 hover:shadow-xl min-h-[180px] group">
                <span className="text-4xl mb-2">{card.emoji}</span>
                <div className="text-lg font-bold text-[#11eefa] text-center mb-2 font-[var(--font-geist)]">{card.title}</div>
                <div className="text-base text-center text-[#c7f3f4] font-[var(--font-geist)]">{card.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Тариф и CTA */}
        <section className="w-full max-w-lg bg-[#232436cc] rounded-2xl shadow-2xl p-8 flex flex-col items-center mb-12 border-2 border-[#11eefa22]">
          <div className="text-3xl font-extrabold text-[#11eefa] mb-2 font-[var(--font-geist)]">Тариф — 990₽ / месяц</div>
          <div className="text-[#c7f3f4] mb-6 text-center font-[var(--font-geist)]">
            Всё включено! Без доплат, без скрытых условий. Техподдержка всегда на связи.
          </div>
          <a
            href="https://t.me/ruptorgpt_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-8 py-4 rounded-full bg-[#11eefa] text-[#181922] font-bold text-xl transition hover:bg-[#47f9fd] shadow-lg font-[var(--font-geist)]"
          >
            Написать RuptorGPT
          </a>
        </section>

        {/* Кратко о продукте */}
        <footer className="mt-6 text-[#9ea6bb] text-center text-base max-w-2xl font-[var(--font-geist)]">
          RuptorGPT — твой персональный помощник на основе искусственного интеллекта.<br />
          Только реальные ответы на реальные вопросы. <br />
          Присоединяйся к будущему прямо сейчас!
        </footer>
      </div>
    </div>
  );
}
