import React from 'react';
import { Icon as MDIcon } from '@mdi/react';
import { useAppContext } from '../context/state';

const Icon = (props) => {
  const MDIcons = require('@mdi/js');
  const myContext = useAppContext();
  let iconPath = MDIcons[props.icon] ? MDIcons[props.icon] : MDIcons.mdiCancel;
  let iconColor = myContext.currentTheme['--main-color']
    ? myContext.currentTheme['--main-color']
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
