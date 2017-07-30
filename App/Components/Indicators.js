// @flow

import React, { Component } from 'react'
import {Text, View} from 'react-native'

// Styles
import styles from './Styles/IndicatorsStyles'

class Indicators extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Busy</Text>
        <Text style={styles.label}>Girls</Text>
        <Text style={styles.label}>20+</Text>
        <Text style={styles.label}>Rating</Text>
      </View>
    )
  }
}

export default Indicators;
