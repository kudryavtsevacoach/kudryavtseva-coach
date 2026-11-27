import styles from "./cover.module.css";
import OwnerArticle from "@/components/OwnerArticle";

export const metadata = { title: "Блог · Надежда Кудрявцева" };

export default function BlogPage() {
  return (
    <div className="bg-[#fcfbf8] text-[#20282e]">
      <div className="mx-auto max-w-[1096px] px-5 pt-7 pb-14 min-[641px]:px-10">
        <p className="mb-2.5 text-sm font-semibold text-[#7a4b31]">Блог Надежды Кудрявцевой</p>
        <div className={styles.cover}>
          <div className={styles.photo} aria-hidden="true" />
          <div className={styles.copy}>
            <h1>Искусство замечать</h1>
            <p className={styles.subtitle}>Как мы учимся, понимаем себя и выбираем, что делать дальше.</p>
            <p className={styles.topics}>Психология личности · Адаптивный интеллект · Живое обучение взрослых</p>
          </div>
        </div>
        <p className="mt-5 mb-8 max-w-[760px] text-[clamp(18px,2vw,23px)] leading-[1.48]">
          Иногда мысль из книги остаётся со мной на несколько дней. Иногда после рабочего разговора я думаю: в какой момент мы стали понимать одну и ту же задачу по-разному? В этом блоге я пишу о таких моментах — и о том, что можно заметить, если к ним вернуться.
        </p>
        <section aria-labelledby="articles" className="border-t border-[#d8d4cc] pt-5">
          <h2 id="articles" className="mb-4 text-[25px] font-semibold">Статьи</h2>
          <OwnerArticle />
        </section>
      </div>
    </div>
  );
}
