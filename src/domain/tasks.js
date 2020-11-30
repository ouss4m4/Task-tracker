import { DONE, IN_PROGRESS, IN_REVIEW, TO_DO } from '../typing/task-typing';

class TasksLogic {
  fakeData = [
    { title: 'create new react project', status: DONE },
    { title: 'setup git repo', status: IN_REVIEW },
    { title: 'initial folder structures', status: IN_PROGRESS },
    { title: 'show fake data on initial layout', status: TO_DO },
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

  editTask(task) {
    const itemIndex = this.fakeData.findIndex(
      (item) => task.title === item.title
    );
    const oldLines = this.fakeData.slice();
    oldLines[itemIndex] = { title: task.title, status: task.status };
    this.fakeData = oldLines;
  }

  removeTask(task) {
    this.fakeData = this.fakeData.filter((item) => item.title !== task.title);
  }
}

export const taskLogic = new TasksLogic();
