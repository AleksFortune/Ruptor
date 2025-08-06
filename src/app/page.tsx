'use client';
import React, { useState, useEffect, useRef } from "react";

// --- AI DEMO: front-чат-бот
const demoScript = [
  { from: "ai", text: "Привет! Я AI-ассистент Ruptor.AI 🤖" },
  { from: "ai", text: "Я умею отвечать на вопросы о бизнесе, автоматизации, AI-системах и технологиях будущего." },
  { from: "ai", text: "Задайте вопрос — или просто напишите «Привет»!" }
];

function DemoAIChat() {
  const [opened, setOpened] = useState(false);
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([...demoScript]);
  const [waiting, setWaiting] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.scrollTop = boxRef.current.scrollHeight;
    }
  }, [chat, opened]);

  function sendMsg(e?: any) {
    if (e) e.preventDefault();
    if (!input.trim()) return;
    setChat(c => [...c, { from: "user", text: input }]);
    setWaiting(true);
    setInput("");
    setTimeout(() => {
      // Сюда можно добавить кастомные “ответы” по ключевым словам
      let answer = "Это отличный вопрос! Наш AI готов автоматизировать любой процесс.";
      if (/привет|hello|здрав/i.test(input)) answer = "Привет 👋! Чем могу помочь?";
      if (/стоим|цена|price/i.test(input)) answer = "Стоимость зависит от задачи. Оставьте заявку — мы подберём оптимальное решение!";
      if (/кейсы|примеры|пример/i.test(input)) answer = "Мы помогли TechNova увеличить конверсию на 30%, RetailX — +24% повторных покупок и другие кейсы!";
      setChat(c => [...c, { from: "ai", text: answer }]);
      setWaiting(false);
    }, 1100 + Math.random() * 800);
  }

  return (
    <>
      {!opened && (
       <button
  style={{
    position: "fixed",
    bottom: 28,
    right: 90,
    zIndex: 100,
    background: "linear-gradient(90deg, #13eaf6 60%, #0ff 100%)",
    color: "#0b0c16",
    borderRadius: "22px 22px 22px 8px",
    boxShadow: "0 2px 16px #13eaf644, 0 0 12px #0ff5",
    fontWeight: 800,
    fontSize: 18,
    padding: "16px 32px 16px 21px",
    border: "none",
    cursor: "pointer",
    transition: ".19s"
  }}
   onClick={() => window.location.href = '/login'}
>
  <span style={{ fontSize: 23, marginRight: 10 }}>🤖</span>
  Попробуйте AI Live Demo
</button>

      )}
      {opened && (
        <div style={{
          position: "fixed", bottom: 26, right: 26, zIndex: 1234,
          width: 350, maxWidth: "96vw", minHeight: 450,
          background: "#1c2031", borderRadius: 22,
          boxShadow: "0 10px 60px #00eaff99, 0 1px 6px #0ff9",
          display: "flex", flexDirection: "column"
        }}>
          <div style={{
            background: "#13eaf6", color: "#02111a", fontWeight: 900,
            padding: "14px 18px 12px 20px", borderRadius: "22px 22px 0 0",
            fontSize: 19, letterSpacing: ".04em", display: "flex", alignItems: "center"
          }}>
            <span style={{ marginRight: 10 }}>🤖</span>
            Ruptor.AI Demo
            <button onClick={() => setOpened(false)}
              style={{
                marginLeft: "auto", background: "none", border: "none",
                color: "#02111a", fontWeight: 900, fontSize: 22, cursor: "pointer"
              }}>×</button>
          </div>
          <div ref={boxRef} style={{
            flex: 1, padding: "18px 12px", overflowY: "auto",
            background: "#151827", fontSize: 16
          }}>
            {chat.map((m, i) => (
              <div key={i} style={{
                marginBottom: 10, display: "flex",
                flexDirection: m.from === "user" ? "row-reverse" : "row"
              }}>
                <div style={{
                  background: m.from === "user" ? "#13eaf6" : "#222d36",
                  color: m.from === "user" ? "#011" : "#fff",
                  borderRadius: m.from === "user" ? "18px 5px 18px 18px" : "5px 18px 18px 18px",
                  padding: "10px 14px", maxWidth: 220, wordBreak: "break-word",
                  boxShadow: "0 2px 10px #13eaf655", fontWeight: 500
                }}>
                  {m.text}
                </div>
              </div>
            ))}
            {waiting &&
              <div style={{
                marginBottom: 10, color: "#13eaf6", fontStyle: "italic",
                fontWeight: 600
              }}>AI печатает…</div>
            }
          </div>
          <form onSubmit={sendMsg}
            style={{
              borderTop: "1.5px solid #13eaf655", display: "flex",
              padding: "10px 11px 10px 13px", gap: 8, background: "#111420"
            }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ваш вопрос…"
              style={{
                flex: 1, padding: "12px 10px", borderRadius: 10, border: "none",
                fontSize: 16, background: "#232c42", color: "#fff"
              }}
              autoFocus
            />
            <button type="submit"
              style={{
                background: "#13eaf6", color: "#02111a", fontWeight: 800,
                border: "none", borderRadius: 9, padding: "0 19px",
                fontSize: 18, cursor: "pointer"
              }}
              disabled={waiting}
            >⮞</button>
          </form>
        </div>
      )}
    </>
  );
}

