import Link from 'next/link';

export default function DiagnosticsPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF9] text-slate-900 font-sans antialiased">
      
      {/* --- НАВИГАЦИЯ (Такая же, как на главной) --- */}
      <header className="sticky top-0 z-50 bg-[#FAFAF9]/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-sm">НК</div>
            <div>
              <span className="block font-bold text-lg leading-tight">Надежда Кудрявцева</span>
              <span className="block text-xs text-slate-500 font-medium tracking-wide uppercase">AQ Бизнес-коуч</span>
            </div>
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            На главную
          </Link>
        </div>
      </header>

      {/* --- ЗАГОЛОВОК СТРАНИЦЫ --- */}
      <section className="pt-20 pb-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-4 block">Ключевой формат работы</span>
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Диагностика управленческого стиля
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Методом ассессмент-центра для управляющих собственников, топ-менеджеров и руководителей среднего звена.
          </p>
        </div>
      </section>

      {/* --- ЗАЧЕМ ПРОХОДИТЬ --- */}
      <section className="py-20 bg-[#FAFAF9]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-10 lg:p-14 rounded-3xl border border-slate-100 shadow-sm text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">Зачем проходить диагностику?</h2>
            <p className="text-xl text-slate-700 font-medium italic mb-8">
              «Не работай больше. Работай умнее. Ваша команда могла бы достигать большего. В чем скрыт потенциал?»
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              Каждый сильный руководитель периодически задается вопросом: как вывести команду на новый уровень результативности? Если вы чувствуете, что текущие показатели — это не предел, но очевидных точек роста не видно, профессиональная диагностика покажет, где скрыт ресурс для масштабирования.
            </p>
          </div>
        </div>
      </section>

      {/* --- ЧТО ТАКОЕ ДИАГНОСТИКА (Суть) --- */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-10 text-center">Что такое диагностика?</h2>
          <p className="text-lg text-slate-600 mb-10 text-center max-w-2xl mx-auto">
            Это <span className="font-bold text-slate-900">не тест</span>, а ролевая сессия в формате рабочей симуляции. В безопасной и конфиденциальной обстановке мы моделируем реальную управленческую ситуацию.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#FAFAF9] p-8 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6 text-2xl">🟥</div>
              <h3 className="font-bold text-slate-900 text-lg mb-3">Рабочая встреча</h3>
              <p className="text-slate-600">Вы проводите плановую рабочую встречу со своим сотрудником в привычном для вас формате.</p>
            </div>
            <div className="bg-[#FAFAF9] p-8 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6 text-2xl">👤</div>
              <h3 className="font-bold text-slate-900 text-lg mb-3">Моя роль</h3>
              <p className="text-slate-600">Я как эксперт выступаю в роли члена вашей команды, создавая реалистичный контекст взаимодействия.</p>
            </div>
            <div className="bg-[#FAFAF9] p-8 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6 text-2xl">🎯</div>
              <h3 className="font-bold text-slate-900 text-lg mb-3">Отработка навыков</h3>
              <p className="text-slate-600">Вы отрабатываете постановку задачи и контроль, а я фиксирую нюансы, которые обычно остаются «за кадром».</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- ЧТО ВЫ ПОЛУЧИТЕ --- */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Что вы получите в результате?</h2>
          <div className="space-y-6">
            <div className="flex gap-6 items-start bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
              <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 font-bold text-slate-900">1</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Структурированную обратную связь</h3>
                <p className="text-slate-300">С акцентом на ваши сильные стороны и зоны ближайшего развития, которые в обычной жизни остаются незамеченными.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
              <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 font-bold text-slate-900">2</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Карту компетенций</h3>
                <p className="text-slate-300">Объективную оценку по 6 ключевым управленческим компетенциям с понятными индикаторами поведения.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
              <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 font-bold text-slate-900">3</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Рекомендации по развитию</h3>
                <p className="text-slate-300">Понимание того, какие точечные изменения в вашем подходе дадут максимальный эффект роста и масштабирования с командой.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ТРИГГЕРЫ (Если вы замечаете...) --- */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-10 text-center">Приглашаю на диагностику, если вы замечаете, что:</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#FAFAF9] p-8 rounded-2xl border border-slate-100">
              <p className="text-slate-700 font-medium text-lg leading-relaxed">Результаты команды стабилизировались на определенном уровне, и вы не видите точек роста.</p>
            </div>
            <div className="bg-[#FAFAF9] p-8 rounded-2xl border border-slate-100">
              <p className="text-slate-700 font-medium text-lg leading-relaxed">Часть задач по-прежнему требует вашего постоянного личного вовлечения и контроля.</p>
            </div>
            <div className="bg-[#FAFAF9] p-8 rounded-2xl border border-slate-100">
              <p className="text-slate-700 font-medium text-lg leading-relaxed">Вы тратите больше времени на операционную деятельность, чем на стратегию.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA (Призыв к действию) --- */}
      <section className="py-24 bg-[#FAFAF9] border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Готовы раскрыть потенциал команды?</h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Всего за 1.5–2 часа вы получите четкое понимание, какие управленческие инструменты помогут вам выйти на новый уровень развития в бизнесе. Работаю онлайн и офлайн (г. Ижевск).
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://t.me/powerexpert_stepbystep" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full text-base font-semibold transition-all">
              Записаться на диагностику в Telegram
            </a>
            <Link href="/" className="inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-full text-base font-semibold transition-all">
              Вернуться на главную
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}