import { useState } from 'react';

function useFormInput(initialValue, fieldName = '') {
  const [value, setValue] = useState(initialValue);

  function changeHandler(e) {
    let fieldValue = null;

    switch (fieldName) {
      case 'description':
        fieldValue = e;
        break;
      case 'image':
        fieldValue = !e ? '' : e.target.files[0];
        break;
      default:
        fieldValue = e.target.value;
        break;
    }

    setValue(fieldValue);
  }

  return {
    value,
    onChange: changeHandler,
  };
}

export { useFormInput };
