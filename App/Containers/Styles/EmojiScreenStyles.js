// @flow

import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  main: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    paddingLeft: 20,
    paddingVertical: 20,
  },
  groupName: {
    color: Colors.grey,
    fontSize: 12,
  },
  scrollview: {
    flex: 1,
    marginTop: 20
  },
  indicator: {
    backgroundColor: Colors.blue
  },
  tabHeader:{
    backgroundColor: 'white'
  },
  footer:{
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    height: 70,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 18,
    alignSelf: 'stretch',
    textAlign: 'center',
    color: Colors.grey,
  },
  showMoreText: {
    marginTop: 10,
    fontSize: 16,
    alignSelf: 'stretch',
    textAlign: 'center',
    color: Colors.blue,
  },
  footerSelected:{
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    height: 70,
    paddingHorizontal: 20,
    backgroundColor: Colors.lightGrey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedEmoji:{
    fontSize: 48,
    textAlign: 'center',
    width: Metrics.screenWidth * 0.6
  },
  showMoreText: {
    marginTop: 10,
    fontSize: 16,
    alignSelf: 'stretch',
    textAlign: 'center',
    color: Colors.blue,
  },
  clearButton: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.transparent,
  },
  clearButtonText: {
    fontSize: 12,
    alignSelf: 'stretch',
    textAlign: 'center',
    color: Colors.grey,
  },
  selectButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue,
  },
  selectButtonText: {
    fontSize: 12,
    color: 'white',
  },
})
