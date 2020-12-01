import React from 'react';
import useFormState from '../../hooks/useFormState';

function TaskForm({ addTaskToList }) {
  const taskController = useFormState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskController.value.trim().length) {
      addTaskToList(taskController.value);
      taskController.resetInput();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Add A Task</label>
      <input
        name="task"
        placeholder="task name"
        {...taskController}
        type="text"
      />
    </form>
  );
}

export default TaskForm;
