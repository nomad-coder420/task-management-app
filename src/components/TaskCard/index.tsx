import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {ITask} from './types';

interface IProps {
  item: ITask;
  onPress: () => void;
  index?: number;
}

const TaskCard = ({item, onPress}: IProps) => {
  const {title = '', description = ''} = item;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.taskCardContainer}>
        <Text style={styles.taskTitle}>{title}</Text>
        <Text numberOfLines={2}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TaskCard;
