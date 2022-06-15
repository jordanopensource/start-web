import { createContext, useContext, useEffect, useState } from 'react';
import themeColors from '../data/theme.json';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [currentTheme, setCurrentTheme] = useState('');
  const [isMilitaryTime, setIsMilitaryTime] = useState(false);

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

  const getTimeFormat = () => {
    if (localStorage.getItem('military-time')) {
      const localStorageValue =
        localStorage.getItem('military-time') === 'true' ? true : false;
      setIsMilitaryTime(localStorageValue);
    }
  };

  const toggleMilitaryTime = () => {
    setIsMilitaryTime(isMilitaryTime ? false : true);
    localStorage.setItem('military-time', isMilitaryTime ? false : true);
  };

  let sharedState = {
    changeColorTheme,
    currentTheme,
    isMilitaryTime,
    toggleMilitaryTime,
  };

  useEffect(() => {
    getTheme();
    getTimeFormat();
  }, []);

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}
