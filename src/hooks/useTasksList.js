import { useState } from 'react';
import { taskLogic } from '../domain/tasks';

export const useTasksList = (initialValue) => {
  const [tasksList, setTasksList] = useState(initialValue);

  const addTask = (taskName) => {
    const newList = taskLogic.addTask(tasksList, taskName);
    setTasksList(newList);
  };

  const editTask = (editedTask) => {
    const newList = taskLogic.editTask(tasksList, editedTask);
    console.log('edited task, setting state')
    setTasksList(newList);
  };

  return { tasksList, addTask, editTask };
};
