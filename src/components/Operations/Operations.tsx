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

  const handleOpearaion = async (type: string, count?: number) => {
    dispatch({ type: FETCHING_STARTED });
    const formData = new FormData();
    formData.append('image', state.image);

    const requestHeaders: any = {
      'Content-Type': 'multipart/form-data',
    };
    const response = await fetch(`http://localhost:8080/image?operation=${type}&count=${count}`, {
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

  const handleMedianFilter = (count: number) => () => {
    handleOpearaion('median-filter', count);
  };

  const handleLowFrequency = (count: number) => () => {
    console.log('count', count);
    handleOpearaion('low-frequency', count);
  };

  const handleHighFrequency = (count: number) => () => {
    handleOpearaion('high-frequency', count);
  };

  const handleGaussianBlur = (count: number) => () => {
    handleOpearaion('gaussian-blur', count);
  };

  const handleEmbossing = (count: number) => () => {
    handleOpearaion('embossing', count);
  };

  const handleChangeRange = (count: number) => {
    handleOpearaion('brightness', count);
  };

  const handleChangeZoom = (count: number) => {
    if (count == 0) {
      handleOpearaion('zoom', 1);
    } else {
      handleOpearaion('zoom', count);
    }
  };

  const handleVerticalLinear = () => {
    handleOpearaion('vertical-linear');
  };

  const handleHorizontalLinear = () => {
    handleOpearaion('horizontal-linear');
  };

  const handleDiagonalLinear = () => {
    handleOpearaion('diagonal');
  };

  const handleLaplasaLinear = () => {
    handleOpearaion('laplasa');
  };

  const handleRobertsa = () => {
    handleOpearaion('robertsa');
  };

  const handlePrevitta = () => {
    handleOpearaion('previtta');
  };

  const handleSobelya = () => {
    handleOpearaion('sobelya');
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
      <Range
        onChange={handleChangeRange}
        step={0}
        min={0}
        max={4}
        defaultValue={2}
      />
      <span className="Operations__section">Zoom</span>
      <Range
        onChange={handleChangeZoom}
        step={2}
        min={-4}
        max={4}
        defaultValue={0}
      />
      <span className="Operations__section">Contrast</span>
      <div className="Button__group">
        <Button onClick={handleContrast}>Contrast Enhancement</Button>
      </div>
      <span className="Operations__section">Low frequency</span>
      <div className="Button__group">
        <Button onClick={handleLowFrequency(3)}>3x3</Button>
        <Button onClick={handleLowFrequency(5)}>5x5</Button>
        <Button onClick={handleLowFrequency(7)}>7x7</Button>
      </div>
      <span className="Operations__section">High frequency</span>
      <div className="Button__group">
        <Button onClick={handleHighFrequency(3)}>3x3</Button>
        <Button onClick={handleHighFrequency(5)}>5x5</Button>
        <Button onClick={handleHighFrequency(7)}>7x7</Button>
      </div>
      <span className="Operations__section">Gaussian blur</span>
      <div className="Button__group">
        <Button onClick={handleGaussianBlur(3)}>3x3</Button>
        <Button onClick={handleGaussianBlur(5)}>5x5</Button>
        <Button onClick={handleGaussianBlur(7)}>7x7</Button>
      </div>
      <span className="Operations__section">Median</span>
      <div className="Button__group">
        <Button onClick={handleMedianFilter(3)}>3x3</Button>
        <Button onClick={handleMedianFilter(5)}>5x5</Button>
        <Button onClick={handleMedianFilter(7)}>7x7</Button>
      </div>
      <span className="Operations__section">Embossing</span>
      <div className="Button__group">
        <Button onClick={handleEmbossing(3)}>3x3</Button>
        <Button onClick={handleEmbossing(5)}>5x5</Button>
        <Button onClick={handleEmbossing(7)}>7x7</Button>
      </div>
      <span className="Operations__section">Сontour Selection</span>
      <div className="Button__group">
        <Button onClick={handleVerticalLinear}>Vertical</Button>
        <Button onClick={handleHorizontalLinear}>Horizontal</Button>
        <Button onClick={handleDiagonalLinear}>Diagonal</Button>
      </div>
      <span className="Operations__section">Linear Contrast</span>
      <div className="Button__group">
        <Button onClick={handleLaplasaLinear}>Laplasa</Button>
      </div>
      <span className="Operations__section">Nonlinear Contrast</span>
      <div className="Button__group">
        <Button onClick={handlePrevitta}>Previtta</Button>
        <Button onClick={handleRobertsa}>Robertsa</Button>
        <Button onClick={handleSobelya}>Sobelya</Button>
      </div>
      <span className="Operations__section">Get image</span>
      <div className="Operations__actions">
        <Button apply>Save</Button>
      </div>
    </div>
  );
};

export default Operations;
