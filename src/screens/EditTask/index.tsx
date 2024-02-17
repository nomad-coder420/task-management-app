import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {INavigationScreenProps} from '../../navigation/types';
import router from '../../navigation/router';
import Button from '../../components/Button';
import CloseIcon from '../../components/CloseIcon';
import Header from '../../components/Header';
import Input from '../../components/Input';
import {tasksStorage} from '../../storage/tasks';

const EditTaskScreen = ({navigation, route}: INavigationScreenProps) => {
  const {task} = route.params;

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header
          title="Edit Task"
          leftIcon={<CloseIcon onPress={() => router.goBack(navigation)} />}
        />
        <View style={styles.contentContainer}>
          <Input name="Task Name" value={title} setValue={setTitle} />
          <Input
            name="Task Description"
            value={description}
            setValue={setDescription}
            multiline
          />
        </View>
        <View>
          <Button
            text="Delete"
            onPress={() => {
              tasksStorage.delete(task.id);
              router.goBack(navigation);
            }}
            disabled={!title || !description}
            variant="secondary"
            buttonTextStyles={styles.deleteButton}
          />
          <Button
            text="Save"
            onPress={() => {
              tasksStorage.update({
                ...task,
                title,
                description,
              });
              router.goBack(navigation);
            }}
            disabled={!title || !description}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    paddingHorizontal: 24,
  },
  contentContainer: {
    flex: 1,
    paddingTop: 16,
  },
  deleteButton: {
    color: '#DA3A3A',
  },
});

export default EditTaskScreen;
