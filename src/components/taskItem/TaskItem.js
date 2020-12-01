import React from 'react';
import PropTypes from 'prop-types';

import { DONE, IN_PROGRESS, IN_REVIEW, TO_DO } from '../../typing/task-typing';
const TaskItem = ({ title, status }) => {
  return <div>{title}</div>;
};

TaskItem.propTypes = {
  title: PropTypes.string,
  status: PropTypes.oneOf([IN_PROGRESS, TO_DO, IN_REVIEW, DONE]),
};

export default TaskItem;
