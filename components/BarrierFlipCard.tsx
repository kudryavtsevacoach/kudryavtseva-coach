'use client';

import { useState, type ReactNode } from 'react';

interface BarrierFlipCardProps {
  graphic: ReactNode;
  title: string;
  description: string;
  solution: string;
}

export default function BarrierFlipCard({ graphic, title, description, solution }: BarrierFlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setFlipped((prev) => !prev)}
      aria-pressed={flipped}
      className="group block w-full text-left [perspective:1600px] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-[2rem]"
    >
      <div
        className={`relative w-full min-h-[21rem] sm:min-h-[22rem] transition-transform duration-700 ease-out [transform-style:preserve-3d] ${
          flipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Лицевая сторона */}
        <div className="absolute inset-0 flex flex-col bg-slate-50 group-hover:bg-white border border-slate-100 group-hover:border-slate-900 p-8 rounded-[2rem] transition-all duration-300 group-hover:shadow-xl group-hover:shadow-slate-200/60 [backface-visibility:hidden]">
          <div className="flex items-center justify-center mb-6">{graphic}</div>
          <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
          <p className="text-slate-600 leading-relaxed flex-1">{description}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-700">
            Узнать решение
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>

        {/* Обратная сторона (решение) */}
        <div className="absolute inset-0 flex flex-col bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="text-3xl mb-4">💡</div>
          <p className="text-lg leading-relaxed flex-1">{solution}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Назад к вопросу
          </span>
        </div>
      </div>
    </button>
  );
}
