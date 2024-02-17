import {storage} from '.';
import {ITask} from '../components/TaskCard/types';

export const tasksStorage = {
  get: (): ITask[] => {
    const tasks = storage.getString('tasks');
    if (tasks) {
      return JSON.parse(tasks);
    }
    return [];
  },
  set: (tasks: ITask[]) => {
    storage.set('tasks', JSON.stringify(tasks));
  },
  add: (task: ITask) => {
    const tasks = tasksStorage.get();
    tasks.push(task);
    tasksStorage.set(tasks);
  },
  update: (task: ITask) => {
    const tasks = tasksStorage.get();
    const index = tasks.findIndex(t => t.id === task.id);
    tasks[index] = task;
    tasksStorage.set(tasks);
  },
  delete: (id: string) => {
    const tasks = tasksStorage.get();
    const index = tasks.findIndex(t => t.id === id);
    tasks.splice(index, 1);
    tasksStorage.set(tasks);
  },
};
