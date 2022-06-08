import React from 'react';
import { Icon as MDIcon } from '@mdi/react';

const Icon = (props) => {
  const MDIcons = require('@mdi/js');
  let iconPath = MDIcons[props.icon];
  if (!iconPath) {
    iconPath = MDIcons.mdiCancel;
  }

  return (
    <MDIcon
      className="mr-2 w-8"
      path={iconPath}
      color={props.color ? props.color : 'black'}
    />
  );
};

export default Icon;