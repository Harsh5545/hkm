// Button.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import classNames from 'classnames';

function Button(props) {
  const { className, style, onClick, link, children } = props;
  const defaultStyles = "";

  // Combine default styles and provided className
  const combinedClassName = classNames(defaultStyles, className);

 
  if (link) {
    return (
      <div>
        <Link className={combinedClassName} style={style} to={link}>
          {children}
        </Link>
      </div>
    );
  }
  return (
    <div>
      <button className={combinedClassName} style={style} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default Button;
