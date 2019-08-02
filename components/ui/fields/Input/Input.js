import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
  const { name, title, type, value, onChange, placeholder, ...rest } = props;

  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        <div className="label-title">{title}</div>
        <input
          className="form-control"
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...rest}
        />
        <span className="input-focus-effect theme-bg" />
      </label>
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default Input;
