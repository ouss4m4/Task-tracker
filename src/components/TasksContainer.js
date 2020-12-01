import React from 'react';

import { taskLogic } from '../domain/tasks';
import TaskForm from './taskForm/taskForm';
import TaskList from './taskList/TaskList';
import { useTasksList } from '../hooks/useTasksList';
import './task-style.css';

function TasksContainer() {
  const { tasksList, addTask, editTask } = useTasksList(taskLogic.getTasks());
  return (
    <div>
      <TaskForm addTaskToList={addTask} />
      <div className="tasks-main">
        <TaskList list={taskLogic.getTasksToDo(tasksList)} editTask={editTask}/>
        <TaskList list={taskLogic.getTasksInProgress(tasksList)} editTask={editTask}/>
        <TaskList list={taskLogic.getTasksInReview(tasksList)} editTask={editTask}/>
        <TaskList list={taskLogic.getTasksDone(tasksList)} editTask={editTask}/>
      </div>
    </div>
  );
}

export default TasksContainer;
