// @flow

import React, { Component } from 'react'
import {Text, View, TouchableOpacity} from 'react-native'

// Styles
import styles from './Styles/AddButtonStyles'

class AddButton extends Component {
  render () {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Text style={styles.label}>+ ADD EVENT</Text>
      </TouchableOpacity>
    )
  }
}

AddButton.propTypes = {
  onPress: React.PropTypes.func
};

export default AddButton;
