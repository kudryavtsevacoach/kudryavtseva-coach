import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import "./homepage.css";

export const metadata: Metadata = {
  title: "Надежда Кудрявцева — психолог и AQ-бизнес-коуч",
  description:
    "Индивидуальная работа в жизненных и профессиональных переходах, развитие руководителей и команд. Автор проекта «Искусство замечать».",
};

export default function Home() {
  return (
    <div className="nk-home">
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="name">Надежда Кудрявцева</p>
            <p className="roles">Психолог · AQ-бизнес-коуч · Бизнес-тренер</p>
            <h1>
              Находить ориентиры и опору.
              <br />
              <span>Воплощать решения в своём ритме.</span>
              <br />
              Замечать и праздновать то, что получилось.
            </h1>
            <p className="intro">
              Помогаю людям проходить жизненные и профессиональные переходы.
              Сопровождаю первых лиц и их команды к результату.
            </p>
            <div className="actions">
              <a className="btn primary" href="#directions">
                С чем можно обратиться
              </a>
              <a className="btn" href="#about">
                Обо мне
              </a>
            </div>
          </div>
          <div className="portrait">
            <Image
              src="/photos/hero/nadezhda-hero.jpg"
              alt="Надежда Кудрявцева"
              fill
              preload
              sizes="(max-width: 850px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>
      <section id="directions" className="section directions">
        <div className="wrap">
          <div className="section-head">
            <h2>С чем можно обратиться</h2>
          </div>
          <div className="two">
            <article className="direction">
              <p className="eyebrow">Личная работа</p>
              <h3>
                По-старому я уже не хочу. А как по-новому — пока не понимаю.
              </h3>
              <p className="lead">
                Вы переросли прежнюю роль, возвращаетесь к работе после перерыва
                или достигли цели и спрашиваете себя: «И что теперь?»
              </p>
              <div className="actions">
                <a className="btn" href="#formats">
                  Форматы личной работы
                </a>
              </div>
            </article>
            <article className="direction">
              <p className="eyebrow">Руководителям и командам</p>
              <h3>
                Я передаю задачи, а решения всё равно возвращаются ко мне.
              </h3>
              <p className="lead">
                Команда выросла, а вы всё ещё перепроверяете каждую мелочь. Что
                сотрудники могут решать сами и где им нужна ваша поддержка?
              </p>
              <div className="actions">
                <a className="btn" href="#business-formats">
                  Для себя или для команды
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="formats" className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Индивидуально</p>
              <h2>
                Выбрать подходящий
                <br />
                формат работы
              </h2>
            </div>
            <p>
              Можно прийти с конкретной ситуацией, вопросом о следующем этапе
              или решением, которое пока трудно воплотить.
            </p>
          </div>
          <div className="formats-grid">
            <article className="format">
              <div className="tag">Конкретная ситуация</div>
              <h3>
                Разобраться
                <br />и выбрать действие
              </h3>
              <p>
                Есть вопрос, который вы давно обдумываете, или несколько
                вариантов, между которыми трудно выбрать.
              </p>
              <p>
                Краткосрочная работа с исследованием адаптивного потенциала:
                ваших возможностей справляться с изменениями и двигаться к
                желаемому.
              </p>
              <p className="outcome">
                <strong>Фокус работы:</strong> увидеть опоры и ограничения,
                уточнить желаемое и возможные шаги.
              </p>
              <a className="text-link" href="#contact">
                Обсудить свою ситуацию
              </a>
            </article>
            <article className="format">
              <div className="tag">Обычно 3–6 встреч</div>
              <h3>
                Итоги. Фокус.
                <br />
                Стратегия
              </h3>
              <p>
                Прежний этап заканчивается или перестаёт устраивать, а следующий
                ещё не оформился.
              </p>
              <p>
                Осмысляем пройденное: что сохранить, что вы переросли и что
                больше не хочется нести дальше. Выбираем фокус следующего
                периода.
              </p>
              <p className="outcome">
                <strong>Фокус работы:</strong> собрать личную или
                профессиональную стратегию, в которой понятно, что сейчас
                главное.
              </p>
              <a className="text-link" href="#contact">
                Обсудить следующий этап
              </a>
            </article>
            <article className="format">
              <div className="tag">Условия индивидуальны</div>
              <h3>
                Внедрение
                <br />
                стратегии
              </h3>
              <p>
                Направление уже понятно, но в повседневности вы снова действуете
                по привычному сценарию.
              </p>
              <p>
                Разбираем реальные шаги, препятствия и договорённости. Ищем
                способы удерживать выбранный фокус и корректировать план.
              </p>
              <p className="outcome">
                <strong>Фокус работы:</strong> переводить решения в действия с
                учётом того, как меняется реальность.
              </p>
              <a className="text-link" href="#contact">
                Обсудить сопровождение
              </a>
            </article>
          </div>
        </div>
      </section>
      <section id="business-formats" className="section business">
        <div className="wrap">
          <p className="eyebrow">Работа с бизнесом</p>
          <div className="section-head">
            <h2>Усиливаю бизнес через людей.</h2>
          </div>
          <div className="two">
            <article className="direction">
              <p className="tag">
                Для руководителей · Диагностика управленческих компетенций
              </p>
              <h3>
                Как передать задачу, если потом всё равно приходится делать
                самому?
              </h3>
              <p className="lead">
                Вы договорились с сотрудником о задаче. Когда приходит время
                посмотреть результат, оказывается, что каждый представлял его
                по-своему. И вы снова садитесь доделывать.
              </p>
              <p>
                На встрече вы попробуете провести управленческий разговор в
                ролевой ситуации. Затем мы разберём, что у вас уже получается, в
                какой момент договорённость теряет ясность и что можно
                попробовать в следующем разговоре с командой.
              </p>
              <div className="actions">
                <Link className="btn" href="/diagnostics">
                  Посмотреть, как проходит диагностика
                </Link>
              </div>
            </article>
            <article className="direction">
              <p className="tag">
                Для команд · Оценка и обучение руководителей
              </p>
              <h3>
                Чему учить руководителей, чтобы это помогло команде в работе?
              </h3>
              <p className="lead">
                Одному руководителю трудно передавать задачи. Другому — вовремя
                дать обратную связь. Как понять, что стоит потренировать вместе,
                а где каждому нужна своя практика?
              </p>
              <p>
                Помогаю увидеть, как ваши руководители действуют в рабочих
                ситуациях, выбрать навыки для развития и подобрать формат — от
                практикума по делегированию до программы обучения команды.
              </p>
              <div className="actions">
                <Link className="btn" href="/services/for-teams">
                  Посмотреть форматы для команды
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section id="approach" className="section approach">
        <div className="wrap approach-grid">
          <div>
            <p className="eyebrow">Как я работаю</p>
            <h2>
              Важно не только решение.
              <br />
              Важно, что происходит после.
            </h2>
            <p className="large">
              Мне близка работа с тем, как человек приходит к выбору и как затем
              воплощает его в своей жизни.
            </p>
          </div>
          <div className="principles">
            <div>
              <h3>Разобраться в ситуации</h3>
              <p>
                Посмотреть, что происходит, что уже пробовали, где есть
                ограничения и на что можно опереться.
              </p>
            </div>
            <div>
              <h3>Выбрать своё направление</h3>
              <p>
                Уточнить, что действительно важно сейчас. Соотнести желания,
                возможности и цену разных решений.
              </p>
            </div>
            <div>
              <h3>Пересматривать и экспериментировать</h3>
              <p>
                Замечать, что получается в реальной жизни, где возвращаются
                привычные способы действия и что стоит изменить.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="culture" className="section culture">
        <div className="wrap culture-grid">
          <div className="culture-mark">
            <p className="eyebrow">Культурный проект</p>
            <div className="word">
              Искусство
              <br />
              замечать
            </div>
          </div>
          <div className="culture-copy">
            <p className="eyebrow">Друзья по досугу: читаем иначе</p>
            <h2>Почему именно эта мысль из книги меня не отпускает?</h2>
            <p>
              Иногда герой раздражает нас с первой страницы. А потом в разговоре
              кто-то вступается за него — и хочется перечитать тот же эпизод.
            </p>
            <p>
              На групповых встречах читаем и обсуждаем, на каком месте
              захотелось задержаться, с чем хочется спорить и что вдруг узнаётся
              в собственной жизни. Я подбираю материалы и веду разговор. Можно
              прийти просто из любви к чтению.
            </p>
            <div className="actions">
              <Link className="btn" href="/vishnevy-sad">
                Как проходят встречи
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="section">
        <div className="wrap about-grid">
          <div>
            <p className="eyebrow">Обо мне</p>
            <h2>
              Внимание к человеку.
              <br />
              Связь с практикой.
            </h2>
            <p className="about-name">Надежда Кудрявцева</p>
            <div className="about-labels">
              <span>Психолог</span>
              <span>AQ-бизнес-коуч</span>
              <span>Бизнес-тренер</span>
              <span>Методолог обучения взрослых</span>
            </div>
          </div>
          <div className="about-copy">
            <p>
              Я работала руководителем и много лет занимаюсь обучением взрослых.
              Из этого опыта я вынесла вопрос, к которому возвращаюсь и в
              коучинге: что помогает человеку применить своё решение, когда он
              снова оказывается в привычной ситуации?
            </p>
            <p>
              Мне важно понимать и самого человека, и обстоятельства, в которых
              он живёт и действует. Как он принимает решения, строит отношения,
              справляется с изменениями. Что помогает ему пробовать новое, а что
              возвращает к привычному.
            </p>
            <p>
              Я не выбираю за человека правильный маршрут. Помогаю лучше
              увидеть, где он находится сейчас, что для него действительно важно
              и каким может быть следующий шаг.
            </p>
            <div className="actions">
              <Link className="text-link" href="/about">
                Мой опыт и профессиональный путь
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="journal" className="section journal">
        <div className="wrap journal-inner">
          <div>
            <p className="eyebrow">Блог</p>
            <h2>«Я уже три раза объяснил»</h2>
            <p className="muted">
              Серия карточек о самостоятельности команды. Когда руководителю
              хочется объяснить ещё раз, что полезно заметить в самой ситуации?
            </p>
          </div>
          <Link className="btn" href="/blog">
            Перейти в блог
          </Link>
        </div>
      </section>
      <section id="contact" className="section contact">
        <div className="wrap contact-grid">
          <div>
            <p className="eyebrow">Начать разговор</p>
            <h2>
              Можно начать с того,
              <br />
              что происходит сейчас.
            </h2>
            <p>
              Необязательно заранее знать название услуги или точно
              формулировать запрос. Расскажите, что хочется изменить и в чём
              сейчас трудно разобраться.
            </p>
            <div className="actions">
              <Link className="btn" href="/contacts">
                Обсудить запрос
              </Link>
            </div>
          </div>
          <div className="contact-note">
            <h3>Что можно написать</h3>
            <p>
              «Сейчас у меня…»
              <br />
              «Мне хотелось бы…»
              <br />
              «Пока не получается…»
            </p>
            <p>
              Мы обсудим, подходит ли моя работа для вашей задачи, и договоримся
              о формате и условиях.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
