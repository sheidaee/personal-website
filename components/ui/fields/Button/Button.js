import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, style, onClick, children }) => (
  <button type={type} style={style} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
