import { createContext, useContext, useEffect, useState } from 'react';
import themeColors from '../data/theme.json';

const ThemeContext = createContext();

export const ThemeContextWrapper = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('');

  const getTheme = () => {
    if (localStorage.getItem('theme-name')) {
      const themeName = localStorage.getItem('theme-name');
      changeColorTheme(themeName);
      setCurrentTheme(themeColors[themeName]);
    }
  };

  const setColorTheme = (themeName) => {
    localStorage.setItem('theme-name', themeName);
  };

  const changeColorTheme = (themeName, newTheme = false) => {
    const theme = themeColors[themeName];
    for (const key in theme) {
      document.documentElement.style.setProperty(key, theme[key]);
    }
    if (newTheme) {
      setColorTheme(themeName);
      setCurrentTheme(themeColors[themeName]);
    }
  };

  let themeState = {
    changeColorTheme,
    currentTheme,
  };

  useEffect(() => {
    getTheme();
  }, []);

  return (
    <ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
