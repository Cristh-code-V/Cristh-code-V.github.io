import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { trackEvent } from '../lib/analytics';

const STORAGE_KEY = 'portfolio-theme'; // misma clave que el script inline de index.html
const THEME_COLORS = { dark: '#020617', light: '#f8fafc' };
const ThemeContext = createContext(null);

// El script de index.html ya aplicó la clase antes de pintar; aquí solo la leemos.
const readInitialTheme = () =>
  document.documentElement.classList.contains('dark') ? 'dark' : 'light';

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[theme]);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* localStorage no disponible */
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    trackEvent('theme_change', { theme: next });
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme debe usarse dentro de <ThemeProvider>');
  return ctx;
}
