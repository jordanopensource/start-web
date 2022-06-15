import React from 'react';

const SettingsNav = (props) => {
  const listItems = [
    {
      name: 'Display Theme',
      id: 'display-theme',
    },
    {
      name: 'Clock Settings',
      id: 'display-clock',
    },
  ];
  return (
    <nav>
      <ul>
        {listItems.map((item) => {
          return (
            <li
              key={item.id}
              id={item.id}
              className={props.activeName === item.id ? 'active' : ''}
              onClick={() => props.changeActive(item.id)}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SettingsNav;
