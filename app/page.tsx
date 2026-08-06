import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BarrierFlipCard from '@/components/BarrierFlipCard';

const TICKER_ITEMS = [
  'Психолог-аналитик',
  'AQ бизнес-коуч',
  'Тренер-наставник AGP',
  'Призёр «Мастер бизнес-тренинга 2025»',
  'Финалист Конкурса Мастер Спикер 2026',
  'Проводник знаний в практику',
  '7+ лет в обучении взрослых',
  'Союз РПЧ',
  'Ижевск · Онлайн',
];

export default function Home() {
  return (
    <>
      {/* --- ГЛАВНЫЙ ЭКРАН (Hero) --- */}
      <section className="relative">
        <div className="relative overflow-hidden pt-16 pb-16 lg:pt-20 lg:pb-20">
          <div className="pointer-events-none absolute -top-40 -right-40 w-[36rem] h-[36rem] bg-amber-100/50 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 w-[28rem] h-[28rem] bg-slate-100 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-20 lg:gap-y-8">
              {/* Блок 1: таблетка + заголовок */}
              <div className="lg:col-start-1 lg:row-start-1">
                <div className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 py-2 bg-amber-100 text-amber-800 rounded-2xl sm:rounded-full text-xs font-medium mb-6 max-w-full">
                  <span className="whitespace-nowrap">Психолог-аналитик</span>
                  <span className="opacity-40">·</span>
                  <span className="whitespace-nowrap">AQ бизнес-коуч</span>
                  <span className="opacity-40">·</span>
                  <span className="whitespace-nowrap">Тренер-наставник AGP</span>
                </div>

                <h1
                  className="text-3xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]"
                  aria-label="Архитектор развития. Изменения, которые остаются."
                >
                  Архитектор развития.<br />
                  Изменения, которые остаются.
                </h1>
              </div>

              {/* Блок 2: фото + имя */}
              <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-center">
                <div className="relative max-w-[280px] mx-auto lg:max-w-none">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-amber-200/40 via-transparent to-slate-300/40 rounded-[2.5rem] blur-2xl" />
                  <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-300/60 ring-1 ring-slate-900/5">
                    <Image
                      src="/photos/hero/nadezhda-hero.jpg"
                      alt="Надежда Кудрявцева — психолог-аналитик, AQ бизнес-коуч"
                      fill
                      priority
                      sizes="(min-width: 1024px) 50vw, 280px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="text-center mt-4">
                  <p className="font-medium text-slate-900">Надежда Кудрявцева</p>
                  <p className="text-xs text-slate-500 mt-0.5">Архитектор развития</p>
                </div>
              </div>

              {/* Блок 3: подзаголовок, описание, буллеты, кнопки */}
              <div className="lg:col-start-1 lg:row-start-2">
                <p className="text-lg text-slate-600 leading-relaxed mb-6 max-w-lg">
                  Помогаю лидерам и командам расти устойчиво — через психологию управления, адаптивный интеллект и личностное развитие.
                </p>

                <div className="border-l-2 border-amber-500 rounded-none pl-3 mb-8 max-w-lg">
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Соединяю процессы, смыслы и людей: психологию лидерства, AQ-методологию и управленческие инструменты. Проводник знаний в практику.
                  </p>
                </div>

                <ul className="space-y-3 mb-10 max-w-lg">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-[10px] font-bold">✓</span>
                    <span className="text-slate-600 leading-relaxed">Лидер управляет из зрелости, а не из тревоги и гиперконтроля</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-[10px] font-bold">✓</span>
                    <span className="text-slate-600 leading-relaxed">Команда работает ответственно и ассертивно</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-[10px] font-bold">✓</span>
                    <span className="text-slate-600 leading-relaxed">Кризисы идентичности становятся точками роста и перехода</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-[10px] font-bold">✓</span>
                    <span className="text-slate-600 leading-relaxed">Изменения держатся — потому что меняется личность, а не поведение</span>
                  </li>
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/services/for-leaders/diagnostics" className="group inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:shadow-xl hover:shadow-amber-900/20">
                    Пройти диагностику
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                  <Link href="/services" className="inline-flex justify-center bg-white/70 hover:bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full text-base font-semibold transition-all backdrop-blur-sm">
                    Посмотреть программы
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Бегущая строка */}
        <div aria-hidden="true" className="border-t border-slate-200 bg-slate-100/70 overflow-hidden py-2.5">
          <div className="flex gap-5 whitespace-nowrap w-max animate-ticker text-xs text-slate-500">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <Fragment key={i}>
                <span>{item}</span>
                <span className="opacity-40">·</span>
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* --- НОВЫЙ БЛОК: ЧЕК-ЛИСТ ОСОЗНАННОСТИ --- */}
      <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Что мешает вам учиться прямо сейчас?</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Чаще всего — не нехватка способностей, а ожидание особых условий. Не ожидайте, а создавайте среду, учитесь понемногу каждый день — именно так появляется настоящее изменение. Маленькие шаги создают результат.
            </p>
          </div>

          <p className="text-center text-sm text-slate-400 mb-6 md:hidden">Нажмите на карточку, чтобы увидеть решение</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Карточка 1 */}
            <BarrierFlipCard
              title="«У меня нет времени на обучение»"
              description="Кажется, что учеба — это отрыв от реальных задач и потеря темпа."
              solution="Осознанное обучение не отнимает время, а умножает его. 10 минут рефлексии в день экономят часы тушения пожаров."
              graphic={
                <svg viewBox="0 0 120 120" className="w-24 h-24" aria-hidden="true">
                  <circle cx="60" cy="60" r="56" className="fill-amber-50" />
                  <path d="M24 44a40 40 0 000 32" className="stroke-amber-300" strokeWidth="3" strokeLinecap="round" fill="none" />
                  <path d="M96 44a40 40 0 010 32" className="stroke-amber-300" strokeWidth="3" strokeLinecap="round" fill="none" />
                  <circle cx="60" cy="60" r="34" className="fill-white stroke-slate-900" strokeWidth="4" />
                  <line x1="60" y1="60" x2="60" y2="38" className="stroke-slate-900" strokeWidth="4" strokeLinecap="round" />
                  <line x1="60" y1="60" x2="76" y2="68" className="stroke-amber-500" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="60" cy="60" r="3.5" className="fill-slate-900" />
                </svg>
              }
            />

            {/* Карточка 2 */}
            <BarrierFlipCard
              title="«Жду идеального момента для изменений»"
              description="Страх начать, пока в бизнесе или в голове не наступит «полный штиль»."
              solution="Идеального момента не существует. Учиться и менять систему нужно прямо в процессе, делая маленькие шаги."
              graphic={
                <svg viewBox="0 0 120 120" className="w-24 h-24" aria-hidden="true">
                  <circle cx="60" cy="60" r="56" className="fill-amber-50" />
                  <circle cx="88" cy="76" r="11" className="fill-amber-300" />
                  <g className="stroke-amber-300" strokeWidth="3" strokeLinecap="round">
                    <line x1="88" y1="56" x2="88" y2="61" />
                    <line x1="107" y1="76" x2="102" y2="76" />
                    <line x1="99" y1="65" x2="96" y2="68" />
                  </g>
                  <ellipse cx="46" cy="54" rx="26" ry="15" className="fill-slate-900" />
                  <circle cx="32" cy="50" r="13" className="fill-slate-900" />
                  <circle cx="58" cy="47" r="15" className="fill-slate-900" />
                  <path d="M50 68l-8 16h9l-5 14 16-20h-10l6-10z" className="fill-amber-500" />
                </svg>
              }
            />

            {/* Карточка 3 */}
            <BarrierFlipCard
              title="«Сотрудники не берут ответственность»"
              description="Ощущение, что вы тянете всё на себе, а команда просто исполняет приказы."
              solution="Люди не растут в условиях тотального контроля. Им нужна безопасная психологическая среда и смыслы, а не просто инструкции."
              graphic={
                <svg viewBox="0 0 120 120" className="w-24 h-24" aria-hidden="true">
                  <circle cx="60" cy="60" r="56" className="fill-amber-50" />
                  <rect x="30" y="30" width="26" height="26" rx="6" className="fill-slate-900" />
                  <circle cx="56" cy="43" r="6.5" className="fill-slate-900" />
                  <rect x="64" y="30" width="26" height="26" rx="6" className="fill-slate-300" />
                  <rect x="30" y="64" width="26" height="26" rx="6" className="fill-slate-300" />
                  <rect x="64" y="64" width="26" height="26" rx="6" className="fill-amber-500" />
                  <circle cx="77" cy="64" r="6.5" className="fill-amber-500" />
                </svg>
              }
            />
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6 text-lg">Узнали себя или свою команду хотя бы в одном пункте?</p>
            <Link href="/services" className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:shadow-xl hover:shadow-slate-900/20">
              Начать с маленького шага
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* --- КОМУ Я ПОМОГАЮ --- */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">Кому я помогаю</h2>
            <p className="text-lg text-slate-600">От личной устойчивости лидера до системного развития команды и человеческого капитала компании.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Карточка 1 */}
            <div className="flex flex-col h-full bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-900 p-8 lg:p-10 rounded-[2rem] transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1">
              <span className="inline-block self-start px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-semibold mb-6">Персональная работа</span>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Масштабируете бизнес через людей или хотите выйти из ручного управления?</h3>
              <p className="text-slate-600 mb-6 leading-relaxed flex-1">Для предпринимателей и руководителей, которые масштабируют бизнес через людей или хотят выйти из ручного управления — чтобы действовать из системы и смысла, а не из стресса. Развиваем AQ-мышление, навыки делегирования и лидерские компетенции.</p>
              <ul className="text-sm text-slate-500 space-y-2 mb-8">
                <li>• Диагностика управленческих компетенций</li>
                <li>• AI-тренажёр управленческих диалогов</li>
                <li>• Программа «Руководитель-лидер»</li>
              </ul>
              <Link href="/services/for-leaders/diagnostics" className="inline-flex items-center gap-2 text-slate-900 hover:text-amber-600 font-semibold hover:gap-3 transition-all mt-auto">
                Пройти диагностику <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>

            {/* Карточка 2 */}
            <div className="flex flex-col h-full bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-900 p-8 lg:p-10 rounded-[2rem] transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1">
              <span className="inline-block self-start px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-semibold mb-6">Корпоративные форматы</span>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Команда есть. Системы развития человеческого капитала — нет</h3>
              <p className="text-slate-600 mb-6 leading-relaxed flex-1">Для HR-директоров и T&amp;D, которым нужна измеримая программа развития лидерства с данными до и после. Начинаем с HR-диагностики: ассессмент, образовательные проекты.</p>
              <ul className="text-sm text-slate-500 space-y-2 mb-8">
                <li>• Ассессмент-центр</li>
                <li>• Образовательные проекты и разработка матриц компетенций</li>
                <li>• Практикумы и деловые игры</li>
              </ul>
              <Link href="/contacts" className="inline-flex items-center gap-2 text-slate-900 hover:text-amber-600 font-semibold hover:gap-3 transition-all mt-auto">
                Обсудить проект <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>

            {/* Карточка 3 */}
            <div className="flex flex-col h-full bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-900 p-8 lg:p-10 rounded-[2rem] transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1">
              <span className="inline-block self-start px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold mb-6">Работа с личностью</span>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Выросли из себя прежнего — и не знаете, кто теперь</h3>
              <p className="text-slate-600 mb-6 leading-relaxed flex-1">Для тех, кто проходит кризис идентичности, переосмысляет профессиональный путь или теряет смыслы. Психологическая работа с личностью, AQ-коучинг, практикумы и книжный клуб.</p>
              <ul className="text-sm text-slate-500 space-y-2 mb-8">
                <li>• Индивидуальный коучинг AQ</li>
                <li>• Личная стратегия и пересборка</li>
                <li>• Авторские практикумы</li>
                <li>• Книжный клуб</li>
              </ul>
              <Link href="/programs/peresborka" className="inline-flex items-center gap-2 text-slate-900 hover:text-amber-600 font-semibold hover:gap-3 transition-all mt-auto">
                Узнать о «Пересборке» <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- КАК ЭТО РАБОТАЕТ --- */}
      <section className="py-16 lg:py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Как это работает</h2>
            <p className="text-lg text-slate-600">Система, смыслы и результат — от диагностики до изменений, которые держатся.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white border border-slate-100 rounded-[2rem] p-8">
              <span className="block text-3xl font-bold text-amber-500 mb-4">01</span>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Диагностика</h3>
              <p className="text-slate-600 leading-relaxed">Понимаем, где вы сейчас. Управленческая или личностная диагностика даёт точку отсчёта — без предположений, на реальных данных.</p>
            </div>
            <div className="bg-white border border-slate-100 rounded-[2rem] p-8">
              <span className="block text-3xl font-bold text-amber-500 mb-4">02</span>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Маршрут и формат</h3>
              <p className="text-slate-600 leading-relaxed">Выбираем подход под вашу задачу: коучинг, программа, AI-тренировки или командный формат.</p>
            </div>
            <div className="bg-white border border-slate-100 rounded-[2rem] p-8">
              <span className="block text-3xl font-bold text-amber-500 mb-4">03</span>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Системная работа</h3>
              <p className="text-slate-600 leading-relaxed">Регулярная практика и обратная связь. Не разовое событие — процесс с измеримым результатом.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- В ЧИСЛАХ --- */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">В числах</h2>
            <p className="text-lg text-slate-600">Практика, которая измеряется.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-8">
            <div className="bg-slate-50 rounded-2xl p-6 text-center">
              <p className="text-3xl font-medium text-slate-900 mb-1">100+</p>
              <p className="text-xs text-slate-500 leading-snug">руководителей прошли программу «Руководитель-лидер»</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 text-center">
              <p className="text-3xl font-medium text-slate-900 mb-1">200+</p>
              <p className="text-xs text-slate-500 leading-snug">участников прошли оценку компетенций Ассессмент-центра</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 text-center">
              <p className="text-3xl font-medium text-slate-900 mb-1">1000+</p>
              <p className="text-xs text-slate-500 leading-snug">часов практики коучинга</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 text-center">
              <p className="text-3xl font-medium text-slate-900 mb-1">7+</p>
              <p className="text-xs text-slate-500 leading-snug">лет в обучении взрослых</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-slate-200 rounded-xl p-6 lg:p-8">
              <p className="text-3xl font-medium text-amber-600 mb-3">70%</p>
              <p className="text-slate-600 leading-relaxed mb-4">вовлечённости команды определяется поведением её руководителя, а не продуктом или рынком</p>
              <p className="text-[11px] text-slate-400">Gallup State of the Global Workplace, 2023</p>
            </div>
            <div className="border border-slate-200 rounded-xl p-6 lg:p-8">
              <p className="text-3xl font-medium text-amber-600 mb-3">×1,5</p>
              <p className="text-slate-600 leading-relaxed mb-4">эффективнее работают компании, системно развивающие управленческие компетенции</p>
              <p className="text-[11px] text-slate-400">McKinsey &amp; Company</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- ЛОГОТИПЫ КЛИЕНТОВ --- */}
      <section className="py-16 lg:py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-10">Доверяют</p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
            {[
              { src: '/photos/clients/federatsiya.png', alt: 'Федерация', width: 419, height: 120 },
              { src: '/photos/clients/autolife-logistic.png', alt: 'AUTOLIFE logistic', width: 292, height: 117 },
              { src: '/photos/clients/uds-oil.png', alt: 'UDS OIL', width: 138, height: 138 },
              { src: '/photos/clients/poleznye-lyudi.png', alt: 'Полезные люди', width: 135, height: 127 },
              { src: '/photos/clients/green-cosmetics.png', alt: 'Green Cosmetics', width: 200, height: 189 },
              { src: '/photos/clients/it-opt18.png', alt: 'IT opt18', width: 280, height: 120 },
            ].map((logo) => (
              <Image
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-10 sm:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-200"
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- О НАДЕЖДЕ --- */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-12 text-center">О Надежде</h2>

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-2">
              <div className="relative max-w-xs mx-auto lg:max-w-none">
                <div className="absolute -inset-4 bg-gradient-to-tr from-amber-200/40 via-transparent to-slate-300/40 rounded-[2.5rem] blur-2xl" />
                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-300/60 ring-1 ring-slate-900/5">
                  <Image
                    src="/photos/about/nadezhda-about.jpg"
                    alt="Надежда Кудрявцева — психолог-аналитик, AQ бизнес-коуч"
                    fill
                    sizes="(min-width: 1024px) 40vw, 320px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <p className="text-sm font-semibold text-slate-900 mb-1">Надежда Кудрявцева</p>
              <p className="text-xs text-slate-500 mb-6">Психолог-аналитик · AQ бизнес-коуч · Архитектор развития</p>

              <p className="text-xl lg:text-2xl font-medium text-slate-900 leading-snug mb-6">
                Руководитель-лидер — это профессия. Обучаю профессии, которую большинство осваивает методом проб и ошибок. Популяризирую ассертивные отношения в бизнесе и жизни — и адаптивность как ключевую компетенцию лидера.
              </p>

              <p className="text-sm text-slate-500 leading-relaxed mb-8">
                За плечами 10 лет в экономике, 5 лет в IT-управлении и 7 лет в обучении взрослых. Знаю бизнес изнутри — с цифрами, дедлайнами и ответственностью за результат. Работаю на пересечении психологии лидерства, AQ-методологии и управленческих систем.
              </p>

              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                {[
                  'Психолог-аналитик',
                  'Дипломированный AQ бизнес-коуч, Институт адаптивного интеллекта',
                  'Тренер-наставник AGP, Академия профессионального управления (Артём Губарец)',
                  'Призёр «Мастер бизнес-тренинга 2025», диплом 2 степени',
                  'Финалист Конкурса Мастер Спикер, 2026',
                  'Авторизованный участник Союза РПЧ',
                  'Автор статьи, сборник «Инсайты Бизнеса Вместо Советов» (2025)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-[9px] font-bold">✓</span>
                    <span className="text-sm text-slate-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/about" className="inline-flex items-center gap-2 text-slate-900 hover:text-amber-600 font-semibold hover:gap-3 transition-all">
                Узнать больше <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-16 lg:py-20 bg-[#FAFAF9]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 px-8 py-16 lg:px-20 lg:py-20 text-center text-white shadow-2xl shadow-slate-900/20">
            <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 bg-slate-700/30 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">Готовы раскрыть потенциал вашей команды?</h2>
              <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto">
                Всего за 1.5–2 часа диагностики вы получите четкое понимание, какие управленческие инструменты помогут вам выйти на новый уровень.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/services/for-leaders/diagnostics" className="inline-flex justify-center bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:shadow-xl hover:shadow-amber-900/30">
                  Узнать о диагностике
                </Link>
                <Link href="/contacts" className="inline-flex justify-center bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full text-base font-semibold transition-all">
                  Связаться со мной
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}