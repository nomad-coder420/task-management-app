import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = ({
  title,
  leftIcon,
  rightIcon,
}: {
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerIcon}>{leftIcon || null}</View>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.headerIcon}>{rightIcon || null}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  headerIcon: {
    height: 24,
    width: 24,
  },
  title: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '600',
  },
});

export default Header;
