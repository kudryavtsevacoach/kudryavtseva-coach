import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Программы | Надежда Кудрявцева',
  description: 'Авторские программы «Руководитель-лидер» и «Пересборка», а также партнёрские программы с приглашёнными экспертами.',
};

export default function ProgramsPage() {
  return (
    <>
      {/* --- ЗАГОЛОВОК --- */}
      <section className="relative overflow-hidden pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div className="pointer-events-none absolute -top-40 -right-40 w-[36rem] h-[36rem] bg-amber-100/50 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 w-[28rem] h-[28rem] bg-slate-100 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-6">
            Программы
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Авторские программы, которые веду лично, и партнёрские проекты с приглашёнными экспертами.
          </p>
        </div>
      </section>

      {/* --- АВТОРСКИЕ ПРОГРАММЫ --- */}
      <section id="avtorskie" className="py-16 lg:py-20 bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-3 block">Веду лично</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Авторские программы</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="group relative bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-900 p-8 lg:p-10 rounded-[2rem] transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1">
              <div className="relative w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">🧭</div>
              <h3 className="relative text-xl font-bold text-slate-900 mb-4">Руководитель-лидер</h3>
              <p className="relative text-slate-600 mb-6 leading-relaxed">Развитие адаптивного лидерства и системного делегирования — чтобы управлять из зрелости, а не из гиперконтроля.</p>
              <Link href="/programs/rukovoditel-lider" className="relative inline-flex items-center gap-2 text-slate-900 hover:text-amber-600 font-semibold hover:gap-3 transition-all">
                Подробнее о программе <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>

            <div className="group relative bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-900 p-8 lg:p-10 rounded-[2rem] transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1">
              <div className="relative w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">🔄</div>
              <h3 className="relative text-xl font-bold text-slate-900 mb-4">Пересборка</h3>
              <p className="relative text-slate-600 mb-6 leading-relaxed">Трансформация профессионального пути для тех, кто перерос прежнюю роль и ищет новый смысл в деле.</p>
              <Link href="/programs/peresborka" className="relative inline-flex items-center gap-2 text-slate-900 hover:text-amber-600 font-semibold hover:gap-3 transition-all">
                Подробнее о программе <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- ПАРТНЁРСКИЕ ПРОГРАММЫ --- */}
      <section id="partnerskie" className="py-16 lg:py-20 bg-slate-50 border-y border-slate-100 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-10 text-center">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-3 block">Совместные проекты</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Партнёрские программы</h2>
          </div>

          <div className="bg-white p-10 lg:p-14 rounded-[2rem] border border-slate-100 shadow-sm text-center">
            <div className="text-5xl mb-6">🤝</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Раздел в разработке</h3>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Здесь скоро появятся программы, которые я веду совместно с приглашёнными экспертами. Если хотите узнать о них первыми — напишите мне.
            </p>
            <Link href="/contacts" className="inline-flex bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full text-base font-semibold transition-all">
              Связаться со мной
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
