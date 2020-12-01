import React from 'react';
import TaskItem from '../taskItem/TaskItem';
import PropTypes from 'prop-types';
import { DONE, IN_PROGRESS, IN_REVIEW, TO_DO } from '../../typing/task-typing';

function TaskList({ list, editTask }) {
  const handleEditClick = (task) => {
    switch (task.status) {
      case TO_DO:
        task.status = IN_PROGRESS;
        break;
      case IN_PROGRESS:
        task.status = IN_REVIEW;
        break;
      case IN_REVIEW:
        task.status = DONE;
        break;
      case DONE:
        task.status = TO_DO;
        break;
      default:
        break;
    }
    editTask(task);
  };
  return (
    <div>
      <ul>
        {list &&
          list.map((item, index) => (
            <li key={index} onClick={() => handleEditClick(item)}>
              <TaskItem title={item.title} status={item.status} />
            </li>
          ))}
      </ul>
    </div>
  );
}

TaskItem.propTypes = {
  list: PropTypes.array,
};

export default TaskList;
