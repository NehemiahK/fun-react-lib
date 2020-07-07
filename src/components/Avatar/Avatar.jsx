import React from 'react';
import PropTypes from 'prop-types';

import './Avatar.scss';

const Avatar = ({ name, src, size, className }) => {
  return (
    <div className={`avatar ${size} ${className}`}>
      {src && <img className={`avatar ${size}`} alt={name} src={src} />}
      {name && !src && <span className={`avatar ${size}`}>{name}</span>}
    </div>
  );
};

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  className: PropTypes.string,
};

Avatar.defaultProps = {
  size: 'md',
  className: '',
};

export default Avatar;
