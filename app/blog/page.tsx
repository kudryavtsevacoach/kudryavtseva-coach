import Link from 'next/link';

export default function BlogPage() {
  return (
    <>
      {/* --- HERO --- */}
      <section className="pt-20 pb-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-4 block">Блог</span>
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Мысли, инсайты и <br />
            <span className="text-slate-400">практические материалы</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Делюсь опытом развития осознанного лидерства, управления командами и создания культуры счастливой деятельности.
          </p>
        </div>
      </section>

      {/* --- СТАТЬИ (Заглушка) --- */}
      <section className="py-20 bg-[#FAFAF9]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center py-20">
            <div className="text-6xl mb-6">📝</div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Статьи в разработке</h2>
            <p className="text-slate-600 mb-8">Скоро здесь появятся материалы по развитию лидерства, управлению командами и осознанным изменениям.</p>
            <Link href="/contacts" className="inline-flex bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full text-base font-semibold transition-all">
              Подписаться на обновления
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}