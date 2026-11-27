import OwnerArticle from "@/components/OwnerArticle";

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

      <section aria-label="Статьи" className="bg-white px-6 py-16">
        <OwnerArticle />
      </section>
    </>
  );
}