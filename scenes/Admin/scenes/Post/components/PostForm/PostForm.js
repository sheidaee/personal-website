import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Form from '../../../../../../components/Form/Form';
import Editor from '../../../../../../components/ui/fields/Editor/Editor';
import { withNamespaces } from '../../../../../../services/api/localization';

import Input from '../../../../../../components/ui/fields/Input/Input';
import ImageField from '../../../../../../components/ui/fields/Input/components/ImageField/ImageField';
import { useFormInput, submitHandler } from '../../services/api/utils';
import DisplayError from '../../../../../../components/ui/DisplayError/DisplayError';
import { PostFormStyle } from './PostFormStyle';

const getFieldValue = (values, name) => {
  if (!values) return '';

  if (name === 'image' || name === 'description') {
    return JSON.parse(values[name]);
  }

  return values[name];
};

const PostForm = props => {
  const {
    t,
    formTitle,
    submitCallback,
    values,
    loading,
    error,
    submitButtonTitle,
  } = props;

  const title = useFormInput(getFieldValue(values, 'title'));
  const description = useFormInput('hello editor :)', 'description');
  const [customLoading, setCustomLoading] = useState(false);
  const [localError, setLocalError] = useState({ message: '' });
  const image = useFormInput(getFieldValue(values, 'image'), 'image');

  const imageErrorMessages = {
    errorSelectImage: t('form:error_select_image'),
    errorUploadImage: t('form:error_upload_image'),
  };

  return (
    <PostFormStyle className="container">
      <header>
        <h1>
          <span>{formTitle}</span>
        </h1>
      </header>
      <div className="content">
        {error && <DisplayError error={error} />}
        {localError && <DisplayError error={localError} />}
        <Form
          onSubmit={e => {
            e.preventDefault();

            submitHandler({
              setCustomLoading,
              image,
              largeImage: values ? values.largeImage : '',
              title: title.value,
              description: JSON.stringify(description.value, 0, 4),
              submitCallback,
              setLocalError,
              imageErrorMessages,
              id: values ? values.id : '',
            });
          }}
        >
          <fieldset
            disabled={loading || customLoading}
            aria-busy={loading || customLoading}
          >
            <Input
              type="text"
              id="title"
              name="title"
              title={t('form:title')}
              {...title}
              placeholder={t('form:title')}
              style={{ width: '50rem' }}
            />
            <Editor
              {...description}
              title={t('form:description')}
              html={values ? JSON.parse(values.description) : ''}
            />
            <ImageField name="image" {...image} />
            <div className="operation-bar">
              <button type="submit">{submitButtonTitle}</button>
            </div>
          </fieldset>
        </Form>
      </div>
    </PostFormStyle>
  );
};

PostForm.propTypes = {
  t: PropTypes.func.isRequired,
  formTitle: PropTypes.string.isRequired,
  submitCallback: PropTypes.func.isRequired,
  values: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    largeImage: PropTypes.string,
  }),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  submitButtonTitle: PropTypes.string.isRequired,
};

export default withNamespaces()(PostForm);
