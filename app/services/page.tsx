import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Услуги | Надежда Кудрявцева',
  description: 'Форматы работы: для предпринимателей и руководителей, для команд бизнеса, для личного развития.',
};

export default function ServicesPage() {
  return (
    <>
      {/* --- ЗАГОЛОВОК --- */}
      <section className="relative overflow-hidden pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div className="pointer-events-none absolute -top-40 -right-40 w-[36rem] h-[36rem] bg-amber-100/50 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 w-[28rem] h-[28rem] bg-slate-100 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-6">
            Услуги
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            От личной устойчивости лидера до системного развития команды и человеческого капитала компании.
          </p>
        </div>
      </section>

      {/* --- НАПРАВЛЕНИЯ --- */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Карточка 1 */}
            <div className="group relative flex flex-col h-full bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-900 p-8 lg:p-10 rounded-[2rem] transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1">
              <span className="absolute top-8 right-8 text-5xl font-bold text-slate-100 group-hover:text-amber-100 transition-colors">01</span>
              <div className="relative flex items-center gap-3 mb-6 pr-14">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform">🚀</div>
                <span className="text-sm font-bold text-amber-700 uppercase tracking-wide leading-snug">Для предпринимателей и руководителей</span>
              </div>
              <p className="relative text-slate-600 mb-6 leading-relaxed flex-1">Прокачайте AQ-мышление, навыки системного делегирования и взрастите лидерские компетенции, чтобы действовать из системы и смысла, а не из стресса.</p>
              <ul className="relative text-sm text-slate-500 space-y-2 mb-8">
                <li>• Диагностика управленческих компетенций</li>
                <li>• Программа «Руководитель-лидер»</li>
              </ul>
              <Link href="/services/for-leaders" className="relative inline-flex items-center gap-2 text-slate-900 hover:text-amber-600 font-semibold hover:gap-3 transition-all mt-auto">
                Узнать подробнее <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>

            {/* Карточка 2 */}
            <div className="group relative flex flex-col h-full bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-900 p-8 lg:p-10 rounded-[2rem] transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1">
              <span className="absolute top-8 right-8 text-5xl font-bold text-slate-100 group-hover:text-amber-100 transition-colors">02</span>
              <div className="relative flex items-center gap-3 mb-6 pr-14">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform">🏢</div>
                <span className="text-sm font-bold text-emerald-700 uppercase tracking-wide leading-snug">Для команд бизнеса</span>
              </div>
              <p className="relative text-slate-600 mb-6 leading-relaxed flex-1">Для HR-директоров и T&amp;D, которым нужна измеримая программа развития лидерства с данными до и после. Начинаем с HR-диагностики: ассессмент, образовательные проекты.</p>
              <ul className="relative text-sm text-slate-500 space-y-2 mb-8">
                <li>• Ассессмент-центр</li>
                <li>• Образовательные проекты и разработка матриц компетенций</li>
                <li>• Практикумы и деловые игры</li>
              </ul>
              <Link href="/services/for-teams" className="relative inline-flex items-center gap-2 text-slate-900 hover:text-amber-600 font-semibold hover:gap-3 transition-all mt-auto">
                Узнать подробнее <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>

            {/* Карточка 3 */}
            <div className="group relative flex flex-col h-full bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-900 p-8 lg:p-10 rounded-[2rem] transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1">
              <span className="absolute top-8 right-8 text-5xl font-bold text-slate-100 group-hover:text-amber-100 transition-colors">03</span>
              <div className="relative flex items-center gap-3 mb-6 pr-14">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform">🧠</div>
                <span className="text-sm font-bold text-blue-700 uppercase tracking-wide leading-snug">Для личного развития</span>
              </div>
              <p className="relative text-slate-600 mb-6 leading-relaxed flex-1">Для тех, кто проходит кризис идентичности, переосмысляет профессиональный путь или теряет смыслы. Психологическая работа с личностью, AQ-коучинг, практикумы и книжный клуб.</p>
              <ul className="relative text-sm text-slate-500 space-y-2 mb-8">
                <li>• Индивидуальный коучинг и психологическая работа по запросу</li>
                <li>• Личная стратегия и пересборка</li>
                <li>• Проект «Искусство замечать»</li>
              </ul>
              <Link href="/services/personal-growth" className="relative inline-flex items-center gap-2 text-slate-900 hover:text-amber-600 font-semibold hover:gap-3 transition-all mt-auto">
                Узнать подробнее <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Не уверены, какой формат подойдёт?</h2>
              <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                Начните с диагностики — за 1.5–2 часа вы получите чёткое понимание, какие инструменты помогут именно вам.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/diagnostics" className="inline-flex justify-center bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:shadow-xl hover:shadow-amber-900/30">
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
