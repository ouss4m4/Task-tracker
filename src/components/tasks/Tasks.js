import React from 'react';
import { DONE, IN_PROGRESS, IN_REVIEW, TO_DO } from '../../typing/task-typing';

function Tasks() {
  return (
    <div className="Tasks-main">
      <ul>
        {fakeData.map((task, i) => (
          <li key="i"> {task.title}</li>
        ))}
      </ul>
    </div>
  );
}

const fakeData = [
  { title: 'create new react project', status: DONE },
  { title: 'setup git repo', status: IN_REVIEW },
  { title: 'initial folder structures', status: IN_PROGRESS },
  { title: 'show fake data on initial layout', status: TO_DO },
];

export default Tasks;
