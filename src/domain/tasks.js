import { DONE, IN_PROGRESS, IN_REVIEW, TO_DO } from '../typing/task-typing';

class TasksLogic {
  fakeData = [
    { title: 'create new react project', status: DONE },
    { title: 'setup git repo', status: DONE },
    { title: 'initial folder structures', status: DONE },
    { title: 'connect to AWS', status: DONE },
    { title: 'show fake data on initial layout', status: DONE },
    { title: 'add Drag N Drop', status: DONE },
    { title: 'persist on local storage', status: IN_REVIEW },
    { title: 'ability to delete tasks', status: IN_PROGRESS },
    { title: 'leverage the Context api using hooks', status: TO_DO },
  ];

  getTasks() {
    return this.fakeData;
  }

  getTasksDone(list) {
    return list.filter((task) => task.status === DONE);
  }

  getTasksInProgress(list) {
    return list.filter((task) => task.status === IN_PROGRESS);
  }

  getTasksInReview(list) {
    return list.filter((task) => task.status === IN_REVIEW);
  }
  getTasksToDo(list) {
    return list.filter((task) => task.status === TO_DO);
  }

  addTask(list, title) {
    return list.concat([{ title, status: TO_DO }]);
  }

  editTask(list, { title, status }) {
    const itemIndex = list.findIndex((item) => title === item.title);
    const newLines = list.slice();
    newLines[itemIndex] = {
      title: title,
      status: status,
    };
    return newLines;
  }

  removeTask(task) {
    this.fakeData = this.fakeData.filter((item) => item.title !== task.title);
  }
}

export const taskLogic = new TasksLogic();
