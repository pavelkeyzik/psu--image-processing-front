import React, { useState, useRef } from 'react';

import './styles.css';

const Range = () => {
  const ref = useRef();
  const [currentValue, setValue] = useState(0);

  const handleChange = (ev) => {
    setValue(ev.currentTarget.value);
  };

  return (
    <div className="Range">
      <span className="Range__value">{currentValue + '%'}</span>
      <input
        ref={ref}
        onChange={handleChange}
        className="Range__input"
        type="range"
        step="10"
        value={currentValue}
        min="-100"
        max="100"
      />
    </div>
  );
};

export default Range;
