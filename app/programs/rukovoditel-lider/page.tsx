import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Программа «Руководитель-лидер» | Надежда Кудрявцева',
  description: 'Развитие адаптивного лидерства и системного делегирования — чтобы управлять из зрелости, а не из гиперконтроля.',
};

export default function RukovoditelLiderPage() {
  return (
    <>
      {/* --- ЗАГОЛОВОК --- */}
      <section className="relative overflow-hidden pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div className="pointer-events-none absolute -top-40 -right-40 w-[36rem] h-[36rem] bg-amber-100/50 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 w-[28rem] h-[28rem] bg-slate-100 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-4 block">Авторская программа</span>
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-6">
            Руководитель-лидер
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Развитие адаптивного лидерства и системного делегирования — чтобы управлять из зрелости и смысла, а не из тревоги и гиперконтроля.
          </p>
        </div>
      </section>

      {/* --- ЧТО РАЗВИВАЕМ --- */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-10 text-center">Что развиваем на программе</h2>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8">
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 text-2xl">🧠</div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">AQ-мышление</h3>
              <p className="text-slate-600 leading-relaxed">Адаптивный интеллект как ключевая управленческая компетенция — способность гибко реагировать на изменения, не теряя опору.</p>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8">
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 text-2xl">🤝</div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Системное делегирование</h3>
              <p className="text-slate-600 leading-relaxed">Передача ответственности так, чтобы команда действительно её брала — вместо ручного управления и постоянного контроля.</p>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8">
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 text-2xl">🎯</div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Лидерские компетенции</h3>
              <p className="text-slate-600 leading-relaxed">Ассертивная обратная связь, постановка задач и работа с сопротивлением — практика, а не только теория.</p>
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Готовы прокачать управленческие компетенции?</h2>
              <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                Начните с диагностики управленческого стиля — она покажет, какие компетенции стоит развивать в первую очередь.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/diagnostics" className="inline-flex justify-center bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:shadow-xl hover:shadow-amber-900/30">
                  Узнать о диагностике
                </Link>
                <Link href="/services/for-leaders" className="inline-flex justify-center bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full text-base font-semibold transition-all">
                  Все форматы для руководителей
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
