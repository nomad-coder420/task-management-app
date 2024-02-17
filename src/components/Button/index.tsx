import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface IProps {
  text: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  buttonTextStyles?: object;
}

const Button = ({
  text,
  onPress,
  variant = 'primary',
  disabled,
  buttonTextStyles,
}: IProps) => {
  const styles = StyleSheet.create({
    button: {
      display: 'flex',
      alignItems: 'center',
      paddingVertical: 16,
      borderRadius: 8,
      backgroundColor: {primary: '#03475c', secondary: ''}[variant],
    },
    buttonText: {
      fontSize: 16,
      lineHeight: 20,
      fontWeight: '600',
      color: {primary: '#fff', secondary: '#03475c'}[variant],
    },
    disabled: {
      backgroundColor: '#989da8',
    },
  });

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        if (!disabled && onPress) {
          onPress();
        }
      }}
      style={[styles.button, disabled ? styles.disabled : {}]}>
      <Text style={[styles.buttonText, buttonTextStyles]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
