import React from 'react';
import PropTypes from 'prop-types';

import './Avatar.scss';

const Avatar = (props) => {
  return (
    <div className={`avatar ${props.size} ${props.className}`}>
      {props.src && (
        <img
          className={`avatar ${props.size}`}
          alt={props.name}
          src={props.src}
        />
      )}
      {props.name && !props.src && (
        <span className={`avatar ${props.size}`}>{props.name}</span>
      )}
    </div>
  );
};

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
};

Avatar.defaultProps = {
  size: 'md',
};

export default Avatar;
