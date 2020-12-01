import React from 'react';

import { taskLogic } from '../domain/tasks';
import TaskForm from './taskForm/taskForm';
import TaskList from './taskList/TaskList';
import { useTasksList } from '../hooks/useTasksList';
import './task-style.css';

function Tasks() {
  const { tasksList, handleTaskAdd } = useTasksList(taskLogic.getTasks());
  return (
    <div>
      <TaskForm addTaskToList={handleTaskAdd} />
      <div className="tasks-main">
        <TaskList list={taskLogic.getTasksToDo(tasksList)} />
        <TaskList list={taskLogic.getTasksInProgress(tasksList)} />
        <TaskList list={taskLogic.getTasksInReview(tasksList)} />
        <TaskList list={taskLogic.getTasksDone(tasksList)} />
      </div>
    </div>
  );
}

export default Tasks;
