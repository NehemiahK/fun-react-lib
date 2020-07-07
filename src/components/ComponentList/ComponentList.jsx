/* eslint-disable jsx-a11y/no-static-element-interactions */
/* Add your component name to the array */
import React from 'react';
import PropTypes from 'prop-types';

import './ComponentList.scss';

import * as library from '..';

const ComponentList = ({ setDemo }) => {
  const urlParams = new URLSearchParams(window.location.search);

  const handleMenuClick = (menuName) => {
    window.history.replaceState(null, null, `?c=${menuName}`);
    setDemo(menuName);
  };

  return (
    <section className="docs-nav">
      <div className="docs-nav-header">
        <span>Components</span>
        <input type="search" placeholder="Search Component" />
      </div>
      <div className="docs-nav-list">
        {Object.keys(library).map((lib) => (
          <span
            className={urlParams.get('c') === lib ? 'active' : ''}
            key={lib}
            onClick={() => handleMenuClick(lib)}
            onKeyUp={() => handleMenuClick(lib)}
          >
            {lib}
          </span>
        ))}
      </div>
    </section>
  );
};

ComponentList.propTypes = {
  setDemo: PropTypes.func.isRequired,
};

export default ComponentList;
