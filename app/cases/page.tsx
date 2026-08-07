import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Кейсы | Надежда Кудрявцева',
  description: 'Кейсы работы с предпринимателями, руководителями и командами бизнеса.',
};

export default function CasesPage() {
  return (
    <>
      {/* --- ЗАГОЛОВОК --- */}
      <section className="relative overflow-hidden pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div className="pointer-events-none absolute -top-40 -right-40 w-[36rem] h-[36rem] bg-amber-100/50 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 w-[28rem] h-[28rem] bg-slate-100 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-6">
            Кейсы
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Истории работы с предпринимателями, руководителями и командами — что было, что изменилось, что получилось в результате.
          </p>
        </div>
      </section>

      {/* --- В РАЗРАБОТКЕ --- */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center py-20">
            <div className="text-6xl mb-6">📂</div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Кейсы в разработке</h2>
            <p className="text-slate-600 mb-8">Скоро здесь появятся истории клиентов с результатами до и после. А пока — приглашаю на диагностику, чтобы обсудить вашу ситуацию лично.</p>
            <Link href="/diagnostics" className="inline-flex bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full text-base font-semibold transition-all">
              Узнать о диагностике
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
