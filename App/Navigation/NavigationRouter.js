// @flow

import React, { Component } from 'react'
import { Scene, Router, ActionConst, Actions } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import { Images, Colors } from '../Themes'

// screens identified by the router
import PresentationScreen from '../Containers/PresentationScreen'
import EmojiScreen from '../Containers/EmojiScreen'
import EventDescScreen from '../Containers/EventDescScreen'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/


class NavigationRouter extends Component {
  render () {
    return (
      <Router>
          <Scene key="drawerChildrenWrapper"
                 navigationBarStyle={Styles.navBar}
                 backButtonImage={Images.back}
                 titleStyle={Styles.title}
                 leftButtonIconStyle={Styles.leftButton}
                 rightButtonTextStyle={Styles.rightButton}>
            <Scene initial key="presentationScreen"
                   type={ActionConst.REPLACE}
                   component={PresentationScreen}
                   title="Nom Nom Romen"
                   titleStyle={Styles.title}
                   />
            <Scene key="emoji"
                   component={EmojiScreen}
                   title="Pick Emoji for Event"
                   titleStyle={Styles.title}
                   />
            <Scene key="eventDescription"
                   component={EventDescScreen}
                   title="Federal Donuts"
                   titleStyle={Styles.title}
                   rightTitle='Post'
                   rightButtonTextStyle={Styles.rightButton}
                   onRight={()=>{}}
                   />
          </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
