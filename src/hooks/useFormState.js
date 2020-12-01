import { useState } from 'react';

export default function useFormState(initialValue) {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const resetInput = () => setValue('');

  return { value, onChange: handleChange, resetInput };
}
