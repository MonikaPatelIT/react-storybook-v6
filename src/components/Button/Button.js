import React from "react";
import './Button.css'

function Button({ varient, children, rest }) {
  return (
    <button className={`button ${varient}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
