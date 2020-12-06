import { useState } from 'react';
import { taskLogic } from '../domain/tasks';

export const useTasksList = () => {
  const savedTasks = tryLocalStorage();
  const [tasksList, setTasksList] = useState(savedTasks);

  const addTask = (taskName) => {
    const newList = taskLogic.addTask(tasksList, taskName);
    setTasksList(newList);
    persistToStorage(newList);
  };

  const editTask = (editedTask) => {
    const newList = taskLogic.editTask(tasksList, editedTask);
    setTasksList(newList);
    persistToStorage(newList);
  };

  return { tasksList, addTask, editTask };
};

const tryLocalStorage = () => {
  const storedTasks = localStorage.getItem('taskList');
  let parsedTasks = [];
  if (storedTasks) {
    try {
      parsedTasks = JSON.parse(storedTasks);
    } catch (error) {
      // error parsing tasks
    }
  } else {
    parsedTasks = taskLogic.getTasks();
    persistToStorage(parsedTasks);
  }
  return parsedTasks;
};

const persistToStorage = (taskList) => {
  const stringTasks = JSON.stringify(taskList);
  localStorage.setItem('taskList', stringTasks);
};
