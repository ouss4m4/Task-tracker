import React from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from '../../constants/Constants';
import { useDrag } from 'react-dnd';

import { DONE, IN_PROGRESS, IN_REVIEW, TO_DO } from '../../typing/task-typing';

const TaskItem = (task) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.TASK, task },
    begin: () => ({ task }),
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',
      }}
    >
      {task.title} ♘
    </div>
  );
};

TaskItem.propTypes = {
  title: PropTypes.string,
  status: PropTypes.oneOf([IN_PROGRESS, TO_DO, IN_REVIEW, DONE]),
};

export default TaskItem;
