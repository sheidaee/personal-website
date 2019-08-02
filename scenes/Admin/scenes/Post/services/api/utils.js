import Router from 'next/router';
import { uploadImageHandler } from '../../../../../../services/api/uploadImageHandler';
import { useFormInput } from '../../../../../../services/api/Form';

async function submitHandler({
  setCustomLoading,
  image,
  largeImage,
  title,
  description,
  submitCallback,
  setLocalError,
  imageErrorMessages,
  id,
}) {
  try {
    setLocalError({ message: '' });
    setCustomLoading(true);

    /* if new image is selected we upload it otherwise the value is prev src image */
    let imageFiles = {};
    if (image.value instanceof File || !image.value) {
      imageFiles = await uploadImageHandler(image, imageErrorMessages);
    } else {
      imageFiles = { image: image.value, largeImage };
    }

    const variables = {
      title,
      description,
      image: JSON.stringify(imageFiles.image),
      largeImage: imageFiles.largeImage,
      id,
    };

    const res = await submitCallback({ variables });

    Router.push({
      pathname: '/post',
      query: { id: id ? res.data.updatePost.id : res.data.createPost.id },
    });
  } catch (err) {
    setLocalError({ message: err.message });
  } finally {
    setCustomLoading(false);
  }
}

export { uploadImageHandler, useFormInput, submitHandler };
