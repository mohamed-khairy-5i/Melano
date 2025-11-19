import { create } from 'zustand';

interface AppState {
  // Theme
  isDarkMode: boolean;
  toggleTheme: () => void;
  
  // Language
  language: 'ar' | 'en';
  setLanguage: (lang: 'ar' | 'en') => void;
  
  // Currency
  currency: 'YER' | 'USD' | 'SAR';
  setCurrency: (curr: 'YER' | 'USD' | 'SAR') => void;
  
  // Window state
  isMaximized: boolean;
  toggleMaximize: () => void;
  
  // Sidebar
  isSidebarCollapsed: boolean;
  toggleSidebar: () => void;
}

export const useStore = create<AppState>()((set) => ({
  // Theme
  isDarkMode: false,
  toggleTheme: () => set((state) => {
    const newValue = !state.isDarkMode;
    localStorage.setItem('isDarkMode', JSON.stringify(newValue));
    return { isDarkMode: newValue };
  }),
  
  // Language
  language: (localStorage.getItem('language') as 'ar' | 'en') || 'ar',
  setLanguage: (lang) => {
    localStorage.setItem('language', lang);
    set({ language: lang });
  },
  
  // Currency
  currency: (localStorage.getItem('currency') as 'YER' | 'USD' | 'SAR') || 'YER',
  setCurrency: (curr) => {
    localStorage.setItem('currency', curr);
    set({ currency: curr });
  },
  
  // Window
  isMaximized: false,
  toggleMaximize: () => set((state) => ({ isMaximized: !state.isMaximized })),
  
  // Sidebar
  isSidebarCollapsed: false,
  toggleSidebar: () => set((state) => ({ isSidebarCollapsed: !state.isSidebarCollapsed })),
}));
