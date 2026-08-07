import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Мероприятия | Надежда Кудрявцева',
  description: 'Открытые мероприятия, встречи и практикумы Надежды Кудрявцевой.',
};

export default function EventsPage() {
  return (
    <>
      {/* --- ЗАГОЛОВОК --- */}
      <section className="relative overflow-hidden pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div className="pointer-events-none absolute -top-40 -right-40 w-[36rem] h-[36rem] bg-amber-100/50 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 w-[28rem] h-[28rem] bg-slate-100 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-6">
            Мероприятия
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Открытые встречи, практикумы и лекции — офлайн в Ижевске и онлайн.
          </p>
        </div>
      </section>

      {/* --- В РАЗРАБОТКЕ --- */}
      <section className="py-20 bg-[#FAFAF9]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center py-20">
            <div className="text-6xl mb-6">📅</div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Афиша в разработке</h2>
            <p className="text-slate-600 mb-8">Скоро здесь появится расписание ближайших встреч и практикумов. Подпишитесь, чтобы не пропустить анонс.</p>
            <Link href="/contacts" className="inline-flex bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full text-base font-semibold transition-all">
              Подписаться на анонсы
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
