import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  taskCardContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#e6e6e6',
    shadowOffset: {
      height: 3,
      width: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 1,
  },
  taskTitle: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
});

export default styles;
