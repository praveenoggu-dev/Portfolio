import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check } from 'lucide-react';
import { themes, ThemeConfig } from '../data/themeData';

interface ThemeSelectorProps {
  currentTheme: ThemeConfig;
  onSelectTheme: (theme: ThemeConfig) => void;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  currentTheme,
  onSelectTheme,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0c122c]/90 border border-[#172347] hover:border-[#3882F6]/50 text-white text-xs font-semibold tracking-wide transition-all shadow-sm cursor-pointer"
        title="Change Website Theme Color"
      >
        <span
          className="w-3.5 h-3.5 rounded-full border border-white/20 shadow-sm"
          style={{ backgroundColor: currentTheme.colorPreview }}
        />
        <Palette size={15} className="text-[#94A3B8]" />
        <span className="hidden sm:inline text-xs text-[#E2E8F0]">{currentTheme.name}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-[#0c122c]/95 border border-[#172347] backdrop-blur-xl shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-[#94A3B8] border-b border-[#172347]/60">
            Select Color Theme
          </div>

          <div className="space-y-1 pt-1.5">
            {themes.map((theme) => {
              const isSelected = theme.id === currentTheme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => {
                    onSelectTheme(theme);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#172347] text-white shadow-sm'
                      : 'text-[#94A3B8] hover:text-white hover:bg-[#111a3d]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-4 h-4 rounded-full border border-white/30 shadow-sm flex items-center justify-center shrink-0"
                      style={{ backgroundColor: theme.colorPreview }}
                    />
                    <span>{theme.name}</span>
                  </div>
                  {isSelected && <Check size={14} className="text-[#38BDF8]" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
