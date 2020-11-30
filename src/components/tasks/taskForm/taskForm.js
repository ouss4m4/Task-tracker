import React, { useState } from 'react';

function TaskForm({ addTaskToList }) {
  const [taskName, setTaskName] = useState('');
  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (taskName.trim().length) {
          addTaskToList(taskName);
          setTaskName('');
        }
      }}
    >
      <input value={taskName} type="text" onChange={handleChange} />
      <button type="submit">+</button>
    </form>
  );
}

export default TaskForm;
