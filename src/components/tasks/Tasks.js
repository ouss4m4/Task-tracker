import React, { useState } from 'react';
import { taskLogic } from '../../domain/tasks';

import './task-style.css';
import TaskForm from './taskForm/taskForm';

function Tasks() {
  const [tasksList, setTasksList] = useState(taskLogic.getTasks());
  const handleTaskAdd = (taskName) => {
    const newList = taskLogic.addTask(tasksList, taskName);
    setTasksList(newList);
  };
  return (
    <div>
      <TaskForm addTaskToList={handleTaskAdd} />
      <div className="tasks-main">
        <ul>
          {taskLogic.getTasksToDo(tasksList).map((task, i) => (
            <li key={i}> {task.title}</li>
          ))}
        </ul>
        <ul>
          {taskLogic.getTasksInProgress(tasksList).map((task, i) => (
            <li key={i}> {task.title}</li>
          ))}
        </ul>
        <ul>
          {taskLogic.getTasksInReview(tasksList).map((task, i) => (
            <li key={i}> {task.title}</li>
          ))}
        </ul>
        <ul>
          {taskLogic.getTasksDone(tasksList).map((task, i) => (
            <li key={i}> {task.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Tasks;
