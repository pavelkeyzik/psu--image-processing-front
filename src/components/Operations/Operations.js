import React from 'react';

import Button from '../Button';
import Range from '../Range';
import './styles.css';

const Operations = () => {
  return (
    <div className="Operations">
      <span className="Operations__section">Filter</span>
      <div className="Button__group">
        <Button>Make a Halftone</Button>
      </div>
      <div className="Button__group">
        <Button>To binary</Button>
      </div>
      <span className="Operations__section">Noize</span>
      <div className="Button__group">
        <Button>Salt and pepper</Button>
        <Button>Gaussian blur</Button>
      </div>
      <span className="Operations__section">Brightnes</span>
      <Range />
      <span className="Operations__section">Zoom</span>
      <Range />
      <span className="Operations__section">Contrast</span>
      <div className="Button__group">
        <Button>Contrast Enhancement</Button>
      </div>
      <span className="Operations__section">Mask filtration</span>
      <div className="Button__group">
        <Button>Low frequency</Button>
      </div>
      <div className="Button__group">
        <Button>High frequency</Button>
      </div>
      <div className="Button__group">
        <Button>Gaussian blur</Button>
      </div>
      <div className="Button__group">
        <Button>Embossing filter</Button>
      </div>
      <span className="Operations__section">Get image</span>
      <div className="Operations__actions">
        <Button apply>Save</Button>
      </div>
    </div>
  );
};

export default Operations;
