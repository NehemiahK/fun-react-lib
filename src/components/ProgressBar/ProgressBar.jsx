import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = (props) => {
  const { bgColor, completed } = props;

  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
    margin: 50,
  };

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgColor,
    borderRadius: 'inherit',
    textAlign: 'right',
  };

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  bgColor: PropTypes.string,
  completed: PropTypes.number,
};

ProgressBar.defaultProps = {
  bgColor: '#e0e0de',
  completed: 50,
};

export default ProgressBar;
