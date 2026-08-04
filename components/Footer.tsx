import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#FAFAF9] border-t border-slate-100 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-slate-500">
          © {new Date().getFullYear()} Надежда Кудрявцева. Все права защищены.
        </div>
        <div className="flex gap-8 text-sm font-medium text-slate-600">
          <a href="https://vk.ru/nadiya_coach" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">ВКонтакте</a>
          <a href="https://dzen.ru/nadiya_coach" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">Дзен</a>
          <a href="https://www.b17.ru/nadiya_coach/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">B17</a>
        </div>
      </div>
    </footer>
  );
}