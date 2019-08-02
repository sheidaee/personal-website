import React from 'react';
import PropTypes from 'prop-types';

const SelectImageButton = props => {
  const { handleClick, title } = props;
  return (
    <button type="button" className="selectImage" onClick={handleClick}>
      {title}
    </button>
  );
};

SelectImageButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default SelectImageButton;
