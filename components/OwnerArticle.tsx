import Image from "next/image";

export default function OwnerArticle({ featured = false }: { featured?: boolean }) {
  return (
    <article className={featured ? "grid items-center gap-7 md:grid-cols-2 md:gap-12" : "mx-auto max-w-2xl"}>
      <Image
        src="/blog/business-owner.png"
        alt="Где вы всё ещё держите бизнес на себе и что уже пора передать команде?"
        width={592}
        height={333}
        sizes="(min-width: 768px) 592px, 100vw"
        className="block h-auto w-full rounded-2xl"
      />
      <div className={featured ? "" : "mt-6"}>
        {featured ? (
          <h2 className="eyebrow">Из блога · Статья на vc.ru</h2>
        ) : (
          <>
            <p className="mb-3 text-sm text-slate-600">Статья на vc.ru</p>
            <h2 className="text-3xl font-bold text-slate-900">Где бизнес всё ещё зависит от меня как от управляющего собственника?</h2>
          </>
        )}
        <p className="mt-4 text-lg leading-relaxed text-slate-700">
          У руководителей уже есть полномочия. Но стоит давнему клиенту попросить об исключении — и команда снова ждёт вашего решения. В статье разбираю семь ситуаций, в которых бизнес по-прежнему опирается на личное участие собственника.
        </p>
        <div className="mt-6">
          <a href="https://vc.ru/opinions/3201310-kak-lichnaya-effektivnost-sobstvennika-vliyaet-na-biznes" className={featured ? "btn" : "font-semibold text-slate-900 underline underline-offset-4"}>Читать статью на vc.ru</a>
        </div>
      </div>
    </article>
  );
}
