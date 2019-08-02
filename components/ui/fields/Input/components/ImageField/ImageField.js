import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import ImagePreview from './components/ImagePreview/ImagePreview';
import SelectImageButton from './components/SelectImageButton/SelectImageButton';
import { withNamespaces } from '../../../../../../services/api/localization';

const ImageField = props => {
  const imageInputRef = useRef(null);

  function imageButtonClickHandler() {
    imageInputRef.current.click();
  }
  const {
    name,
    title,
    value: image,
    previewImageTitle,
    selectImageTitle,
    onChange,
    t,
  } = props;

  const defaultTitle = title || t('form:image');
  const defaultSelectImageTitle = selectImageTitle || t('form:pick_image');
  const defaultPreviewImageTitle =
    previewImageTitle || t('form:upload_preview');

  let imageUrl = '';
  if (image.secure_url) imageUrl = image.secure_url;
  if (image.name) imageUrl = URL.createObjectURL(image);

  return (
    <div className="form-group">
      <label htmlFor="image">
        <div className="label-title" />
        <input
          type="file"
          id={name}
          name={name}
          title={defaultTitle}
          style={{ display: 'none' }}
          onChange={onChange}
          value={''}
          ref={imageInputRef}
        />
      </label>
      <SelectImageButton
        handleClick={imageButtonClickHandler}
        title={defaultSelectImageTitle}
      />
      {imageUrl && (
        <ImagePreview
          previewImageTitle={defaultPreviewImageTitle}
          image={imageUrl}
          onRemoveImage={onChange}
        />
      )}
    </div>
  );
};

ImageField.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  selectImageTitle: PropTypes.string,
  previewImageTitle: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(ImageField);
