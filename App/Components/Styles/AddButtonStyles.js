import {StyleSheet, Platform} from 'react-native'
import {Colors, Fonts, Metrics} from '../../Themes/'

export default StyleSheet.create({
  container: {
    marginTop: 8,
    width: Metrics.screenWidth,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  label: {
    color: Colors.blue
  }
})
