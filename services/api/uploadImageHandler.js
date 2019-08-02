import { fetchJson } from './utils';
import { imageEndpoint } from '../../config';

async function uploadImageHandler(image, errorMsg) {
  if (!image.value) {
    return Promise.reject(new Error(errorMsg.errorSelectImage));
  }
  const imageFormData = new FormData();
  imageFormData.append('file', image.value);
  imageFormData.append('upload_preset', 'personal');

  try {
    const file = await fetchJson(`${imageEndpoint}/upload`, {
      method: 'POST',
      body: imageFormData,
    });
    const {
      created_at,
      format,
      original_filename,
      public_id,
      secure_url,
      signature,
    } = file;
    const uploadedImage = {
      created_at,
      format,
      original_filename,
      public_id,
      secure_url,
      signature,
    };

    return { image: uploadedImage, largeImage: file.eager[0].secure_url };
  } catch (e) {
    return Promise.reject(new Error(errorMsg.errorUploadImage));
  }
}

export { uploadImageHandler };
