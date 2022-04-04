import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext(undefined);

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const stored = window.localStorage.getItem('color-theme');
    if (typeof stored === 'string') return stored;
  }

  return 'dark';
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const setThemeInternal = theme => {
    const html = window.document.documentElement;
    html.classList.remove(theme === 'dark' ? 'light' : 'dark');
    html.classList.add(theme);
    localStorage.setItem('color-theme', theme);
  };

  useEffect(() => {
    setThemeInternal(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
