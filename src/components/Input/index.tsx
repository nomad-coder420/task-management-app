import React from 'react';
import {Platform, StyleSheet, Text, TextInput, View} from 'react-native';

interface IProps {
  name: string;
  value: string;
  setValue: (text: string) => void;
  multiline?: boolean;
}

const Input = ({name, value, setValue, multiline}: IProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.inputName}>{name}</Text>
      <TextInput
        value={value}
        onChangeText={text => {
          setValue(text);
        }}
        style={[styles.input, multiline ? styles.multiline : {}]}
        multiline={multiline}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  inputName: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '500',
    marginBottom: 6,
    color: '#000000',
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#989DA8',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 4,
    color: '#000000',
  },
  multiline: {
    height: 122,
    paddingVertical: 16,
    textAlignVertical: 'top',
  },
});

export default Input;
