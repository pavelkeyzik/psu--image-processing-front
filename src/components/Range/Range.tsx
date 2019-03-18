import React, { useState, useRef } from 'react';

import './styles.css';

interface IProps {
  onChange: (arg: any) => void,
  step: number,
  min: number,
  max: number,
  defaultValue: number,
};

const Range = ({ onChange, step, min, max, defaultValue }: IProps) => {
  const ref = useRef(null);
  const [currentValue, setValue] = useState(defaultValue);

  const handleChange = (ev: any) => {
    setValue(ev.currentTarget.value);
    onChange(ev.currentTarget.value);
  };

  return (
    <div className="Range">
      <span className="Range__value">{currentValue + '%'}</span>
      <input
        ref={ref}
        onChange={handleChange}
        className="Range__input"
        type="range"
        step={step}
        value={currentValue}
        min={min}
        max={max}
      />
    </div>
  );
};

export default Range;
