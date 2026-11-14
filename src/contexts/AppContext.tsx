import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { Lang, Translations, translations } from '../i18n/translations';

type Theme = 'dark' | 'light';

interface AppContextValue {
  lang: Lang;
  t: Translations;
  isRTL: boolean;
  theme: Theme;
  isDark: boolean;
  toggleLang: () => void;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);

const LANG_KEY  = 'excel-mastery-lang';
const THEME_KEY = 'excel-mastery-theme';

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang,  setLang]  = useState<Lang>( () => (localStorage.getItem(LANG_KEY)  as Lang)  || 'ar');
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem(THEME_KEY) as Theme) || 'dark');

  const toggleLang  = useCallback(() => setLang(l  => l  === 'ar' ? 'en' : 'ar'),  []);
  const toggleTheme = useCallback(() => setTheme(t => t === 'dark' ? 'light' : 'dark'), []);

  useEffect(() => { localStorage.setItem(LANG_KEY,  lang);  }, [lang]);
  useEffect(() => { localStorage.setItem(THEME_KEY, theme); }, [theme]);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  return (
    <AppContext.Provider value={{
      lang,
      t: translations[lang],
      isRTL: lang === 'ar',
      theme,
      isDark: theme === 'dark',
      toggleLang,
      toggleTheme,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppContext must be used within AppProvider');
  return ctx;
}
