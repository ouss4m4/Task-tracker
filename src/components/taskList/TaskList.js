import React from 'react';
import TaskItem from '../taskItem/TaskItem';
import PropTypes from 'prop-types';

function TaskList({ list }) {
  return (
    <div>
      <ul>
        {list &&
          list.map((item, index) => (
            <li>
              <TaskItem key={index} title={item.title} status={item.status} />
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
