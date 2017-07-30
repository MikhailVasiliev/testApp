// @flow

import React from 'react'
import { Text, View, Animated, Scrollview, Listview } from 'react-native'
import { Actions as NavigationActions } from 'react-native-router-flux'

//Components
import Indicators from '../Components/Indicators'
import AddButton from '../Components/AddButton'
import Card from '../Components/Card'

// Redux
import { connect } from 'react-redux'

// Styles
import styles from './Styles/PresentationScreenStyles'
import { Colors, Metrics } from '../Themes'


// External libs
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

class PresentationScreen extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      index: 0,
      routes: [
        { key: '1', title: 'FEED' },
        { key: '2', title: 'CHAT' },
        { key: '3', title: 'INFO' },
      ],
    }
  }

  _renderLabel = props => ({ route, index }) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    const outputRange = inputRange.map(
      inputIndex => (inputIndex === index ? Colors.blue : Colors.grey)
    );
    const color = props.position.interpolate({
      inputRange,
      outputRange,
    });

    return (
      <Animated.Text style={[styles.label, { color }]}>
        {route.title}
      </Animated.Text>
    );
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => {
    console.tron.log(props)
    return (
      <TabBar
        {...props}
        style={styles.tabHeader}
        renderLabel={this._renderLabel(props)}
        indicatorStyle={styles.indicator}
        />
    )
  }
  _renderScene = SceneMap({
    '1': this.renderFirstRoute,
    '2': this.renderSecondRoute,
    '3': this.renderThirdRoute,
  });

  renderFirstRoute(){
      return (
        <View
          style={[ styles.outerContainer, { backgroundColor: Colors.lightGrey } ]}
          >
          <Indicators/>
          <AddButton onPress={()=> NavigationActions.emoji()}/>
          <Card/>
        </View>
      )
  }

  renderSecondRoute(){
    return (
      <View
        style={[ styles.outerContainer, { backgroundColor: '#673ab7' } ]}
        />
    )
  }

  renderThirdRoute(){
    return (
      <View style={[ styles.outerContainer, { backgroundColor: '#678bb7' } ]} />
    )
  }

  render () {
    return (
          <View style={styles.outerContainer}>
          <TabViewAnimated
              style={styles.tabsContainer}
              navigationState={this.state}
              renderScene={this._renderScene}
              renderHeader={this._renderHeader}
              onIndexChange={this._handleIndexChange}
              onRequestChangeTab={this._handleIndexChange}
            />
          </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events.events
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PresentationScreen)
