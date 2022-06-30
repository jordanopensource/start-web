import { createContext, useContext, useEffect, useState } from 'react';

const DashboardContext = createContext();

export const DashboardContextWrapper = ({ children }) => {
  const [isMilitaryTime, setIsMilitaryTime] = useState(false);

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

  let dashboardState = {
    isMilitaryTime,
    toggleMilitaryTime,
  };

  useEffect(() => {
    getTimeFormat();
  }, []);

  return (
    <DashboardContext.Provider value={dashboardState}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => {
  return useContext(DashboardContext);
};
