// @flow

import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  main: {
    flex: 1,
    marginTop: Metrics.navBarHeight
  },
  tabsContainer: {
    flex: 1,
    marginTop: Metrics.navBarHeight
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
  noArticlesContainer: {
    flex: 1,
    backgroundColor: 'grey'
  },
  logo: {
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  footerButtonRead: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.transparent,
    alignItems: 'center',
  },
  footerButtonText: {
    color: 'white',
    margin: 20,
    fontFamily: 'Avenir Next'
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    right: 20,
    left: 20,
    top: Metrics.screenHeight - Metrics.footerHeight,
    height: Metrics.footerHeight,
    width: Metrics.screenWidth - 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.transparent,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'white'
  },
  dot: {
    width: 6,
    height: 6,
    // borderRadius: 2,
    // margin: 2,
  },
  separate: {
    backgroundColor: 'black',
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 5
  },
  scrollview: {
    backgroundColor: 'black'
  }
})
