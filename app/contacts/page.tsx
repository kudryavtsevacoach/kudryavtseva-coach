import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Контакты | Надежда Кудрявцева',
  description: 'Свяжитесь с Надеждой Кудрявцевой — Telegram, B17, ВКонтакте, Дзен. Работаю онлайн и офлайн (Ижевск).',
};

const CHANNELS = [
  {
    icon: '✈️',
    title: 'Telegram',
    description: 'Быстрее всего отвечаю здесь. Подходит для записи на диагностику и любых вопросов.',
    href: 'https://t.me/powerexpert_stepbystep',
    cta: 'Написать в Telegram',
  },
  {
    icon: '💬',
    title: 'B17',
    description: 'Профиль на площадке психологов и коучей — отзывы, публикации и форма записи.',
    href: 'https://www.b17.ru/nadiya_coach/',
    cta: 'Открыть профиль на B17',
  },
  {
    icon: '🔵',
    title: 'ВКонтакте',
    description: 'Новости, анонсы программ и мероприятий, живое общение.',
    href: 'https://vk.ru/nadiya_coach',
    cta: 'Перейти в ВКонтакте',
  },
  {
    icon: '📰',
    title: 'Дзен',
    description: 'Статьи и размышления об осознанном лидерстве и управлении.',
    href: 'https://dzen.ru/nadiya_coach',
    cta: 'Читать на Дзен',
  },
];

export default function ContactsPage() {
  return (
    <>
      {/* --- ЗАГОЛОВОК --- */}
      <section className="relative overflow-hidden pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div className="pointer-events-none absolute -top-40 -right-40 w-[36rem] h-[36rem] bg-amber-100/50 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 w-[28rem] h-[28rem] bg-slate-100 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-6">
            Контакты
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Пишите или звоните — отвечаю лично. Работаю онлайн и офлайн (г. Ижевск).
          </p>
        </div>
      </section>

      {/* --- КАНАЛЫ СВЯЗИ --- */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {CHANNELS.map((channel) => (
              <a
                key={channel.title}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-900 p-8 rounded-[2rem] transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">{channel.icon}</div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">{channel.title}</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">{channel.description}</p>
                <span className="inline-flex items-center gap-2 text-slate-900 group-hover:text-amber-600 font-semibold group-hover:gap-3 transition-all">
                  {channel.cta} <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-16 lg:py-20 bg-[#FAFAF9]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Не знаете, с чего начать?</h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Пройдите диагностику — за 1.5–2 часа вы получите чёткое понимание, какой формат работы подойдёт именно вам.
          </p>
          <Link href="/diagnostics" className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:shadow-xl hover:shadow-amber-900/20">
            Узнать о диагностике
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
