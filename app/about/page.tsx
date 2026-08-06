import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Обо мне | Надежда Кудрявцева',
  description: 'Надежда Кудрявцева — AQ бизнес-коуч. Опыт в экономике, управлении IT-командами и обучении взрослых.',
};

export default function AboutPage() {
  return (
    <>
      {/* --- ПРЕДСТАВЛЕНИЕ --- */}
      <section className="relative overflow-hidden pt-12 pb-12 lg:pt-16 lg:pb-16">
        <div className="pointer-events-none absolute -top-40 -left-40 w-[36rem] h-[36rem] bg-amber-100/50 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-slate-100 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-200/40 via-transparent to-slate-300/40 rounded-[2.5rem] blur-2xl" />
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-300/60 ring-1 ring-slate-900/5">
                <Image
                  src="/photos/about/nadezhda-about.jpg"
                  alt="Надежда Кудрявцева — AQ бизнес-коуч"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h1 className="text-2xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6 whitespace-nowrap">
                Надежда Кудрявцева
              </h1>

              <p className="text-2xl lg:text-3xl font-semibold text-slate-800 leading-snug border-l-4 border-amber-500 pl-6 italic mb-8 max-w-lg">
                «Руководитель-лидер — это профессия»
              </p>

              <p className="text-lg text-slate-500 leading-relaxed mb-6 max-w-lg">
                Меня зовут Надежда Кудрявцева. Я понимаю бизнес изнутри — с цифрами, процессами и людьми. За плечами 10 лет в экономике, 5 лет в управлении IT-командами и 7 лет в обучении взрослых.
              </p>

              <p className="text-lg text-slate-500 leading-relaxed mb-6 max-w-lg">
                Я пришла в коучинг и психологию не из теории. Я прошла через собственные точки переосмысления — и знаю, как это работает на практике.
              </p>

              <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
                Сегодня работаю на стыке бизнеса и психологии. Помогаю лидерам и предпринимателям находить свой путь — будь то системное делегирование, профессиональная суперсила или новый смысл в деле.
              </p>

              <div>
                <p className="text-lg text-slate-700 font-medium mb-4">Есть вопросы? Спрашивайте!</p>
                <a href="https://www.b17.ru/nadiya_coach/#contact" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:shadow-xl hover:shadow-amber-900/20">
                  Вопрос Надежде
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ПРАКТИЧЕСКИЙ ОПЫТ --- */}
      <section className="py-12 lg:py-16 bg-[#FAFAF9]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Практический опыт</h2>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 px-8 py-14 lg:px-16 lg:py-16 text-white shadow-2xl shadow-slate-900/20">
            <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 bg-slate-700/30 rounded-full blur-3xl" />

            <div className="relative">
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
                <div className="text-center">
                  <p className="text-4xl lg:text-5xl font-bold text-amber-500 mb-2">10+</p>
                  <p className="text-sm text-slate-300 leading-snug">лет в экономике и финансах</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl lg:text-5xl font-bold text-amber-500 mb-2">5+</p>
                  <p className="text-sm text-slate-300 leading-snug">лет в управлении IT</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl lg:text-5xl font-bold text-amber-500 mb-2">7+</p>
                  <p className="text-sm text-slate-300 leading-snug">лет в обучении взрослых</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl lg:text-5xl font-bold text-amber-500 mb-2">100+</p>
                  <p className="text-sm text-slate-300 leading-snug">руководителей обучились на программе «Руководитель-лидер»</p>
                </div>
                <div className="text-center col-span-2 lg:col-span-1">
                  <p className="text-4xl lg:text-5xl font-bold text-amber-500 mb-2">200+</p>
                  <p className="text-sm text-slate-300 leading-snug">участников прошли оценку компетенций методом Ассессмент-центра</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ОБРАЗОВАНИЕ И РЕГАЛИИ --- */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Образование и регалии</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Психолог-аналитик',
              'Дипломированный AQ бизнес-коуч, Институт адаптивного интеллекта',
              'Тренер-наставник AGP, Академия профессионального управления (Артём Губарец)',
              'Высшее экономическое и педагогическое образование',
              'Профпереподготовка: бизнес-тренер, коуч, психолог-консультант',
              'Призёр Всероссийского конкурса «Мастер бизнес-тренинга 2025», диплом 2 степени, от Ассоциации бизнес-тренеров РФ',
              'Автор статей, публикация в сборнике «Инсайты Бизнеса Вместо Советов» (2025)',
              'Авторизованный участник Союза РПЧ',
              'Финалист Международного Конкурса Мастер Спикер, 2026',
            ].map((item, i, arr) => (
              <div
                key={item}
                className={`flex items-start gap-4 bg-slate-50 border border-slate-100 rounded-2xl p-6 ${i === arr.length - 1 && arr.length % 2 === 1 ? 'md:col-span-2' : ''}`}
              >
                <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold">✓</span>
                <p className="text-slate-600 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- КЛИЕНТЫ --- */}
      <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-10">Благодарю за доверие</h2>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
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
                className="h-14 sm:h-16 w-auto object-contain opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Инвестируйте в человеческий капитал.</h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Счастливые люди делают сильный бизнес. Это не просто красивая фраза — это то, что я вижу в работе каждый день. Приходите — разберёмся, как это работает у вас.
          </p>
          <div className="flex justify-center">
            <Link href="/services/for-leaders/diagnostics" className="group inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:shadow-xl hover:shadow-slate-900/20">
              Пройти диагностику
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
