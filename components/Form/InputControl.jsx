import React from 'react';

const InputControl = (props) => {
  return (
    <>
      <label htmlFor="">{props.name}</label>
      <input
        type={props.inputType}
        name={props.name.toLowerCase()}
        required={props.required}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default InputControl;
