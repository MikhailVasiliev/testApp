import {StyleSheet, Platform} from 'react-native'
import {Colors, Fonts, Metrics} from '../../Themes/'

export default StyleSheet.create({
  container: {
  },
  clearButton: {
    flex: 1,
    padding: 15,
    textAlign: 'center',
    color: 'black',
    textAlignVertical: 'center',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  visible: {
    top: 0,
    flex: 1,
    justifyContent: 'center',
  },
  hidden: {
    top: 1000,
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: 'grey',
    opacity: 0.5,
  },
  categoryOuter: {
    flex: 1,
  },
  categoryInner: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  headerText: {
    padding: 5,
    color: 'black',
    justifyContent: 'center',
    textAlignVertical: 'center',
  },
  groupName: {
    color: Colors.grey,
    fontSize: 12,
    marginTop: 20,
    marginBottom: 10,
  },
})
