// @flow

import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  main: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    padding: 0,
  },
  headerContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  icon:{
    margin: 10,
    fontSize: 48,
  },
  titleInput: {
    flex: 1,
    marginLeft: 10,
    marginTop: 10,
    fontSize: 18,
    height: 50
  },
  descInput: {
    flex: 1,
    marginBottom: 10,
    marginLeft: 10,
    fontSize: 16,
    paddingHorizontal: 10
  },
  img: {
    width: Metrics.screenWidth - 20,
    height: Metrics.screenHeight * 0.4,
    backgroundColor: Colors.blue,
    margin: 10,
  },
  tabHeader:{
    backgroundColor: 'white'
  },
  footer:{
    width: Metrics.screenWidth,
    height: 60,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: Colors.lightGrey,
    paddingLeft: 10
  },
  footerIcon: {
    resizeMode: 'contain',
    width: 25,
    height: 25,
    margin: 10
  }
})
