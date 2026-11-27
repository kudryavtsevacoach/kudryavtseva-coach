import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Для личного развития | Надежда Кудрявцева',
  description: 'Индивидуальный коучинг, личная стратегия и пересборка, авторские практикумы, книжный клуб и проект «Искусство замечать».',
};

export default function PersonalGrowthPage() {
  return (
    <>
      {/* --- ЗАГОЛОВОК --- */}
      <section className="relative overflow-hidden pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div className="pointer-events-none absolute -top-40 -right-40 w-[36rem] h-[36rem] bg-amber-100/50 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 w-[28rem] h-[28rem] bg-slate-100 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-6">
            Выросли из себя прежнего — и не знаете, кто теперь
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Для тех, кто проходит кризис идентичности, переосмысляет профессиональный путь или теряет смыслы.
          </p>
        </div>
      </section>

      {/* --- ФОРМАТЫ РАБОТЫ --- */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="group relative bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-900 p-8 rounded-[2rem] transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1">
              <div className="relative w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">🧭</div>
              <h2 className="relative text-lg font-bold text-slate-900 mb-4">Индивидуальный коучинг и психологическая работа по запросу</h2>
              <p className="relative text-slate-600 leading-relaxed">
                Работаем с конкретным запросом — от рабочего кризиса до вопросов идентичности — в интегральном подходе.
              </p>
            </div>

            <div className="group relative bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-900 p-8 rounded-[2rem] transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1">
              <div className="relative w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">🔄</div>
              <h2 className="relative text-lg font-bold text-slate-900 mb-4">Личная стратегия и пересборка</h2>
              <p className="relative text-slate-600 leading-relaxed mb-6">
                Программа «Пересборка» — трансформация профессионального пути для тех, кто перерос прежнюю роль.
              </p>
              <Link href="/programs/peresborka" className="relative inline-flex items-center gap-2 text-slate-900 hover:text-amber-600 font-semibold hover:gap-3 transition-all">
                Узнать о «Пересборке» <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>

            <div className="group relative bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-900 p-8 rounded-[2rem] transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1">
              <div className="relative w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">✍️</div>
              <h2 className="relative text-lg font-bold text-slate-900 mb-4">Авторские практикумы</h2>
              <p className="relative text-slate-600 leading-relaxed mb-6">
                Тематические встречи и практикумы для тех, кто хочет разбираться в себе не в одиночку.
              </p>
              <Link href="/programs/praktikumy" className="relative inline-flex items-center gap-2 text-slate-900 hover:text-amber-600 font-semibold hover:gap-3 transition-all">
                Подробнее о практикумах <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>

            <div className="group relative bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-900 p-8 rounded-[2rem] transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1">
              <div className="relative w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">🌸</div>
              <h2 className="relative text-lg font-bold text-slate-900 mb-4">Проект «Искусство замечать»</h2>
              <p className="relative text-slate-600 leading-relaxed mb-6">
                Пространство встреч на стыке психологии и искусства.
              </p>
              <Link href="/vishnevy-sad" className="relative inline-flex items-center gap-2 text-slate-900 hover:text-amber-600 font-semibold hover:gap-3 transition-all">
                Подробнее о проекте <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Готовы начать разбираться в себе?</h2>
              <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                Напишите мне — обсудим ваш запрос и подберём подходящий формат.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contacts" className="inline-flex justify-center bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:shadow-xl hover:shadow-amber-900/30">
                  Связаться со мной
                </Link>
                <Link href="/services" className="inline-flex justify-center bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full text-base font-semibold transition-all">
                  Все услуги
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
