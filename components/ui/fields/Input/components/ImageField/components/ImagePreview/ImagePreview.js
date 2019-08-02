import React from 'react';
import PropTypes from 'prop-types';

const ImagePreview = props => {
  const { previewImageTitle, image, onRemoveImage } = props;

  function removeHandler() {
    onRemoveImage('');
  }

  return (
    <div className="previewImageContainer">
      <button
        type="button"
        aria-hidden="true"
        className="close"
        onClick={removeHandler}
      >
        ✕
      </button>
      <img
        id="preview_image"
        className="post-image"
        width="200"
        alt={previewImageTitle}
        src={image}
      />
    </div>
  );
};

ImagePreview.propTypes = {
  previewImageTitle: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onRemoveImage: PropTypes.func.isRequired,
};

export default ImagePreview;
