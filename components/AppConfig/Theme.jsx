import React from 'react';

const Theme = (props) => {
  return (
    <div
      className="flex h-10 cursor-pointer"
      onClick={() => props.changeBackgroundColor(props.colorName)}
    >
      <div
        className="border-2 p-10"
        style={{ backgroundColor: props.colorObject['--main-bg-color'] }}
      ></div>
      <div
        className="border-2 p-10"
        style={{ backgroundColor: props.colorObject['--main-color'] }}
      ></div>
      <div
        className="border-2 p-10"
        style={{ backgroundColor: props.colorObject['--accent-color'] }}
      ></div>
    </div>
  );
};

export default Theme;
