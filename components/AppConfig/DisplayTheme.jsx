import React from 'react';
import { useAppContext } from '../../context/state';
import Theme from './Theme';
import themeColors from '../../data/theme.json';

const DisplayTheme = () => {
  const myContext = useAppContext();
  const themeNames = Object.keys(themeColors);
  const changeBackgroundColor = (colorName) => {
    myContext.changeColorTheme(colorName, true);
  };

  return (
    <div className="container flex flex-col gap-y-8">
      <h2>Change Display Theme</h2>
      <div className="flex flex-wrap gap-x-16 gap-y-32">
        {themeNames.map((theme, index) => {
          return (
            <div key={index}>
              <Theme
                colorObject={themeColors[theme]}
                colorName={theme}
                changeBackgroundColor={changeBackgroundColor}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayTheme;
