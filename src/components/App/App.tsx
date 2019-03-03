import React from 'react';

import Nav from '../Nav';
import Preview from '../Preview';
import Operations from '../Operations';
import './styles.css';

import { ImageProvider } from '../../contexts/ImageContext';

const App = () => {
  return (
    <div className="App__root">
      <Nav />
      <ImageProvider>
        <div className={'App__main'}>
          <div className={'App__preview'}>
              <Preview />
          </div>
          <div className={'App__operations'}>
            <Operations />
          </div>
        </div>
      </ImageProvider>
    </div>
  );
};

export default App;
