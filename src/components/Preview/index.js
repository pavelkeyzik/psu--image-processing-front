import React, { useState, useContext } from 'react';
import classNames from 'classnames';

import { ImageContext } from '../../contexts/ImageContext';
import {
  SET_IMAGE,
  RESET,
  SET_PREVIEW,
  SET_FIRST_IMAGE,
} from '../../config/constants';
import './styles.css';

const Preview = () => {
  const [isActive, setActive] = useState(false);
  const { state, dispatch } = useContext(ImageContext);

  const handleClickToggler = () => {
    setActive(!isActive);
  };

  const handleClickDelete = () => {
    dispatch({ type: RESET })
  };

  const handleUpload = (ev) => {
    const file = ev.currentTarget.files[0];
    const fileReader = new FileReader(file);

    fileReader.onload = (ev) => {
      dispatch({
        type: SET_IMAGE,
        payload: file,
      });
      dispatch({
        type: SET_PREVIEW,
        payload: ev.target.result,
      });
      dispatch({
        type: SET_FIRST_IMAGE,
        payload: ev.target.result,
      });
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={'Preview'}>
      {state.isFetching
        && <div className="Preview__loader">
            <div className="Preview__loader-spinner" />
            <div className="Preview__loader-message">Please... Wait until the image is processed</div>
          </div>
      }
      {state.preview && (
        <span
          className={classNames(
            'material-icons',
            'Preview__delete',
            isActive ? 'active' : null,
          )}
          onClick={handleClickDelete}
        >
          delete
        </span>
      )}
      <span
        className={classNames(
          'material-icons',
          'Preview__toggler',
          isActive ? 'active' : null,
        )}
        onClick={handleClickToggler}
      >
        format_paint
      </span>
      <div className="Preview__content">
        {state.preview
          ? <img src={isActive ? state.firstImage : state.preview} alt="preview"></img>
          : (
            <label className="Preview__content-fallback">
              Please upload image...
              <input type="file" onChange={handleUpload} hidden/>
            </label>
          )
        }
      </div>
    </div>
  );
};

export default Preview;
