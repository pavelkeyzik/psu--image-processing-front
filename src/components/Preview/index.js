import React, { useState } from 'react';
import classNames from 'classnames';

import './styles.css';

const Preview = () => {
  const [isActive, setActive] = useState(false);

  const handleClickToggler = () => {
    setActive(!isActive);
  };

  return (
    <div className={'Preview'}>
      <i
        className={classNames(
          'material-icons',
          'Preview__toggler',
          isActive ? 'active' : null,
        )}
        onClick={handleClickToggler}
      >
        format_paint
      </i>
    <img src="https://picsum.photos/700/380?image=76" alt="preview"></img>
    </div>
  );
};

export default Preview;
