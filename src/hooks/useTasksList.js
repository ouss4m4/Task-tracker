import { useState } from 'react';
import { taskLogic } from '../domain/tasks';

export const useTasksList = (initialValue) => {
  const [tasksList, setTasksList] = useState(initialValue);
  const handleTaskAdd = (taskName) => {
    const newList = taskLogic.addTask(tasksList, taskName);
    setTasksList(newList);
  };

  return { tasksList, handleTaskAdd };
};
