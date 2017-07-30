// @flow

import React, { Component } from 'react'
import {
  View,
  StatusBar,
  Platform
} from 'react-native'
import NavigationRouter from '../Navigation/NavigationRouter'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'

// Styles
import styles from './Styles/RootContainerStyles'
import { Colors } from '../Themes'

// External libs
import { Actions as NavigationActions } from 'react-native-router-flux'


class RootContainer extends Component {

  render () {
    return (
        <View style={styles.applicationView}>
          <StatusBar
            barStyle="dark-content"
            translucent={true}
            />
          <NavigationRouter  />
        </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // articles: state.articles.data
  }
}

const mapDispatchToProps = (dispatch) => ({
  // startup: () => dispatch(StartupActions.startup())
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
