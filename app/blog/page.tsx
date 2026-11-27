import Image from "next/image";
import OwnerArticle from "@/components/OwnerArticle";

export const metadata = { title: "Блог · Надежда Кудрявцева" };

export default function BlogPage() {
  return (
    <div className="bg-[#fcfbf8] text-[#20282e]">
      <div className="mx-auto max-w-[1096px] px-5 pt-7 pb-14 min-[641px]:px-10">
        <p className="mb-2.5 text-sm font-semibold text-[#7a4b31]">Блог Надежды Кудрявцевой</p>
        <h1 className="border-l-[3px] border-[#996b39] bg-[#f1eade] p-[18px] font-serif text-[clamp(28px,7.4vw,40px)] leading-[1.12] tracking-[-.035em] min-[641px]:sr-only">
          <span className="block">Ясно мыслить.</span>{" "}
          <span className="block">Действовать в неопределённости.</span>{" "}
          <span className="block">Усиливать результат через команду.</span>
        </h1>
        <Image src="/blog/blog-cover.png" alt="Психология управления · адаптивный интеллект · обучение руководителей" width={700} height={233}
          sizes="(min-width: 1096px) 1016px, 100vw" className="hidden h-auto w-full rounded-xl min-[641px]:block" />
        <p className="mt-5 mb-8 max-w-[760px] text-[clamp(18px,2vw,23px)] leading-[1.48]">
          Пишу о том, как мы принимаем решения, когда многое неясно. Иногда это вопрос о собственном следующем шаге. Иногда — о том, что пора доверить команде.
        </p>
        <section aria-labelledby="articles" className="border-t border-[#d8d4cc] pt-5">
          <h2 id="articles" className="mb-4 text-[25px] font-semibold">Статьи</h2>
          <OwnerArticle />
        </section>
      </div>
    </div>
  );
}
