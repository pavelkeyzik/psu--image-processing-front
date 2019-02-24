import React from 'react';
import className from 'classnames';

import './styles.css';

const Button = ({ children, apply }) => {
  return (
    <button className={className(
      'Button',
      apply && 'Button__apply'
    )}>{children}</button>
  );
};

export default Button;
