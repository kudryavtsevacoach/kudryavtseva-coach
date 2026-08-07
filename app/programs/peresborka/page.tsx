import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Программа «Пересборка» | Надежда Кудрявцева',
  description: 'Трансформация профессионального пути для тех, кто перерос прежнюю роль и ищет новый смысл в деле.',
};

export default function PeresborkaPage() {
  return (
    <>
      {/* --- ЗАГОЛОВОК --- */}
      <section className="relative overflow-hidden pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div className="pointer-events-none absolute -top-40 -right-40 w-[36rem] h-[36rem] bg-amber-100/50 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 w-[28rem] h-[28rem] bg-slate-100 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-4 block">Авторская программа</span>
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-6">
            Пересборка
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Трансформация профессионального пути для тех, кто перерос прежнюю роль, проходит кризис идентичности или ищет новый смысл в деле.
          </p>
        </div>
      </section>

      {/* --- ЗАЧЕМ --- */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-slate-50 p-10 lg:p-14 rounded-[2rem] border border-slate-100 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">Приглашаю на «Пересборку», если вы замечаете, что:</h2>
            <ul className="text-left max-w-xl mx-auto space-y-4 text-lg text-slate-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-[10px] font-bold">✓</span>
                Прежние цели и роли больше не отзываются, а новые ещё не оформились.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-[10px] font-bold">✓</span>
                Вы переросли прежнюю профессиональную роль, но не понимаете, куда двигаться дальше.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-[10px] font-bold">✓</span>
                Хочется не косметических правок, а честной пересборки — целей, идентичности, дела.
              </li>
            </ul>
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Готовы к своей «Пересборке»?</h2>
              <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                Напишите мне — расскажу подробнее о формате и подберём подходящий темп работы.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contacts" className="inline-flex justify-center bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:shadow-xl hover:shadow-amber-900/30">
                  Связаться со мной
                </Link>
                <Link href="/services/personal-growth" className="inline-flex justify-center bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full text-base font-semibold transition-all">
                  Все форматы для личного развития
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
