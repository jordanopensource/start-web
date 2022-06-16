import React from 'react';

const SettingsNav = (props) => {
  const listItems = [
    {
      name: 'Theme',
      id: 'theme',
    },
    {
      name: 'Dashboard',
      id: 'dashboard',
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
