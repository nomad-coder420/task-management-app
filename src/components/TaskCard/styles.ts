import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  taskCardContainer: {
    flexDirection: 'row',
    position: 'relative',
    marginBottom: 16,
  },
  contentContainer: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#e6e6e6',
    shadowOffset: {
      height: 3,
      width: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 1,
    width: '100%',
  },
  taskTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  taskTitle: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
    marginBottom: 8,
    width: '80%',
  },
  editButton: {
    marginLeft: 16,
  },
  buttonTrayContainer: {
    position: 'absolute',
    right: 0,
    zIndex: -1,
    height: '100%',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
    backgroundColor: '#D6F2E2',
    borderRadius: 8,
  },
  button: {
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
  },
  deleteButtonContainer: {
    backgroundColor: '#FFE5E5',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  completeButtonContainer: {
    backgroundColor: '#D6F2E2',
  },
  buttonIcon: {
    width: 24,
    height: 24,
  },
});

export default styles;
