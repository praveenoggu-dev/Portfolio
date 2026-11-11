export interface ThemeConfig {
  id: string;
  name: string;
  colorPreview: string; // for the picker pill
  primary: string;
  primaryHover: string;
  accent: string;
  glow: string;
  particleColors: string[];
  gradientText: string;
  buttonGradient: string;
  badgeBorder: string;
  badgeText: string;
}

export const themes: ThemeConfig[] = [
  {
    id: 'sapphire',
    name: 'Electric Sapphire',
    colorPreview: '#3882F6',
    primary: '#3882F6',
    primaryHover: '#2563EB',
    accent: '#06B6D4',
    glow: 'rgba(56, 130, 246, 0.4)',
    particleColors: ['#3882F6', '#60A5FA', '#06B6D4', '#818CF8'],
    gradientText: 'from-[#60A5FA] via-[#3882F6] to-[#06B6D4]',
    buttonGradient: 'from-[#3882F6] via-[#2563EB] to-[#0284C7]',
    badgeBorder: 'border-[#3882F6]/40',
    badgeText: 'text-[#38BDF8]',
  },
  {
    id: 'amber',
    name: 'Warm Amber Gold',
    colorPreview: '#F59E0B',
    primary: '#F59E0B',
    primaryHover: '#D97706',
    accent: '#FB923C',
    glow: 'rgba(245, 158, 11, 0.4)',
    particleColors: ['#F59E0B', '#FBBF24', '#FB923C', '#FCD34D'],
    gradientText: 'from-[#FCD34D] via-[#F59E0B] to-[#FB923C]',
    buttonGradient: 'from-[#F59E0B] via-[#D97706] to-[#EA580C]',
    badgeBorder: 'border-[#F59E0B]/40',
    badgeText: 'text-[#FBBF24]',
  },
  {
    id: 'emerald',
    name: 'Cyber Emerald',
    colorPreview: '#10B981',
    primary: '#10B981',
    primaryHover: '#059669',
    accent: '#06B6D4',
    glow: 'rgba(16, 185, 129, 0.4)',
    particleColors: ['#10B981', '#34D399', '#06B6D4', '#6EE7B7'],
    gradientText: 'from-[#6EE7B7] via-[#10B981] to-[#06B6D4]',
    buttonGradient: 'from-[#10B981] via-[#059669] to-[#0D9488]',
    badgeBorder: 'border-[#10B981]/40',
    badgeText: 'text-[#34D399]',
  },
  {
    id: 'violet',
    name: 'Cosmic Violet',
    colorPreview: '#8B5CF6',
    primary: '#8B5CF6',
    primaryHover: '#7C3AED',
    accent: '#EC4899',
    glow: 'rgba(139, 92, 246, 0.4)',
    particleColors: ['#8B5CF6', '#A78BFA', '#EC4899', '#C084FC'],
    gradientText: 'from-[#C084FC] via-[#8B5CF6] to-[#EC4899]',
    buttonGradient: 'from-[#8B5CF6] via-[#7C3AED] to-[#D946EF]',
    badgeBorder: 'border-[#8B5CF6]/40',
    badgeText: 'text-[#C084FC]',
  },
];
