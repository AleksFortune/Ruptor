'use client';

const FEATURES = [
  {
    title: 'Простота',
    emoji: '⚡',
    desc: 'Запусти RuptorGPT за 30 секунд! Не нужно настраивать ничего сложного — только твои вопросы и мгновенные ответы AI.',
  },
  {
    title: 'Приватность',
    emoji: '🛡️',
    desc: 'Никаких сливов и рекламы. Переписка и твои данные доступны только тебе — приватный AI в облаке.',
  },
  {
    title: 'Локализация',
    emoji: '🌍',
    desc: 'Поддержка русского и английского, лексика и стиль — для жизни, бизнеса и учёбы.',
  },
  {
    title: 'Поддержка 24/7',
    emoji: '💬',
    desc: 'Оперативная поддержка через Telegram. Поможем в любой момент — просто напиши.',
  },
  {
    title: 'AI без ограничений',
    emoji: '🔓',
    desc: 'Полная версия GPT — никаких лимитов, рекламы или обрезанных функций.',
  },
  {
    title: 'Честная цена',
    emoji: '💎',
    desc: 'Один тариф, никаких скрытых условий. Всё для твоего комфорта.',
  },
];

const CASES = [
  {
    title: 'GPT-ассистенты',
    emoji: '🤖',
    desc: 'AI-помощники для сайтов, CRM и мессенджеров. Автоматические ответы 24/7, быстрая настройка под задачи бизнеса.',
  },
  {
    title: 'RAG-системы',
    emoji: '🔍',
    desc: 'Чат на ваших данных: отвечаем на вопросы по PDF, базе знаний или внутренним документам. Всё под ключ!',
  },
  {
    title: 'AI для e-commerce',
    emoji: '🛒',
    desc: 'Генерация описаний товаров, прогнозы продаж и оттока, рекомендации для клиентов. Всё — автоматически.',
  },
  {
    title: 'AI для логистики',
    emoji: '🚚',
    desc: 'Оптимизация маршрутов, прогноз поставок, анализ складских остатков. Повышай эффективность в пару кликов!',
  },
  {
    title: 'AI для HR',
    emoji: '👥',
    desc: 'Автоматизация отбора, AI-интервью, быстрый разбор резюме и подбор сотрудников по soft skills.',
  },
  {
    title: 'AI-видео и аватары',
    emoji: '🎬',
    desc: 'Генерация видео, создание цифровых аватаров, AI-озвучка с эмоциями и стилями.',
  },
];

export default function Landing() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start bg-black overflow-hidden">
      {/* Фоновое видео */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/space-bg.mp4" type="video/mp4" />
      </video>
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#181922]/90 z-10"></div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl flex flex-col items-center px-4 py-16">
        {/* HEADER */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#11eefa] mb-4 text-center tracking-tight font-[var(--font-geist)]">
          RuptorGPT — Искусственный Интеллект для жизни и бизнеса
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl text-[#c7f3f4] font-[var(--font-geist)]">
          Твой персональный AI, готовый к работе за секунды. Всё просто, быстро и удобно.
        </p>

        {/* Преимущества */}
        <section className="w-full max-w-5xl mb-12">
          <div className="text-3xl font-bold text-[#11eefa] mb-8 text-center font-[var(--font-geist)]">Преимущества RuptorGPT</div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            {FEATURES.map((card, i) => (
              <div key={i} className="bg-[#232436cc] rounded-2xl shadow-lg p-8 flex flex-col items-center justify-between border-2 border-[#11eefa22] hover:border-[#11eefa] transition duration-200 hover:shadow-xl min-h-[220px] group">
                <span className="text-5xl mb-2">{card.emoji}</span>
                <div className="text-xl font-bold text-[#11eefa] text-center mb-2 font-[var(--font-geist)]">{card.title}</div>
                <div className="text-base text-center text-[#c7f3f4] font-[var(--font-geist)]">{card.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Как RuptorGPT помогает людям */}
        <section className="w-full max-w-5xl mb-12">
          <div className="text-3xl font-bold text-[#11eefa] mb-8 text-center font-[var(--font-geist)]">Как RuptorGPT помогает людям?</div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            {CASES.map((card, i) => (
              <div key={i} className="bg-[#232436cc] rounded-2xl shadow-lg p-8 flex flex-col items-center justify-between border-2 border-[#11eefa22] hover:border-[#11eefa] transition duration-200 hover:shadow-xl min-h-[220px] group">
                <span className="text-5xl mb-2">{card.emoji}</span>
                <div className="text-xl font-bold text-[#11eefa] text-center mb-2 font-[var(--font-geist)]">{card.title}</div>
                <div className="text-base text-center text-[#c7f3f4] font-[var(--font-geist)]">{card.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Тариф и CTA */}
        <section className="w-full max-w-lg bg-[#232436cc] rounded-2xl shadow-2xl p-8 flex flex-col items-center mb-12 border-2 border-[#11eefa22]">
          <div className="text-3xl font-extrabold text-[#11eefa] mb-2 font-[var(--font-geist)]">Тариф — 990₽ / месяц</div>
          <div className="text-[#c7f3f4] mb-6 text-center font-[var(--font-geist)]">
            Всё включено. Один тариф — никаких скрытых условий и лимитов.
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
          RuptorGPT — твой AI без лишних слов. Просто, быстро, честно.<br />
          Присоединяйся к Ruptor-сообществу уже сегодня!
        </footer>
      </div>
    </div>
  );
}
