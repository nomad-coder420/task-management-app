import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#F4F5F8',
  },
  screenContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginVertical: 16,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '600',
  },
  timeContainer: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  time: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
  },
  taskList: {
    height: '100%',
    paddingHorizontal: 24,
  },
  footerContainer: {
    paddingHorizontal: 24,
    marginTop: 16,
  },
});

export default styles;
