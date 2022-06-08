import React from 'react';

const Button = (props) => {
  return (
    <button className="submit-button" type={props.type}>
      {props.value}
    </button>
  );
};

export default Button;
