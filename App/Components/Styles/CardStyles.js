import {StyleSheet, Platform} from 'react-native'
import {Colors, Fonts, Metrics} from '../../Themes/'

export default StyleSheet.create({
  container: {
    marginTop: 8,
    width: Metrics.screenWidth,
    padding: 20,
    backgroundColor: 'white',
  },
  avaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Metrics.screenWidth - 40,
    backgroundColor: 'white',
  },
  creatorNameContainer: {
    marginLeft: 20,
    flex: 1,
  },
  label: {
    color: Colors.blue
  },
  img: {
    width: 30,
    height: 30,
    borderRadius: 15,
    resizeMode: 'cover'
  },
  contentImg: {
    alignSelf: 'stretch',
    width: Metrics.screenWidth - 40,
    height: Metrics.screenHeight * 0.3,
    resizeMode: 'cover',
    marginTop: 20
  },
  menu: {
    width: 20,
    height: 20,
  },
  menuIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  mainMessage: {
    marginTop: 20,
    fontSize: 12,
  },
  time: {
    marginTop: 15,
    fontSize: 12,
    color: Colors.grey
  },
  creatorName: {
    fontSize: 13,
  },
  creatorStatus: {
    fontSize: 11,
    color: 'orange'
  },


})
