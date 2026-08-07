import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Авторские практикумы | Надежда Кудрявцева',
  description: 'Тематические встречи и практикумы для тех, кто хочет разбираться в себе не в одиночку.',
};

export default function PraktikumyPage() {
  return (
    <>
      {/* --- ЗАГОЛОВОК --- */}
      <section className="relative overflow-hidden pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div className="pointer-events-none absolute -top-40 -right-40 w-[36rem] h-[36rem] bg-amber-100/50 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 w-[28rem] h-[28rem] bg-slate-100 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-4 block">Авторская программа</span>
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-6">
            Авторские практикумы
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Тематические встречи и практикумы для тех, кто хочет разбираться в себе не в одиночку.
          </p>
        </div>
      </section>

      {/* --- В РАЗРАБОТКЕ --- */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center py-16 bg-[#FAFAF9] rounded-[2rem] border border-slate-100">
            <div className="text-6xl mb-6">✍️</div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Расписание практикумов в разработке</h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Скоро здесь появится расписание ближайших встреч. Если хотите узнать о первом практикуме раньше остальных — напишите мне.
            </p>
            <Link href="/contacts" className="inline-flex bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full text-base font-semibold transition-all">
              Узнать о ближайшем практикуме
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
