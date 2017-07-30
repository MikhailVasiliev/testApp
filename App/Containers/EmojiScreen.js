// @flow

import React from 'react'
import { Text, View, Animated, Scrollview, Listview, TouchableOpacity } from 'react-native'
import { Actions as NavigationActions } from 'react-native-router-flux'
import EmojiPicker from '../Components/EmojiPicker'

// Redux
import { connect } from 'react-redux'

// Styles
import styles from './Styles/EmojiScreenStyles'
import { Colors, Metrics } from '../Themes'


// External libs
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

class EmojiScreen extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      selectedEmoji: null,
      extended: false
    }
  }


  render () {
    console.tron.log(this.state.selectedEmoji)
    let footerText = `Can\'t find the right Emoji?`
    return (
          <View style={styles.main}>
            <EmojiPicker
              onEmojiSelected={(e)=>
                this.setState({selectedEmoji: e })
              }
              extended={this.state.extended}/>
            {!this.state.extended && !this.state.selectedEmoji // prompt to extend emoji list
              && <View style={styles.footer}>
              <Text style={styles.footerText}>{footerText}</Text>
              <TouchableOpacity onPress={()=> this.setState({extended: true})}>
                <Text style={styles.showMoreText} >SHOW FULL LIST</Text>
              </TouchableOpacity>
            </View>}
            {this.state.selectedEmoji // selected emoji
              && <View style={styles.footerSelected}>
                <TouchableOpacity style={styles.clearButton} onPress={()=>this.setState({selectedEmoji: null})}>
                  <Text style={styles.clearButtonText}>Clear</Text>
                </TouchableOpacity>
                <Text style={styles.selectedEmoji}
                  >{this.state.selectedEmoji}</Text>
                <TouchableOpacity style={styles.selectButton} onPress={()=>NavigationActions.eventDescription({emoji: this.state.selectedEmoji})}>
                  <Text style={styles.selectButtonText}>Select</Text>
                </TouchableOpacity>
            </View>}
          </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // articles: state.articles.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // articleFetchAttempt: (path) => dispatch(ArticlesActions.articleFetchAttempt(path))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmojiScreen)
