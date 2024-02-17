import React, {useState} from 'react';
import {v4} from 'uuid';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {INavigationScreenProps} from '../../navigation/types';
import router from '../../navigation/router';
import Button from '../../components/Button';
import CloseIcon from '../../components/CloseIcon';
import Header from '../../components/Header';
import Input from '../../components/Input';
import {tasksStorage} from '../../storage/tasks';

const CreateTaskScreen = ({navigation}: INavigationScreenProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header
          title="Create New Task"
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
        <View style={styles.footer}>
          <Button
            text="Save"
            onPress={() => {
              tasksStorage.add({
                id: v4(),
                title,
                description,
                state: 'PENDING',
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
  footer: {
    paddingBottom: 16,
  },
});

export default CreateTaskScreen;
