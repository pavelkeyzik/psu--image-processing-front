import React from 'react';
import className from 'classnames';

import config from '../../config';
import './styles.css';

const Nav = () => {
  return (
    <nav className={'Nav__root'}>
      <div className={'Nav__section'}>
        <button className={'Nav__link'}>
          <i className={className(
            'material-icons',
            'Nav__link-icon'
          )}>
            add_a_photo
          </i>
          {'Upload image'}
        </button>
      </div>
      <div className={'Nav__section'}>
        <a href={config.github} className={'Nav__link'}>GitHub</a>
      </div>
    </nav>
  );
};

export default Nav;
