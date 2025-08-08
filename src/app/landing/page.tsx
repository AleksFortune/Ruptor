"use client";

import React from "react";

// Замени на свой путь если видео лежит в другом месте
const VIDEO_SRC = "/space-bg.mp4";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-start items-center overflow-x-hidden bg-black">
      {/* Фоновое видео */}
      <video
        className="fixed inset-0 w-full h-full object-cover z-0 brightness-125 contrast-125"
        src={VIDEO_SRC}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay для контраста */}
      <div className="fixed inset-0 w-full h-full bg-[#151925]/60 z-10 pointer-events-none" />

      {/* Контент */}
      <main className="relative z-20 w-full max-w-6xl mx-auto flex flex-col items-center pt-28 pb-16 px-3">
        {/* Логотип и заголовок */}
        <div className="flex flex-col items-center mb-8">
          <h1
            className="text-6xl md:text-8xl font-extrabold text-[#19F4FF] drop-shadow-[0_0_16px_#1bfcffb0] tracking-wider text-center"
            style={{ fontFamily: "'Orbitron', 'Geist', 'Arial', sans-serif", letterSpacing: "0.08em" }}
          >
            RUPTOR.AI
          </h1>
          <div className="mt-3 text-xl md:text-2xl text-[#bdfaff] font-medium text-center max-w-2xl" style={{ fontFamily: "'Geist', Arial, sans-serif" }}>
            Новый уровень AI — приватно, просто, локально. Всё, что нужно — в одном чате. <br />
            <span className="text-[#11eefa]">24/7 поддержка. Локализация. Простота. Безопасность.</span>
          </div>
        </div>

        {/* Блок с преимуществами */}
        <section className="w-full mt-8 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0fffc1] text-center mb-7 drop-shadow-[0_1px_10px_#00ffe555]" style={{ fontFamily: "'Orbitron', 'Geist', Arial, sans-serif" }}>
            Преимущества RuptorGPT
          </h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-7">
            <AdvCard
              icon="🛡️"
              title="100% Приватность"
              text="Ваши чаты и данные не уходят в облако. Безопасно для бизнеса и личного общения."
            />
            <AdvCard
              icon="⚡"
              title="Мгновенный старт"
              text="Запуск за 1 минуту! Никаких сложных настроек — просто пользуйся."
            />
            <AdvCard
              icon="🌎"
              title="Полная локализация"
              text="Интерфейс и поддержка на русском, английском и других языках. Всё для вашего удобства."
            />
            <AdvCard
              icon="🤝"
              title="Живая поддержка"
              text="Поможем решить любой вопрос за минуты. Не боты — живые AI-эксперты."
            />
          </div>
        </section>

        {/* Блок "Как помогает" */}
        <section className="w-full mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0fffc1] text-center mb-7 drop-shadow-[0_1px_10px_#00ffe555]" style={{ fontFamily: "'Orbitron', 'Geist', Arial, sans-serif" }}>
            Как RuptorGPT помогает людям?
          </h2>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            <FeatureCard
              icon="🤖"
              title="AI для бизнеса"
              text="Персональный AI-ассистент автоматизирует рутину, пишет документы и помогает вашим клиентам 24/7. Всегда учится под задачи."
            />
            <FeatureCard
              icon="🔍"
              title="Экспертные ответы"
              text="Быстрый поиск по вашим PDF, файлам и базе знаний. RuptorGPT даст точный совет и найдёт нужную информацию за секунды."
            />
            <FeatureCard
              icon="🛒"
              title="AI для магазинов"
              text="Генерируй продающие описания товаров, рекомендации и автоответы для клиентов — увеличь конверсию уже сегодня!"
            />
            <FeatureCard
              icon="🚚"
              title="AI-логистика"
              text="Автоматический прогноз поставок, анализ маршрутов, оптимизация складов и учёт — забудь о рутине."
            />
            <FeatureCard
              icon="👥"
              title="AI для HR"
              text="AI-интервьюер, анализ soft skills и быстрая фильтрация резюме — находи лучших кандидатов без труда."
            />
            <FeatureCard
              icon="🎬"
              title="AI-видео и аватары"
              text="Создавай цифровых аватаров, видеоролики и презентации с AI-озвучкой и эмоциями — выделяйся на рынке."
            />
          </div>
          <div className="mt-6 text-[#8ceefc] text-center text-lg" style={{ fontFamily: "'Geist', Arial, sans-serif" }}>
            Нажмите на блок — узнаете больше!
          </div>
        </section>

        {/* Тариф и CTA */}
        <section className="w-full mt-5">
          <div className="flex flex-col items-center bg-[#232436cc] rounded-3xl border-2 border-[#19f4ff55] shadow-2xl px-10 py-8 max-w-lg mx-auto mb-5">
            <div className="text-3xl md:text-4xl font-bold text-[#0fffc1]" style={{ fontFamily: "'Orbitron', 'Geist', Arial, sans-serif" }}>
              Подписка — 990 ₽ / месяц
            </div>
            <div className="mt-2 mb-4 text-base text-[#defaff] text-center">
              Все возможности без ограничений, поддержка, быстрый старт и постоянные обновления.
            </div>
            <a
              href="/gpt"
              className="mt-2 bg-[#0fffc1] hover:bg-[#19f4ff] text-black font-bold rounded-xl px-8 py-4 text-xl shadow-lg transition-all"
              style={{ fontFamily: "'Orbitron', 'Geist', Arial, sans-serif", letterSpacing: "0.03em" }}
            >
              Перейти в RuptorGPT
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

// Карточка Преимущества
function AdvCard({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="bg-[#222a36cc] backdrop-blur-lg rounded-2xl border border-[#19f4ff44] shadow-xl flex flex-col items-center py-8 px-4 min-h-[170px] hover:scale-105 transition-all group">
      <span className="text-4xl mb-2">{icon}</span>
      <div className="font-extrabold text-[#0fffc1] text-lg mb-1" style={{ fontFamily: "'Orbitron', 'Geist', Arial, sans-serif" }}>{title}</div>
      <div className="text-[#eaf9ff] text-center text-base font-[var(--font-geist)]">{text}</div>
    </div>
  );
}

// Карточка “Как помогает”
function FeatureCard({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="bg-[#1e2531cc] backdrop-blur-md rounded-2xl border border-[#0fffc188] shadow-lg flex flex-col items-center py-8 px-5 min-h-[200px] hover:scale-105 transition-all">
      <span className="text-5xl mb-2">{icon}</span>
      <div className="font-extrabold text-[#11eefa] text-lg mb-1" style={{ fontFamily: "'Orbitron', 'Geist', Arial, sans-serif" }}>{title}</div>
      <div className="text-[#eaf9ff] text-center text-base font-[var(--font-geist)]">{text}</div>
    </div>
  );
}
