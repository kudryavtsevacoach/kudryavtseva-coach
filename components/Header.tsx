'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

        {/* Логотип */}
        <Link href="/" className="flex items-center gap-3 group" onClick={closeMenu}>
          <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-sm group-hover:bg-amber-600 transition-colors flex-shrink-0">
            НК
          </div>
          <div className="block">
            <span className="block font-bold text-base sm:text-lg leading-tight text-slate-900">Надежда Кудрявцева</span>
            <span className="hidden sm:block text-[10px] text-slate-500 font-medium tracking-wider uppercase">Система осознанных изменений</span>
          </div>
        </Link>

        {/* Навигация (десктоп) */}
        <nav className="hidden xl:flex items-center gap-1 text-sm font-medium text-slate-700">
          <Link href="/" className="px-3 py-2 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">Главная</Link>
          <Link href="/about" className="px-3 py-2 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">Обо мне</Link>

          {/* Выпадающее меню УСЛУГИ */}
          <div className="relative group">
            <button className="flex items-center gap-1 px-3 py-2 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">
              Услуги
              <svg className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className="absolute top-full left-0 w-72 bg-white border border-slate-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2">
              <div className="p-3 hover:bg-slate-50 rounded-lg transition-colors">
                <Link href="/services/for-leaders" className="block font-semibold text-slate-900 mb-1">Для предпринимателей, собственников и руководителей</Link>
                <p className="text-xs text-slate-500">Диагностика, ИИ-тренажер, коучинг</p>
              </div>
              <div className="p-3 hover:bg-slate-50 rounded-lg transition-colors">
                <Link href="/services/for-teams" className="block font-semibold text-slate-900 mb-1">Для команд бизнеса</Link>
                <p className="text-xs text-slate-500">Ассессмент, HR-архитектура, бизнес-игры</p>
              </div>
              <div className="p-3 hover:bg-slate-50 rounded-lg transition-colors">
                <Link href="/services/personal-growth" className="block font-semibold text-slate-900 mb-1">Для личного развития</Link>
                <p className="text-xs text-slate-500">Интегральный коучинг, практикумы</p>
              </div>
            </div>
          </div>

          {/* Выпадающее меню ПРОГРАММЫ */}
          <div className="relative group">
            <button className="flex items-center gap-1 px-3 py-2 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">
              Программы
              <svg className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className="absolute top-full left-0 w-72 bg-white border border-slate-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2">
              <div className="p-3 hover:bg-slate-50 rounded-lg transition-colors">
                <Link href="/programs/rukovoditel-lider" className="block font-semibold text-slate-900 mb-1">Руководитель-лидер</Link>
                <p className="text-xs text-slate-500">Развитие адаптивного лидерства и делегирования</p>
              </div>
              <div className="p-3 hover:bg-slate-50 rounded-lg transition-colors">
                <Link href="/programs/peresborka" className="block font-semibold text-slate-900 mb-1">Пересборка</Link>
                <p className="text-xs text-slate-500">Трансформация профессионального пути</p>
              </div>
            </div>
          </div>

          <Link href="/cases" className="px-3 py-2 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">Кейсы</Link>
          <Link href="/blog" className="px-3 py-2 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">Блог</Link>
          <Link href="/contacts" className="px-3 py-2 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">Контакты</Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Кнопка CTA */}
          <Link href="/contacts" className="hidden sm:inline-flex bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg">
            Записаться
          </Link>

          {/* Кнопка мобильного меню */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isMenuOpen}
            className="xl:hidden flex items-center justify-center w-10 h-10 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors flex-shrink-0"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Мобильное/планшетное меню */}
      {isMenuOpen && (
        <nav className="xl:hidden border-t border-slate-100 bg-white max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1 text-sm font-medium text-slate-700">
            <Link href="/" onClick={closeMenu} className="px-3 py-2.5 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">Главная</Link>
            <Link href="/about" onClick={closeMenu} className="px-3 py-2.5 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">Обо мне</Link>

            <div className="pt-3 pb-1 px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Услуги</div>
            <Link href="/services/for-leaders" onClick={closeMenu} className="px-3 py-2.5 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">Для предпринимателей, собственников и руководителей</Link>
            <Link href="/services/for-teams" onClick={closeMenu} className="px-3 py-2.5 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">Для команд бизнеса</Link>
            <Link href="/services/personal-growth" onClick={closeMenu} className="px-3 py-2.5 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">Для личного развития</Link>

            <div className="pt-3 pb-1 px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Программы</div>
            <Link href="/programs/rukovoditel-lider" onClick={closeMenu} className="px-3 py-2.5 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">Руководитель-лидер</Link>
            <Link href="/programs/peresborka" onClick={closeMenu} className="px-3 py-2.5 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">Пересборка</Link>

            <div className="pt-3" />
            <Link href="/cases" onClick={closeMenu} className="px-3 py-2.5 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">Кейсы</Link>
            <Link href="/blog" onClick={closeMenu} className="px-3 py-2.5 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">Блог</Link>
            <Link href="/contacts" onClick={closeMenu} className="px-3 py-2.5 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">Контакты</Link>

            <Link href="/contacts" onClick={closeMenu} className="mt-3 inline-flex justify-center bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all">
              Записаться
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
