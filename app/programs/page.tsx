import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Программы | Надежда Кудрявцева',
  description: 'Авторские программы «Пересборка», «Искусство замечать» и практикумы, а также партнёрская программа «Руководитель-лидер» в партнёрстве с AGP.',
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
            Авторские программы — те, что я сама разработала. Партнёрские — образовательные проекты других авторов и школ. Но и те, и другие я провожу лично.
          </p>
        </div>
      </section>

      {/* --- АВТОРСКИЕ ПРОГРАММЫ --- */}
      <section id="avtorskie" className="py-16 lg:py-20 bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-3 block">Автор — Надежда Кудрявцева</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Авторские программы</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="group relative bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-900 p-8 rounded-[2rem] transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1">
              <div className="relative w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">🔄</div>
              <h3 className="relative text-lg font-bold text-slate-900 mb-4">Личная стратегия и пересборка</h3>
              <p className="relative text-slate-600 mb-6 leading-relaxed">Трансформация профессионального пути для тех, кто перерос прежнюю роль и ищет новый смысл в деле.</p>
              <Link href="/programs/peresborka" className="relative inline-flex items-center gap-2 text-slate-900 hover:text-amber-600 font-semibold hover:gap-3 transition-all">
                Подробнее о программе <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>

            <div className="group relative bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-900 p-8 rounded-[2rem] transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1">
              <div className="relative w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">🌸</div>
              <h3 className="relative text-lg font-bold text-slate-900 mb-4">Проект «Искусство замечать»</h3>
              <p className="relative text-slate-600 mb-6 leading-relaxed">Пространство встреч на стыке психологии и искусства — там, где личное развитие говорит на языке литературы, кино и живого разговора.</p>
              <Link href="/vishnevy-sad" className="relative inline-flex items-center gap-2 text-slate-900 hover:text-amber-600 font-semibold hover:gap-3 transition-all">
                Подробнее о лектории <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>

            <div className="group relative bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-900 p-8 rounded-[2rem] transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1">
              <div className="relative w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">✍️</div>
              <h3 className="relative text-lg font-bold text-slate-900 mb-4">Авторские практикумы</h3>
              <p className="relative text-slate-600 mb-6 leading-relaxed">Тематические встречи и практикумы для тех, кто хочет разбираться в себе не в одиночку.</p>
              <Link href="/programs/praktikumy" className="relative inline-flex items-center gap-2 text-slate-900 hover:text-amber-600 font-semibold hover:gap-3 transition-all">
                Подробнее о практикумах <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- ПАРТНЁРСКИЕ ПРОГРАММЫ --- */}
      <section id="partnerskie" className="py-16 lg:py-20 bg-slate-50 border-y border-slate-100 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-3 block">Разработаны другими авторами и школами</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Партнёрские программы</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="group relative bg-white hover:bg-white border border-slate-100 hover:border-slate-900 p-8 lg:p-10 rounded-[2rem] transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1">
              <div className="relative w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">🧭</div>
              <span className="relative inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-semibold mb-4">В партнёрстве с AGP, Академией профессионального управления</span>
              <h3 className="relative text-xl font-bold text-slate-900 mb-4">Руководитель-лидер</h3>
              <p className="relative text-slate-600 mb-6 leading-relaxed">Развитие адаптивного лидерства и системного делегирования — чтобы управлять из зрелости, а не из гиперконтроля.</p>
              <Link href="/programs/rukovoditel-lider" className="relative inline-flex items-center gap-2 text-slate-900 hover:text-amber-600 font-semibold hover:gap-3 transition-all">
                Подробнее о программе <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>


          </div>
        </div>
      </section>
    </>
  );
}
