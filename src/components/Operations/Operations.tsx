import React, { useContext, useState } from 'react';

import Button from '../Button';
import Range from '../Range';
import './styles.css';
import { ImageContext } from '../../contexts/ImageContext';
import {
  SET_PREVIEW,
  FETCHING_STARTED,
  FETCHING_FINISHED,
} from '../../config/constants';

const Operations = () => {

  const { state, dispatch } = useContext(ImageContext);

  const handleOpearaion = async (type: string) => {
    dispatch({ type: FETCHING_STARTED });
    const formData = new FormData();
    formData.append('image', state.image);

    const requestHeaders: any = {
      'Content-Type': 'multipart/form-data',
    };
    const response = await fetch(`http://localhost:8080/image?operation=${type}`, {
      method: 'POST',
      body: formData,
    });
    const responseData = await response.json();
    dispatch({
      type: SET_PREVIEW,
      payload: responseData.url,
    });
    dispatch({ type: FETCHING_FINISHED });
  };

  const handleHalftone = () => {
    handleOpearaion('gray');
  };

  const handleBinary = () => {
    handleOpearaion('binary');
  };

  const handleSalt = () => {
    handleOpearaion('salt');
  };

  const handleContrast = () => {
    handleOpearaion('contrast');
  };

  const handleGaussianNoize = () => {
    handleOpearaion('gaussian-noize');
  };

  const handleMedianFilter = () => {
    handleOpearaion('median-filter');
  };

  return (
    <div className="Operations">
      <span className="Operations__section">Filter</span>
      <div className="Button__group">
        <Button onClick={handleHalftone}>Make a Halftone</Button>
      </div>
      <div className="Button__group">
        <Button onClick={handleBinary}>To binary</Button>
      </div>
      <span className="Operations__section">Noize</span>
      <div className="Button__group">
        <Button onClick={handleSalt}>Salt and pepper</Button>
        <Button onClick={handleGaussianNoize}>Gaussian blur</Button>
      </div>
      <span className="Operations__section">Brightnes</span>
      <Range />
      <span className="Operations__section">Zoom</span>
      <Range />
      <span className="Operations__section">Contrast</span>
      <div className="Button__group">
        <Button onClick={handleContrast}>Contrast Enhancement</Button>
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
        <Button>Embossing</Button>
      </div>
      <div className="Button__group">
        <Button onClick={handleMedianFilter}>Median</Button>
      </div>
      <span className="Operations__section">Get image</span>
      <div className="Operations__actions">
        <Button apply>Save</Button>
      </div>
    </div>
  );
};

export default Operations;
