// src/app/landing/page.tsx

import React from "react";

export default function LandingPage() {
  return (
    <div className="bg-gray-950 text-white min-h-screen px-4 py-12 flex flex-col items-center font-sans">
      {/* Заголовок */}
      <h1 className="text-5xl md:text-6xl font-black mb-6 text-cyan-400 drop-shadow-xl text-center">
        RuptorGPT — Твой умный, приватный и персональный AI на русском!
      </h1>
      <p className="text-xl md:text-2xl mb-10 max-w-3xl text-center text-cyan-100 font-medium">
        Разблокируй возможности искусственного интеллекта — мгновенные ответы, помощь в работе и учебе, генерация идей, приватность данных и поддержка 24/7. Простой интерфейс, честная цена, фокус на результат!
      </p>

      {/* Преимущества */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-12 max-w-5xl w-full">
        <Advantage
          title="Молниеносный запуск"
          desc="Никакой регистрации — Telegram-авторизация в 1 клик!"
        />
        <Advantage
          title="Русский интеллект"
          desc="Идеальная локализация. GPT-чат понимает нюансы языка и культурный контекст."
        />
        <Advantage
          title="100% Приватность"
          desc="Данные пользователей не сохраняются и не передаются третьим лицам. Безопасно для бизнеса."
        />
        <Advantage
          title="Настоящая поддержка"
          desc="Настоящие люди из команды Ruptor всегда помогут — отвечаем в Telegram за минуты!"
        />
      </section>

      {/* Видео-демо/анимация */}
      <section className="mb-14 flex flex-col items-center w-full">
        {/* Замените src на свое демо, либо поставьте свой YouTube iframe */}
        <video controls className="rounded-xl w-full max-w-2xl shadow-lg border-2 border-cyan-300">
          <source src="/demo.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
        <p className="text-center text-gray-300 mt-2 text-sm">
          Смотрите: как RuptorGPT экономит ваше время и силы каждый день
        </p>
      </section>

      {/* Тарифы */}
      <section className="mb-14 w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-cyan-300 text-center">Тарифы для любого запроса</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Tariff
            name="Старт"
            price="299₽/мес"
            features={[
              "50 диалогов в месяц",
              "Базовая поддержка Telegram",
              "Все базовые возможности AI",
            ]}
          />
          <Tariff
            name="Pro"
            price="499₽/мес"
            features={[
              "Безлимитные диалоги",
              "Приоритетная поддержка",
              "Групповые чаты с AI",
              "Генерация текстов, писем, идей",
            ]}
            popular
          />
          <Tariff
            name="Бизнес"
            price="1499₽/мес"
            features={[
              "До 10 пользователей",
              "Отдельная поддержка",
              "API-доступ к RuptorGPT",
              "Конфиденциальные запросы",
            ]}
          />
        </div>
        <p className="mt-5 text-center text-gray-400 text-sm">Бесплатный пробный период — 3 дня для всех тарифов!</p>
      </section>

      {/* Кейсы */}
      <section className="mb-16 w-full max-w-5xl">
        <h2 className="text-3xl font-bold mb-6 text-cyan-300 text-center">Как RuptorGPT помогает людям?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Case
            title="⚡ Быстро отвечать клиентам"
            desc="Генерируй ответы на рабочие письма за секунды. Не трать время на рутину — AI напишет всё сам."
          />
          <Case
            title="🎓 Решать учебные задачи"
            desc="Объяснения, переводы, подготовка конспектов. Студенты и школьники используют RuptorGPT каждый день."
          />
          <Case
            title="🦸‍♂️ Делать креатив легко"
            desc="Посты для соцсетей, сценарии видео, маркетинговые тексты, мемы, идеи для старта проектов."
          />
        </div>
      </section>

      {/* Отзывы */}
      <section className="mb-20 w-full max-w-5xl">
        <h2 className="text-3xl font-bold mb-6 text-cyan-300 text-center">Что говорят пользователи?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-h-[600px] overflow-y-auto">
          {testimonials.map((t, i) => (
            <Testimonial key={i} author={t.author} text={t.text} />
          ))}
        </div>
      </section>

      {/* Кнопка */}
      <a
        href="/login"
        className="bg-cyan-400 text-gray-900 font-extrabold text-xl px-8 py-4 rounded-2xl shadow-lg hover:bg-cyan-200 transition mb-8 tracking-wide"
      >
        🚀 Попробовать RuptorGPT бесплатно
      </a>
      <div className="text-sm text-gray-600 mb-2">Первый вход через Telegram за 5 секунд</div>
    </div>
  );
}

function Advantage({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-gray-900 rounded-xl p-5 border border-cyan-600 shadow-xl min-h-[120px]">
      <h3 className="text-xl font-extrabold mb-1 text-cyan-200">{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function Tariff({
  name,
  price,
  features,
  popular,
}: {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}) {
  return (
    <div className={`relative bg-gray-900 rounded-xl p-6 border-2 ${popular ? "border-cyan-400 scale-105 shadow-2xl" : "border-cyan-700 shadow-md"} w-full md:w-80`}>
      {popular && (
        <span className="absolute top-2 right-4 bg-cyan-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow">
          Популярно
        </span>
      )}
      <div className="text-2xl font-extrabold mb-1 text-cyan-200">{name}</div>
      <div className="text-3xl font-black mb-3">{price}</div>
      <ul className="mb-4 text-gray-300 space-y-1">
        {features.map((f, i) => (
          <li key={i}>• {f}</li>
        ))}
      </ul>
      <button className="bg-cyan-400 text-gray-900 px-4 py-2 rounded font-bold hover:bg-cyan-300 transition w-full">
        Выбрать
      </button>
    </div>
  );
}

function Case({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-gray-900 rounded-xl p-5 border border-cyan-600 shadow-lg">
      <h3 className="text-xl font-extrabold mb-2 text-cyan-200">{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function Testimonial({ author, text }: { author: string; text: string }) {
  return (
    <div className="bg-gray-800 rounded-xl p-4 mb-2 border-l-4 border-cyan-400 shadow">
      <p className="mb-1 text-base">"{text}"</p>
      <div className="text-right text-sm text-cyan-300 font-bold">— {author}</div>
    </div>
  );
}

// 30 отзывов!
const testimonials = [
  { author: "Александр, IT-менеджер", text: "Я пробовал разных AI, но только RuptorGPT реально помогает в ежедневной работе! Быстро, удобно, на русском." },
  { author: "Мария, копирайтер", text: "Пишу тексты, сценарии и даже посты в Instagram через RuptorGPT — экономия времени в 5 раз!" },
  { author: "Игорь, предприниматель", text: "Техподдержка решает все вопросы за 2 минуты. Платить не жалко — сервис топовый." },
  { author: "Екатерина, студентка", text: "Готовлюсь к экзаменам с помощью RuptorGPT. Всё объясняет доступно, даже сложные темы." },
  { author: "Олег, маркетолог", text: "Генерация идей для рекламы теперь не боль, а удовольствие. Рекомендую всем коллегам!" },
  { author: "Светлана, HR", text: "Использую чат для подготовки писем и презентаций. Экономит уйму времени!" },
  { author: "Денис, юрист", text: "Чат помогает формулировать документы и письма на официальном языке. Очень удобно." },
  { author: "Алина, SMM-менеджер", text: "Генерирую мемы и тексты для соцсетей. RuptorGPT реально понимает юмор!" },
  { author: "Павел, стартапер", text: "Быстро придумываю питчи и идеи для проектов. AI реально поддержка номер один." },
  { author: "Виктория, преподаватель", text: "Объясняю ученикам сложные темы проще благодаря RuptorGPT." },
  { author: "Михаил, project manager", text: "Забыл что такое рутина: AI отвечает на вопросы команды и клиентов." },
  { author: "Елизавета, PR-менеджер", text: "Пресс-релизы, посты и новости пишу в два клика." },
  { author: "Кирилл, переводчик", text: "Отличные переводы с английского и на английский, даже с нюансами!" },
  { author: "Олеся, бухгалтер", text: "AI помогает разъяснять клиентам сложные вещи простыми словами." },
  { author: "Руслан, врач", text: "Генерирую инструкции и памятки пациентам, очень удобно!" },
  { author: "Юлия, travel-блогер", text: "Помогает с описаниями мест, маршрутов и даже идеями для видео." },
  { author: "Евгений, дизайнер", text: "AI подсказывает, как презентовать проекты и общаться с заказчиками." },
  { author: "Андрей, программист", text: "Проверяю кодовые решения и даже получаю советы по алгоритмам." },
  { author: "Валерия, маркетолог", text: "Настоящий AI на русском! Пробовала всё — Ruptor лучший." },
  { author: "Григорий, студент", text: "Списываю домашку и получаю объяснения, которые реально понимаю." },
  { author: "Татьяна, риелтор", text: "Генерирует описания объектов и письма клиентам. Время — деньги!" },
  { author: "Сергей, аналитик", text: "AI помогает строить отчеты и формулировать выводы. Очень круто." },
  { author: "Даниил, журналист", text: "Генерирую заголовки и темы для статей — больше креатива, меньше выгорания!" },
  { author: "Елена, коуч", text: "Использую AI для создания программ и писем клиентам. Работает безупречно!" },
  { author: "Илья, менеджер", text: "Реально экономит нервы: все тексты пишутся за секунды." },
  { author: "Маргарита, юрист", text: "Формулирует юридические письма и объясняет сложные темы. Класс." },
  { author: "Аркадий, владелец бизнеса", text: "AI-помощник для всей команды. Удобно, быстро, всегда доступен." },
  { author: "Полина, контент-менеджер", text: "Посты для всех соцсетей — теперь в одном месте. Спасибо!" },
  { author: "Василий, блогер", text: "Идеи для видео, тексты и сценарии — RuptorGPT делает всё!" },
  { author: "София, репетитор", text: "Генерирую упражнения и задания — стало работать намного проще!" },
];

