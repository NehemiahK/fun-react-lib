/*Add your component name to the array */

import React from 'react';
import * as library from './../';

// const components = ['Simple Button', 'Heading', 'Progress Bar'];

const ComponentList = (props) => {
  const urlParams = new URLSearchParams(window.location.search);

  const handleMenuClick = (menuName) => {
    window.history.replaceState(null, null, `?c=${menuName}`);
    props.setDemo(menuName);
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
          >
            {lib}
          </span>
        ))}
      </div>
    </section>
  );
};

export default ComponentList;
