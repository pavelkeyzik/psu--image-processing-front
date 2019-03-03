import React, { useReducer } from 'react';

import {
  SET_IMAGE,
  RESET,
  SET_PREVIEW,
  SET_FIRST_IMAGE,
  FETCHING_STARTED,
  FETCHING_FINISHED,
} from '../config/constants';

const initialState: any = {
  image: null,
  preview: null,
  firstImage: null,
  isFetching: false,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_IMAGE:
      return { ...state, image: action.payload };
    case SET_PREVIEW:
      return { ...state, preview: action.payload };
    case SET_FIRST_IMAGE:
      return { ...state, firstImage: action.payload };
    case FETCHING_STARTED:
      return { ...state, isFetching: true };
    case FETCHING_FINISHED:
      return { ...state, isFetching: false };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

const ImageContext = React.createContext(initialState);

const ImageProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <ImageContext.Provider value={value}>{props.children}</ImageContext.Provider>
  );
}

export { ImageContext, ImageProvider };
