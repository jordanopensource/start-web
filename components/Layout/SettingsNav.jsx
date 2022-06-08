import React from 'react';

const SettingsNav = (props) => {
  const listItems = [
    // {
    //   name: 'Display Name',
    //   id: 'display-name',
    // },
    {
      name: 'Display Theme',
      id: 'display-theme',
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