// --- СКАНЕР ДЛЯ "О компании" ---
function ScannerReveal({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      if (!ref.current) return;
      const top = ref.current.getBoundingClientRect().top;
      if (top < window.innerHeight * 0.7) setShow(true);
    }
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div ref={ref} style={{
      position: "relative",
      overflow: "hidden"
    }}>
      <div style={{
        opacity: show ? 1 : 0,
        transform: show ? "none" : "translateY(40px)",
        transition: "opacity .8s, transform .8s"
      }}>
        {children}
      </div>
      {/* Лазерная линия */}
      <div style={{
        position: "absolute", left: 0, right: 0,
        top: show ? "100%" : "0%",
        height: 3,
        background: "linear-gradient(90deg,#fff 0%,#13eaf6 50%,#13eaf6cc 100%)",
        boxShadow: "0 0 24px #13eaf6cc, 0 0 16px #13eaf6bb",
        borderRadius: 4,
        opacity: show ? 0 : 1,
        transition: "top 1.1s cubic-bezier(.75,0,.2,1), opacity 1.1s"
      }} />
    </div>
  );
}

// --- Основной лендинг
export default function Page() {
  const [openSol, setOpenSol] = useState<number | null>(null);
  const [openCase, setOpenCase] = useState<number | null>(null);

  // Пример данных как раньше
  const solutions = [
    {
      icon: "🤖",
      title: "GPT-ассистенты",
      desc: "AI-помощники для сайтов, CRM и мессенджеров. Отвечают 24/7 и обучаются под бизнес.",
      more: "Виртуальные ассистенты, встроенные в ваши процессы: мгновенные 24/7 ответы, интеграция с CRM, поддержка на сайте, в Telegram и email. Пример: бот для провайдера — 82% обращений обрабатывается без оператора."
    },
    {
      icon: "🔍",
      title: "RAG-системы",
      desc: "ChatGPT на ваших данных, автоматические ответы по PDF, базе знаний.",
      more: "Автоматические ответы на любые вопросы на основе ваших PDF, wiki, базы знаний. Пример: бот для страховой отвечает на 10 000+ документов с точностью 92%."
    },
    {
      icon: "🛒",
      title: "AI для e-commerce",
      desc: "Генерация описаний, рекомендации, прогнозы покупок и оттока.",
      more: "Уникальные описания товаров, прогноз оттока, увеличение чека. Пример: средний чек вырос на 17%, брошенных корзин — минус 23%."
    },
    {
      icon: "🚚",
      title: "AI для логистики",
      desc: "Оптимизация маршрутов, прогноз поставок, анализ складов.",
      more: "Оптимизация маршрутов, прогноз сроков, анализ складов, выявление узких мест. Пример: экономия 5 млн ₽ за 6 месяцев работы AI."
    },
    {
      icon: "👥",
      title: "AI для HR",
      desc: "AI-интервьюеры, разбор резюме, soft skills, автоматизация подбора.",
      more: "AI-интервьюеры, быстрая фильтрация резюме, анализ поведения. Найм ускорился на 40%, AI отсекает 70% нерелевантных кандидатов."
    },
    {
      icon: "🎬",
      title: "AI-видео и аватары",
      desc: "Генерация видео, цифровые аватары, AI-озвучка с эмоциями.",
      more: "Генерация видео по тексту, цифровые аватары, AI-озвучка с эмоциями. В FinEd School — весь цикл видеокурсов автоматизирован: 1 AI-преподаватель = минус 5 сотрудников."
    },
  ];

  const caseStudies = [
    {
      company: "TechNova — SaaS",
      effect: "+30% конверсии",
      short: "Внедрили AI-ассистента на сайт и в CRM.",
      details: (
        <>
          <b>Задача:</b> Увеличить регистрацию и оплату.<br /><br />
          <b>Решение:</b> AI-бот отвечает мгновенно, интеграция с базой знаний.<br /><br />
          <b>Результат:</b> +30% конверсии за 3 недели.<br />
          <i>“80% входящих вопросов закрывает AI!”</i>
        </>
      ),
    },
    {
      company: "RetailX — E-commerce",
      effect: "+24% повторных покупок",
      short: "Рекомендательная AI-модель и “умные” письма.",
      details: (
        <>
          <b>Задача:</b> Снизить брошенные корзины.<br /><br />
          <b>Решение:</b> Внедрили AI-рекомендации, автоматизированные рассылки.<br /><br />
          <b>Результат:</b> Повторные покупки +24%, корзины -23%.<br />
          <i>“Персонализация работает!”</i>
        </>
      ),
    },
    {
      company: "LogiChain — Логистика",
      effect: "-18% затрат",
      short: "AI-оптимизация маршрутов, прогноз загрузки.",
      details: (
        <>
          <b>Задача:</b> Снизить издержки и ускорить доставку.<br /><br />
          <b>Решение:</b> AI-алгоритм строит маршруты в реальном времени.<br /><br />
          <b>Результат:</b> Затраты -18%, эффективность +25%.<br />
          <i>“Экономим более 5 млн ₽ за полгода!”</i>
        </>
      ),
    },
    {
      company: "UrbanStyle — Fashion",
      effect: "+17% средний чек",
      short: "AI-описания и рекомендации на сайте.",
      details: (
        <>
          <b>Задача:</b> Поднять средний чек и повторные заказы.<br /><br />
          <b>Решение:</b> Генерация описаний товаров, AI-рекомендации.<br /><br />
          <b>Результат:</b> Чек +17%, брошенных корзин -23%.<br />
          <i>“AI реально продаёт! Люди стали покупать больше.”</i>
        </>
      ),
    },
    {
      company: "FinEd School — EdTech",
      effect: "5x быстрее курсы",
      short: "AI-генерация видео и цифровые аватары.",
      details: (
        <>
          <b>Задача:</b> Ускорить создание курсов.<br /><br />
          <b>Решение:</b> Автоматизация сценариев, видео и озвучки.<br /><br />
          <b>Результат:</b> Выпуск курса в 5 раз быстрее.<br />
          <i>“Весь цикл от сценария до видео — делает AI!”</i>
        </>
      ),
    },
    {
      company: "CodeCore — IT-рекрутинг",
      effect: "40% ускорение найма",
      short: "AI-анализ soft skills, фильтрация кандидатов.",
      details: (
        <>
          <b>Задача:</b> Ускорить подбор и снизить нагрузку.<br /><br />
          <b>Решение:</b> AI анализирует резюме и переписку.<br /><br />
          <b>Результат:</b> Найм +40% быстрее, 70% “мимо” — отсекает AI.<br />
          <i>“Скоринг по soft skills и личностям.”</i>
        </>
      ),
    }
  ];

  // Форма обратной связи (оставляем из прошлого кода)
  function FeedbackForm() {
    const [sent, setSent] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    return (
      <form
        style={{
          background: "rgba(30,50,60,0.95)",
          borderRadius: 18,
          maxWidth: 400,
          margin: "0 auto",
          padding: "26px 28px",
          boxShadow: "0 6px 40px #13eaf633"
        }}
        onSubmit={e => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <div style={{ fontWeight: 700, color: "#13eaf6", fontSize: 19, marginBottom: 15 }}>
          Напишите нам
        </div>
        <input
          placeholder="Ваше имя"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          style={{
            width: "100%",
            marginBottom: 14,
            padding: "10px 12px",
            borderRadius: 10,
            border: "none",
            fontSize: 16
          }}
          required
        />
        <input
          placeholder="Email для связи"
          type="email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          style={{
            width: "100%",
            marginBottom: 14,
            padding: "10px 12px",
            borderRadius: 10,
            border: "none",
            fontSize: 16
          }}
          required
        />
        <textarea
          placeholder="Ваш вопрос или задача"
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          style={{
            width: "100%",
            minHeight: 80,
            marginBottom: 18,
            padding: "10px 12px",
            borderRadius: 10,
            border: "none",
            fontSize: 16,
            resize: "vertical"
          }}
          required
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "13px 0",
            borderRadius: 10,
            background: "#13eaf6",
            color: "#003",
            fontWeight: 800,
            fontSize: 17,
            border: "none",
            cursor: "pointer",
            boxShadow: "0 2px 14px #13eaf6aa",
            letterSpacing: ".08em"
          }}
          disabled={sent}
        >
          {sent ? "Сообщение отправлено!" : "Отправить"}
        </button>
        {sent && (
          <div style={{ color: "#22ffb5", marginTop: 14, fontWeight: 600, textAlign: "center" }}>
            Спасибо! Мы свяжемся с вами в течение дня.
          </div>
        )}
      </form>
    );
  }

  return (
    <main style={{ minHeight: "100vh", background: "#0b0c16", color: "#fff", fontFamily: "'Orbitron', Arial, sans-serif", position: "relative", overflow: "hidden" }}>
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&display=swap" rel="stylesheet" />

      {/* Фоновое видео */}
      <video autoPlay muted loop playsInline poster="/space-poster.jpg"
        style={{ objectFit: "cover", width: "100vw", height: "100vh", position: "fixed", zIndex: 0, top: 0, left: 0, filter: "brightness(0.8)" }}>
        <source src="/space-bg.mp4" type="video/mp4" />
      </video>

      {/* ----- Контент ------ */}
      <div style={{ position: "relative", zIndex: 1, minHeight: "100vh" }}>
        {/* Header */}
        <header style={{
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "32px 54px 0 18px",
}}>
  <div style={{
    color: "#13eaf6",
    fontWeight: 900,
    fontSize: "1.5em",
    letterSpacing: "0.07em"
  }}>
    Ruptor.AI
  </div>
  <nav className="futurist-menu">
    <a href="#about">О компании</a>
    <a href="#solutions">Решения</a>
    <a href="#cases">Клиенты</a>
    <a href="#contacts">Контакты</a>
  </nav>
  <style>{`
    .futurist-menu {
      display: flex;
      gap: 38px;
      font-weight: 700;
    }
    .futurist-menu a {
      position: relative;
      color: #13eaf6;
      text-decoration: none;
      font-family: 'Orbitron', Arial, sans-serif;
      font-size: 1.07em;
      padding: 7px 12px;
      border-radius: 12px;
      transition: background 0.24s, color 0.15s;
      overflow: hidden;
    }
    .futurist-menu a::after {
      content: '';
      display: block;
      position: absolute;
      left: 14%;
      right: 14%;
      bottom: 4px;
      height: 3px;
      background: linear-gradient(90deg,#13eaf6,#0ff,#13eaf6);
      border-radius: 2px;
      opacity: 0;
      transition: opacity 0.2s, transform 0.22s cubic-bezier(.44,2,.32,1);
      transform: scaleX(0.5);
    }
    .futurist-menu a:hover,
    .futurist-menu a:focus {
      background: rgba(19,234,246,0.14);
      color: #fff;
      box-shadow: 0 0 12px #13eaf6aa;
    }
    .futurist-menu a:hover::after,
    .futurist-menu a:focus::after {
      opacity: 1;
      transform: scaleX(1);
    }
  `}</style>
</header>


        {/* Hero */}
        <section style={{
          width: "100%",
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 44,
          paddingBottom: 44,
        }}>
          <h1 style={{
            fontSize: "clamp(3em, 7vw, 5em)",
            color: "#13eaf6",
            fontWeight: 900,
            textAlign: "center",
            margin: 0,
            letterSpacing: "0.1em",
            textShadow: "0 6px 48px #13eaf655",
            textTransform: "uppercase",
            position: "relative",
            overflow: "visible"
          }}>
            <span style={{
              display: "inline-block",
              animation: "glitch-flicker 1.6s infinite steps(3)",
              position: "relative",
            }}>
              RUPTOR.<span style={{ color: "#fff", filter: "drop-shadow(0 0 6px #0ff)" }}>AI</span>
            </span>
            <style>
              {`
              @keyframes glitch-flicker {
                0% { opacity: 1; filter: none; }
                6% { opacity: 0.7; filter: blur(1.5px); }
                8% { opacity: 1; filter: none; }
                11% { opacity: 0.72; filter: blur(0.7px); }
                12% { opacity: 1; filter: none; }
                17% { opacity: 0.68; filter: blur(2px); }
                18% { opacity: 1; filter: none; }
                21% { opacity: 0.67; filter: blur(1.2px);}
                24% { opacity: 1; filter: none;}
                100% { opacity: 1; filter: none;}
              }
              `}
            </style>
          </h1>
          <h2 style={{
            fontSize: "clamp(2em, 4vw, 3em)",
            color: "#13eaf6",
            fontWeight: 800,
            textAlign: "center",
            margin: "0.22em 0 0.6em 0",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            textShadow: "0 6px 40px #13eaf644"
          }}>
            ИСКУССТВЕННЫЙ <br /> ИНТЕЛЛЕКТ БУДУЩЕГО
          </h2>
          <div style={{
            color: "#fff",
            fontSize: "clamp(1.1em, 2vw, 1.45em)",
            maxWidth: 680,
            textAlign: "center",
            margin: "0 auto 32px auto",
            textShadow: "0 1px 10px #13eaf622"
          }}>
            Ваша бизнес-реальность — уже не завтра, а сегодня.
            <br />
            AI, который работает на вас.
          </div>
          <a
            href="#contacts"
            style={{
              display: "inline-block",
              background: "#13eaf6",
              color: "#0b0c16",
              fontWeight: 700,
              borderRadius: 28,
              padding: "16px 50px",
              fontSize: "1.22em",
              marginTop: 18,
              boxShadow: "0 4px 26px #13eaf655",
              textDecoration: "none",
              letterSpacing: "0.07em",
              transition: "background 0.2s, color 0.2s, box-shadow 0.2s",
              textShadow: "0 0 16px #13eaf6",
              position: "relative",
              overflow: "hidden"
            }}
            onMouseOver={e => { e.currentTarget.style.background = "#0ff"; e.currentTarget.style.color = "#0b0c16"; e.currentTarget.style.boxShadow = "0 0 44px #0ffcc,0 0 10px #13eaf688"; }}
            onMouseOut={e => { e.currentTarget.style.background = "#13eaf6"; e.currentTarget.style.color = "#0b0c16"; e.currentTarget.style.boxShadow = "0 4px 26px #13eaf655"; }}
          >
            СВЯЗАТЬСЯ
          </a>
        </section>

        {/* --- О компании со СКАНЕРОМ --- */}
        <section id="about" style={{ maxWidth: 740, margin: "70px auto 32px auto", padding: "20px 12px" }}>
          <ScannerReveal>
            <div style={{ color: "#13eaf6", fontWeight: 900, fontSize: 30, marginBottom: 16, textAlign: "center", letterSpacing: "0.06em", textShadow: "0 2px 22px #0ff2" }}>
              О компании
            </div>
            <div style={{
              background: "rgba(19,234,246,0.07)",
              borderRadius: 22,
              padding: "22px 26px",
              color: "#bcfdff",
              fontSize: "1.15em",
              fontWeight: 500,
              textShadow: "0 2px 22px #0ff2",
              textAlign: "left"
            }}>
              <b>Ruptor.AI</b> — технологическое агентство нового поколения.<br />
              Мы создаём умные <b>AI</b>-инструменты на базе современных языковых моделей (<b>GPT, RAG</b>), нейросетей и архитектуры <b>RAG</b>.<br />
              Команда: <b>ML</b>-разработчики, дата-инженеры, <b>UX</b>-дизайнеры, <b>AI</b>-стратеги.<br />
              Делаем <b>AI</b> доступным и полезным для компаний любого масштаба!
            </div>
          </ScannerReveal>
        </section>

        {/* --- Что мы делаем (карточки) --- */}
        <section id="solutions" style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 20px 60px 20px" }}>
          <h2 style={{
            textAlign: "center",
            color: "#13eaf6",
            fontWeight: 900,
            fontSize: "clamp(2.4em,6vw,3.6em)",
            marginBottom: "44px",
            letterSpacing: "0.08em",
            textShadow: "0 2px 36px #13eaf655"
          }}>Что мы делаем</h2>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "36px",
            justifyContent: "center"
          }}>
            {solutions.map((s, i) => (
              <div
                key={i}
                onClick={() => setOpenSol(openSol === i ? null : i)}
                style={{
                  cursor: "pointer",
                  background: openSol === i ? "#182345" : "#171926",
                  border: openSol === i ? "2.5px solid #13eaf6" : "2px solid #232d3d",
                  borderRadius: "22px",
                  boxShadow: openSol === i
                    ? "0 0 50px #13eaf655, 0 4px 28px #00eaff22"
                    : "0 4px 18px #00eaff13",
                  padding: "36px 22px 26px 22px",
                  minWidth: 240,
                  maxWidth: 320,
                  transition: "all 0.3s cubic-bezier(.44,2,.32,1)",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative"
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 0 38px #13eaf644, 0 6px 28px #00eaff44";
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "scale(1.04)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    openSol === i
                      ? "0 0 50px #13eaf655, 0 4px 28px #00eaff22"
                      : "0 4px 18px #00eaff13";
                  (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
                }}
              >
                <div style={{
                  fontSize: "2.7em",
                  marginBottom: "0.28em",
                  color: "#13eaf6",
                  filter: openSol === i ? "drop-shadow(0 0 16px #13eaf6bb)" : "none",
                  transition: "filter 0.23s"
                }}>{s.icon}</div>
                <div style={{
                  color: "#13eaf6",
                  fontSize: "1.2em",
                  fontWeight: "bold",
                  marginBottom: 10,
                  textAlign: "center"
                }}>{s.title}</div>
                <div style={{
                  color: "#d9fcff",
                  textAlign: "center",
                  fontSize: "1em",
                  minHeight: 44
                }}>{s.desc}</div>
                {/* раскрытие */}
                {openSol === i && (
                  <div style={{
                    marginTop: 16,
                    color: "#fff",
                    background: "rgba(19,234,246,0.14)",
                    borderRadius: 12,
                    padding: "16px 12px",
                    fontSize: "0.99em",
                    boxShadow: "0 2px 16px #13eaf644",
                    animation: "fadein 0.33s"
                  }}>
                    {s.more}
                  </div>
                )}
                {/* Треугольник-подсказка */}
                <div style={{
                  position: "absolute",
                  right: 18,
                  top: 16,
                  color: "#13eaf6cc",
                  fontSize: "1.1em",
                  opacity: 0.7
                }}>
                  {openSol === i ? "▲" : "▼"}
                </div>
              </div>
            ))}
          </div>
          <div style={{
            textAlign: "center",
            marginTop: 28,
            color: "#fff9",
            fontSize: "1.1em"
          }}>Кликните на карточку, чтобы раскрыть подробности!</div>
        </section>

        {/* Кейсы */}
        <section id="cases" style={{ maxWidth: 1200, margin: "0 auto", padding: "50px 0" }}>
          <h2 style={{ textAlign: "center", color: "#13eaf6", fontWeight: 900, fontSize: "clamp(2em,5vw,2.9em)", marginBottom: "44px", letterSpacing: "0.08em", textShadow: "0 2px 36px #13eaf655" }}>
            Результаты наших клиентов
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "36px", justifyContent: "center" }}>
            {caseStudies.map((c, i) => (
              <div key={i}
                style={{
                  background: "#171926",
                  border: openCase === i ? "2.5px solid #13eaf6" : "2px solid #232d3d",
                  borderRadius: "22px",
                  boxShadow: openCase === i ? "0 0 36px #13eaf655" : "0 4px 18px #00eaff13",
                  padding: "34px 26px 22px 26px", minWidth: 240, maxWidth: 340, color: "#fff", transition: "all .23s", cursor: "pointer", position: "relative"
                }}
                onClick={() => setOpenCase(openCase === i ? null : i)}
              >
                <div style={{ fontWeight: 700, fontSize: 18, color: "#13eaf6", marginBottom: 7 }}>{c.company}</div>
                <div style={{ fontWeight: 600, color: "#22ffa3", fontSize: 15, marginBottom: 6 }}>{c.effect}</div>
                <div style={{ color: "#c3eafd", minHeight: 32 }}>{c.short}</div>
                {openCase === i &&
                  <div style={{ color: "#fff", background: "#122", marginTop: 13, borderRadius: 10, padding: "10px 13px", boxShadow: "0 2px 14px #13eaf644" }}>
                    {c.details}
                  </div>
                }
                <div style={{ position: "absolute", top: 20, right: 18, color: "#13eaf6", fontWeight: 800, fontSize: 22, cursor: "pointer" }}>
                  {openCase === i ? "▲" : "▼"}
                </div>
              </div>
            ))}
          </div>
          <div style={{ color: "#8cefff", textAlign: "center", fontSize: "1.07em", marginTop: 22 }}>Кликните на кейс — чтобы раскрыть подробную историю!</div>
        </section>

        {/* Контакты */}
        <section id="contacts" style={{
          maxWidth: 900,
          margin: "0 auto 60px auto",
          padding: "22px 0"
        }}>
          <h2 style={{
            color: "#13eaf6",
            textAlign: "center",
            fontWeight: 900,
            fontSize: "2.3em",
            letterSpacing: "0.08em"
          }}>Связаться с нами</h2>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 38,
            justifyContent: "center",
            alignItems: "flex-start",
            marginTop: 34
          }}>
            {/* Левая часть — форма */}
            <div style={{ flex: "1 1 320px", minWidth: 280, maxWidth: 420 }}>
              <FeedbackForm />
            </div>
            {/* Правая часть — контакты */}
            <div style={{
              flex: "1 1 220px",
              minWidth: 220,
              background: "rgba(19,234,246,0.09)",
              borderRadius: 18,
              padding: "32px 28px",
              color: "#d1ffff",
              fontSize: "1.09em",
              fontWeight: 500,
              boxShadow: "0 4px 18px #13eaf622",
              alignSelf: "stretch"
            }}>
              <div style={{
                fontWeight: 700,
                fontSize: "1.18em",
                marginBottom: 16,
                color: "#13eaf6"
              }}>Контакты</div>
              <div style={{ marginBottom: 17 }}>
                <span style={{ color: "#7fffcb", fontWeight: 700 }}>Телефон:</span><br />
                <a href="tel:+79991112233" style={{ color: "#fff", textDecoration: "underline" }}>+7&nbsp;999&nbsp;111-22-33</a>
              </div>
              <div style={{ marginBottom: 17 }}>
                <span style={{ color: "#7fffcb", fontWeight: 700 }}>Telegram:</span><br />
                <a href="https://t.me/ruptor_ai" style={{ color: "#fff", textDecoration: "underline" }}>@ruptor_ai</a>
              </div>
              <div>
                <span style={{ color: "#7fffcb", fontWeight: 700 }}>E-mail:</span><br />
                <a href="mailto:hello@ruptor.ai" style={{ color: "#fff", textDecoration: "underline" }}>hello@ruptor.ai</a>
              </div>
            </div>
          </div>
        </section>

        <footer style={{ textAlign: "center", color: "#b7fffa99", margin: "30px 0 10px 0", fontSize: "1.11em", letterSpacing: "0.04em" }}>
          © 2025 Ruptor.AI — Искусственный интеллект нового поколения.
        </footer>
      </div>
      {/* --- Вставка AI Live Demo --- */}
      <DemoAIChat />
    </main>
  );
}
