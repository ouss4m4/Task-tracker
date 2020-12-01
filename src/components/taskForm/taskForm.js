import React from 'react';
import useFormState from '../../hooks/useFormState';

function TaskForm({ addTaskToList }) {
  const { value, onChange, resetInput } = useFormState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length) {
      addTaskToList(value);
      resetInput();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Add A Task</label>
      <input
        name="task"
        placeholder="task name"
        value={value}
        onChange={onChange}
        type="text"
      />
    </form>
  );
}

export default TaskForm;
