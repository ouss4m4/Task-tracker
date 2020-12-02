import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { taskLogic } from '../domain/tasks';
import TaskForm from './taskForm/taskForm';
import TaskList from './taskList/TaskList';
import { useTasksList } from '../hooks/useTasksList';
import './task-style.css';
import { DONE, IN_PROGRESS, IN_REVIEW, TO_DO } from '../typing/task-typing';

function TasksContainer() {
  const { tasksList, addTask, editTask } = useTasksList(taskLogic.getTasks());
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container">
        <TaskForm addTaskToList={addTask} />
        <div className="tasks-main">
          <div>
            <h4>TO DO</h4>
            <TaskList
              list={taskLogic.getTasksToDo(tasksList)}
              editTask={editTask}
              listType={TO_DO}
            />
          </div>

          <div>
            <h4>IN PROGRESS</h4>
            <TaskList
              list={taskLogic.getTasksInProgress(tasksList)}
              editTask={editTask}
              listType={IN_PROGRESS}
            />
          </div>

          <div>
            <h4>IN REVIEW</h4>
            <TaskList
              list={taskLogic.getTasksInReview(tasksList)}
              editTask={editTask}
              listType={IN_REVIEW}
            />
          </div>

          <div>
            <h4>DONE</h4>
            <TaskList
              list={taskLogic.getTasksDone(tasksList)}
              editTask={editTask}
              listType={DONE}
            />
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default TasksContainer;
