import React from 'react';
import className from 'classnames';

import './styles.css';

interface IButton {
  children: any;
  apply: Boolean,
  onClick(): void,
};

const Button = ({ children, apply, onClick }: IButton) => {
  return (
    <button
      onClick={onClick}
      className={className(
        'Button',
        apply && 'Button__apply'
      )}
    >
      {children}
    </button>
  );
};

export default Button;
