import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Для команд бизнеса | Надежда Кудрявцева',
  description: 'Ассессмент-центр, образовательные проекты и разработка матриц компетенций — измеримая программа развития лидерства для HR-директоров и T&D.',
};

export default function ForTeamsPage() {
  return (
    <>
      {/* --- ЗАГОЛОВОК --- */}
      <section className="relative overflow-hidden pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div className="pointer-events-none absolute -top-40 -right-40 w-[36rem] h-[36rem] bg-amber-100/50 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 w-[28rem] h-[28rem] bg-slate-100 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-6">
            Команда есть. Системы развития человеческого капитала — нет
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Для HR-директоров и T&amp;D, которым нужна измеримая программа развития лидерства с данными до и после.
          </p>
        </div>
      </section>

      {/* --- ФОРМАТЫ РАБОТЫ --- */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="group relative bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-900 p-8 rounded-[2rem] transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1">
              <div className="relative w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">🎯</div>
              <h2 className="relative text-lg font-bold text-slate-900 mb-4">Ассессмент-центр</h2>
              <p className="relative text-slate-600 leading-relaxed">
                Объективная оценка управленческих компетенций команды методом рабочей симуляции — с картой сильных сторон и зон развития.
              </p>
            </div>

            <div className="group relative bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-900 p-8 rounded-[2rem] transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1">
              <div className="relative w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">📐</div>
              <h2 className="relative text-lg font-bold text-slate-900 mb-4">Образовательные проекты и матрицы компетенций</h2>
              <p className="relative text-slate-600 leading-relaxed">
                Разработка модели компетенций под задачи бизнеса и программ обучения, которые в неё встраиваются.
              </p>
            </div>

            <div className="group relative bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-900 p-8 rounded-[2rem] transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1">
              <div className="relative w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">🎲</div>
              <h2 className="relative text-lg font-bold text-slate-900 mb-4">Практикумы и деловые игры</h2>
              <p className="relative text-slate-600 leading-relaxed">
                Командные форматы для отработки управленческих навыков в безопасной, но реалистичной среде.
              </p>
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Обсудим задачи вашей команды?</h2>
              <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                Расскажите о ситуации в команде — предложу формат диагностики и программу под ваш запрос.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contacts" className="inline-flex justify-center bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:shadow-xl hover:shadow-amber-900/30">
                  Обсудить проект
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
