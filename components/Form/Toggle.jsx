import React from 'react';

function Toggle(props) {
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={props.isChecked}
        onChange={() => props.toggleInput()}
      />
      <span className="slider"></span>
    </label>
  );
}

export default Toggle;
