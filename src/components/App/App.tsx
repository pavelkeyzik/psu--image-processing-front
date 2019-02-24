import React from 'react';

import Nav from '../Nav';
import Preview from '../Preview';
import Operations from '../Operations';
import './styles.css';

const App = () => {
  return (
    <div className="App__root">
      <Nav />
      <div className={'App__main'}>
        <div className={'App__preview'}>
          <Preview />
        </div>
        <div className={'App__operations'}>
          <Operations />
        </div>
      </div>
    </div>
  );
};

export default App;
