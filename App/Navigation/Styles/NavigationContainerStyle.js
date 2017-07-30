// @flow
import {Platform} from 'react-native'
import {Colors, Metrics} from '../../Themes/'

export default {
  container: {
    flex: 1
  },
  navBar: {
    backgroundColor: Colors.transparent,
    borderBottomWidth: 0,
    height: Metrics.navBarHeight,
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    alignSelf: 'center'
  },
  titleFavorites: {
    color: Colors.snow,
    backgroundColor: Colors.orange,
    ...Platform.select({
      ios: {
        elevation: 15
      },
      android: {
        marginTop: 4
      }
    })
  },
  titleThemes: {
    color: Colors.snow,
    backgroundColor: Colors.mainGreen,
    ...Platform.select({
      ios: {
        elevation: 15
      },
      android: {
        marginTop: 4
      }
    })
  },
  leftButton: {
    // tintColor: Colors.snow,
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  backButton: {
    tintColor: Colors.snow,
    width: 30,
    height: 21,
    resizeMode: 'contain'
  },
  rightButton: {
    color: Colors.blue,
  },
  rightButtonContainer: {
    width: 50,
  },
}
