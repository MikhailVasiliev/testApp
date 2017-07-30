// @flow

import React, { Component } from 'react'
import {Text, View, Image, TouchableOpacity} from 'react-native'
import {Images} from '../Themes'

// Styles
import styles from './Styles/CardStyles'

class Card extends Component {
  render () {
    let message = this.props.event ? this.props.event.message : `This is a test message for testing and debuging`
    let time = this.props.event ? this.props.event.time : `35 minutes ago`
    let creatorName = this.props.event ? this.props.event.creator.name : `Rose Barnett`
    let creatorStatus = this.props.event ? this.props.event.creator.status : `Cool Prince`
    let contentImg = (this.props.event && this.props.event.contentImg) ? this.props.event.contentImg : Images.content

    return (
      <View style={styles.container}>
        <View style={styles.avaContainer}>
            <Image style={styles.img} source={Images.ava}/>
            <View style={styles.creatorNameContainer}>
              <Text style={styles.creatorName}>{creatorName}</Text>
              <Text style={styles.creatorStatus}>{creatorStatus}</Text>
            </View>
          <TouchableOpacity style={styles.menu} onPress={()=>{}}>
          <Image style={styles.menuIcon} source={Images.menu}/>
          </TouchableOpacity>
        </View>
        <Image style={styles.contentImg} source={contentImg}/>
        <Text style={styles.mainMessage}>{message}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    )
  }
}

Card.propTypes = {
  event: React.PropTypes.object
};

export default Card;
