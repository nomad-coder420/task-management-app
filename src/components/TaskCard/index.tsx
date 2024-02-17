import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import {PanGestureHandler, State} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import styles from './styles';
import {ITask} from './types';

interface IProps {
  item: ITask;
  onPress: () => void;
  onDelete: () => void;
  onComplete: () => void;
  index?: number;
}

const TaskCard = ({item, onPress, onDelete, onComplete}: IProps) => {
  const translateX = useSharedValue(0);
  const backgroundColor = useSharedValue('#fff');

  const [buttonsVisible, setButtonsVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(item.state === 'PENDING');

  const {title = '', description = ''} = item;

  const onGestureEvent = event => {
    if (item.state === 'PENDING') {
      if (!buttonsVisible) {
        if (
          event.nativeEvent.translationX < 0 &&
          event.nativeEvent.translationX > -120
        ) {
          translateX.value = event.nativeEvent.translationX;
        }
      } else {
        if (
          event.nativeEvent.translationX > 0 &&
          event.nativeEvent.translationX < 100
        ) {
          translateX.value = event.nativeEvent.translationX - 100;
        }
      }
    }
  };

  const onHandlerStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      if (!buttonsVisible) {
        if (translateX.value < -50) {
          translateX.value = withSpring(-100, {
            velocity: event.nativeEvent.velocityX,
            damping: 50,
          });
          setButtonsVisible(true);
        } else {
          translateX.value = withSpring(0, {
            velocity: event.nativeEvent.velocityX,
            damping: 50,
          });
        }
      } else {
        if (translateX.value > -100) {
          translateX.value = withSpring(0, {
            velocity: event.nativeEvent.velocityX,
            damping: 50,
          });
          setButtonsVisible(false);
        }
      }
    }
  };

  const handleDelete = () => {
    onDelete();
  };

  const handleComplete = () => {
    translateX.value = withSpring(0, {
      damping: 50,
    });
    backgroundColor.value = withTiming('#D6F2E2');
    onComplete();
    setEditVisible(false);
  };

  useEffect(() => {
    if (item.state === 'COMPLETED') {
      backgroundColor.value = withTiming('#D6F2E2');
    }
  }, []);

  return (
    <View style={styles.taskCardContainer}>
      <PanGestureHandler
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onHandlerStateChange}>
        <Animated.View
          style={[
            styles.contentContainer,
            {
              transform: [{translateX: translateX}],
              backgroundColor,
            },
          ]}>
          <View style={styles.taskTitleContainer}>
            <Text style={styles.taskTitle} numberOfLines={1}>
              {title}
            </Text>
            {editVisible && (
              <TouchableOpacity onPress={onPress} style={styles.editButton}>
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>
            )}
          </View>
          <Text numberOfLines={2} style={styles.description}>
            {description}
          </Text>
        </Animated.View>
      </PanGestureHandler>
      <View style={styles.buttonTrayContainer}>
        <TouchableOpacity
          onPress={handleComplete}
          style={[styles.buttonContainer, styles.completeButtonContainer]}>
          <Image
            source={require('../../assets/DoneIcon.png')}
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleDelete}
          style={[styles.buttonContainer, styles.deleteButtonContainer]}>
          <Image
            source={require('../../assets/DeleteIcon.png')}
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskCard;
