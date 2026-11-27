import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Для предпринимателей, собственников и руководителей | Надежда Кудрявцева',
  description: 'AQ-мышление, системное делегирование и лидерские компетенции — диагностика управленческого стиля и рекомендации по развитию.',
};

export default function ForLeadersPage() {
  return (
    <>
      {/* --- ЗАГОЛОВОК --- */}
      <section className="relative overflow-hidden pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div className="pointer-events-none absolute -top-40 -right-40 w-[36rem] h-[36rem] bg-amber-100/50 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 w-[28rem] h-[28rem] bg-slate-100 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-6">
            Для предпринимателей, собственников и руководителей
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Прокачайте AQ-мышление, навыки системного делегирования и взрастите лидерские компетенции, чтобы действовать из системы и смысла, а не из стресса.
          </p>
        </div>
      </section>

      {/* --- ФОРМАТЫ РАБОТЫ --- */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid max-w-3xl mx-auto gap-6 lg:gap-8">
            {/* Диагностика управленческих компетенций */}
            <div className="group relative bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-900 p-8 lg:p-10 rounded-[2rem] transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1">
              <div className="relative w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">🎯</div>
              <h2 className="relative text-xl font-bold text-slate-900 mb-4">Диагностика управленческих компетенций</h2>
              <p className="relative text-slate-600 mb-6 leading-relaxed">
                Ролевая сессия в формате рабочей симуляции методом ассессмент-центра. Вы получаете структурированную обратную связь и карту из 6 ключевых управленческих компетенций — с понятными индикаторами поведения и рекомендациями по развитию.
              </p>
              <Link href="/diagnostics" className="relative inline-flex items-center gap-2 text-slate-900 hover:text-amber-600 font-semibold hover:gap-3 transition-all">
                Подробнее о диагностике <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Готовы действовать из системы и смысла?</h2>
              <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                Начните с диагностики управленческого стиля — за 1.5–2 часа вы получите чёткое понимание, какие инструменты помогут вам и вашей команде выйти на новый уровень.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/diagnostics" className="inline-flex justify-center bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:shadow-xl hover:shadow-amber-900/30">
                  Узнать о диагностике
                </Link>
                <a href="https://www.b17.ru/nadiya_coach/#contact" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full text-base font-semibold transition-all">
                  Связаться со мной
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
