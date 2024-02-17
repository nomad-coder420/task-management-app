import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

const CloseIcon = ({onPress}: {onPress: () => void}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={require('../../assets/CloseIcon.png')}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default CloseIcon;
