import Screens from './screens';
import {INavigation} from './types';

const router = {
  goBack: (navigation: INavigation) => {
    navigation.goBack();
  },
  openCreateTaskScreen: (navigation: INavigation, props?: object) => {
    navigation.push(Screens.CreateTask, props);
  },
  openEditTaskScreen: (navigation: INavigation, props?: object) => {
    navigation.push(Screens.EditTask, props);
  },
};

export default router;
