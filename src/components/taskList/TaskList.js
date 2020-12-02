import React from 'react';
import { useDrop } from 'react-dnd';

import { ItemTypes } from '../../constants/Constants';
import TaskItem from '../taskItem/TaskItem';
import './taskList.css';

function TaskList({ list, editTask, listType }) {
  const [, drop] = useDrop({
    accept: ItemTypes.TASK,
    drop: (dropedTask) => handleItemDrop(dropedTask.task),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const handleItemDrop = (task) => {
    editTask(Object.assign({ ...task }, { status: listType }));
  };
  return (
    <div ref={drop}>
      <div className="task-list">
        {list &&
          list.map((item, index) => (
            <TaskItem key={index} title={item.title} status={item.status} />
          ))}
      </div>
    </div>
  );
}

export default TaskList;
