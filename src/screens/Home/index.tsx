import React, {useEffect, useRef, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {View, Text, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import TaskCard from '../../components/TaskCard';
import Button from '../../components/Button';
import router from '../../navigation/router';
import {INavigationScreenProps} from '../../navigation/types';
import {tasksStorage} from '../../storage/tasks';
import {ITask} from '../../components/TaskCard/types';

const HomeScreen = ({navigation}: INavigationScreenProps) => {
  const [tasks, setTasks] = useState<ITask[]>(tasksStorage.get());
  const [time, setTime] = useState(new Date());
  const timerID = useRef<NodeJS.Timeout | null>(null);

  const tick = () => {
    setTime(new Date());
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      if (timerID.current) {
        clearInterval(timerID.current);
      }
    });

    return unsubscribe;
  }, [navigation]);

  useFocusEffect(
    React.useCallback(() => {
      timerID.current = setInterval(() => tick(), 1000);
      setTasks(tasksStorage.get());
    }, []),
  );

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.screenContainer}>
          <View style={styles.contentContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Your Tasks</Text>
              <View style={styles.timeContainer}>
                <Text style={styles.time}>{time.toLocaleTimeString()}</Text>
                <Text style={styles.time}>{time.toLocaleDateString()}</Text>
              </View>
            </View>
            <FlatList
              data={tasks}
              renderItem={({item, index}) => (
                <TaskCard
                  item={item}
                  index={index}
                  onPress={() => {
                    router.openEditTaskScreen(navigation, {
                      task: item,
                    });
                  }}
                  onDelete={() => {
                    tasksStorage.delete(item.id);
                    setTasks(tasksStorage.get());
                  }}
                  onComplete={() => {
                    tasksStorage.update({...item, state: 'COMPLETED'});
                  }}
                />
              )}
              style={styles.taskList}
            />
          </View>
          <View style={styles.footerContainer}>
            <Button
              text="+ Create Task"
              onPress={() => {
                router.openCreateTaskScreen(navigation);
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
