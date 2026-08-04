import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ИИ-тренажер управленческих диалогов | Надежда Кудрявцева',
  description: 'Отрабатывайте сложные управленческие разговоры с ИИ-собеседником в безопасной среде — постановка задач, обратная связь, переговоры.',
};

export default function AiTrainerPage() {
  return (
    <>
      {/* --- ЗАГОЛОВОК --- */}
      <section className="relative overflow-hidden pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div className="pointer-events-none absolute -top-40 -right-40 w-[36rem] h-[36rem] bg-amber-100/50 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 w-[28rem] h-[28rem] bg-slate-100 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-4 block">Инструмент развития</span>
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-6">
            ИИ-тренажер управленческих диалогов: практика без риска для бизнеса
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Отрабатывайте сложные разговоры — постановку задач, жёсткую обратную связь, непростые переговоры — с умным ИИ-собеседником. Формируйте навык в безопасной среде, прежде чем применять его в реальной команде.
          </p>
        </div>
      </section>

      {/* --- ПРОБЛЕМА → РЕШЕНИЕ --- */}
      <section className="py-16 lg:py-20 bg-[#FAFAF9]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-10 lg:p-14 rounded-[2rem] border border-slate-100 shadow-sm text-center">
            <p className="text-xl text-slate-700 font-medium mb-6">
              Курсы дают теорию, которую сложно вспомнить в момент стресса. <span className="text-amber-600">Тренажер даёт практику.</span>
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              Вы не рискуете мотивацией реального сотрудника и не теряете время команды, пока учитесь говорить уверенно, мягко и без давления.
            </p>
          </div>
        </div>
      </section>

      {/* --- КАК ЭТО РАБОТАЕТ --- */}
      <section className="py-16 lg:py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Как это работает</h2>
          <div className="space-y-6">
            <div className="flex gap-6 items-start bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
              <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 font-bold text-slate-900">1</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Короткая подготовка</h3>
                <p className="text-slate-300">Смотрите 6-минутный видео-разбор от эксперта AGP: типичные ошибки и структура диалога.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
              <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 font-bold text-slate-900">2</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Симуляция с ИИ</h3>
                <p className="text-slate-300">ИИ-персонаж реагирует как живой сотрудник: с эмоциями, возражениями и своей логикой. В каждом сценарии отработано 5 уровней сопротивления с применением техник «Фокусы языка».</p>
              </div>
            </div>
            <div className="flex gap-6 items-start bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
              <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 font-bold text-slate-900">3</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Мгновенный разбор</h3>
                <p className="text-slate-300">После диалога ИИ-тренер оценивает ваш стиль по 9 ключевым компетенциям (от ассертивности до управления конфликтами) и даёт конкретные рекомендации.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
              <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 font-bold text-slate-900">4</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Замер прогресса</h3>
                <p className="text-slate-300">Пройдите диагностику в начале и через несколько недель тренировок, чтобы увидеть реальный рост ваших управленческих навыков в цифрах на радаре компетенций.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- БЛОК ДОВЕРИЯ --- */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-slate-50 p-10 lg:p-14 rounded-[2rem] border border-slate-100">
            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-6">
              Сертифицированный тренер-наставник AGP с 2022 года
            </span>
            <p className="text-xl lg:text-2xl font-semibold text-slate-800 leading-snug border-l-4 border-amber-500 pl-6 italic mb-6">
              «Я не просто предоставляю доступ к платформе. Я веду курс «Руководитель-лидер» и лично сопровождаю вас: помогаю выбрать релевантные сценарии, разбираю ваши результаты и интегрирую эти навыки в вашу ежедневную практику».
            </p>
            <p className="text-slate-500 pl-6">— Надежда Кудрявцева, сертифицированный тренер-наставник AGP (Академия профессионального управления, методология Артёма Губарца)</p>
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Готовы отработать навык без риска для бизнеса?</h2>
              <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                Начните с демо-доступа или узнайте, как встроить тренажёр в развитие вашей команды.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contacts" className="inline-flex justify-center bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:shadow-xl hover:shadow-amber-900/30">
                  Попробовать демо-доступ на 7 дней
                </Link>
                <Link href="/contacts" className="inline-flex justify-center bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full text-base font-semibold transition-all">
                  Узнать подробности о внедрении
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
