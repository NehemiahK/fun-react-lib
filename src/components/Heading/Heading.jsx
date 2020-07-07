import React from 'react';

import PropTypes from 'prop-types';

const switchHeading = (type, children) => {
  switch (type) {
    case 'h1':
      return <h1>{children}</h1>;
    case 'h2':
      return <h2>{children}</h2>;
    case 'h3':
      return <h3>{children}</h3>;
    case 'h4':
      return <h4>{children}</h4>;
    case 'h5':
      return <h5>{children}</h5>;
    case 'h6':
      return <h6>{children}</h6>;
    default:
      return <h2>{children}</h2>;
  }
};

const Heading = ({ type, children }) => {
  return <>{switchHeading(type, children)}</>;
};

Heading.propTypes = {
  type: PropTypes.oneOfType(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node).isRequired,
  ]),
};

Heading.defaultProps = {
  type: 'h2',
  children: '',
};

export default Heading;
