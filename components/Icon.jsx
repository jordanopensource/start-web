import React from 'react';
import { Icon as MDIcon } from '@mdi/react';
import { useThemeContext } from '../context/theme';

const Icon = (props) => {
  const MDIcons = require('@mdi/js');
  const themeContext = useThemeContext();
  let iconPath = MDIcons[props.icon] ? MDIcons[props.icon] : MDIcons.mdiCancel;
  let iconColor = themeContext.currentTheme['--main-color']
    ? themeContext.currentTheme['--main-color']
    : 'black';

  return (
    <MDIcon
      className={`icon ${props.classes}`}
      path={iconPath}
      color={props.color ? props.color : iconColor}
    />
  );
};

export default Icon;
