import React from 'react';
import PropTypes from 'prop-types';

import './Card.scss';

export default function Card({ title, body }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <span className="separator" />
      <p>{body}</p>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

Card.defaultProps = {};
