'use strict'
import React, {
  PropTypes,
  Component,
} from 'react'

import {
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Platform,
} from 'react-native'

import emoji from 'emoji-datasource'

import {
  groupBy,
  orderBy,
  includes,
} from 'lodash/collection'

import {
  mapValues,
} from 'lodash/object'

// Styles
import styles from './Styles/EmojiPickerStyles'
import {Metrics} from '../Themes'
//polyfil for android
require('string.fromcodepoint');

// i dont understand ANY of this but there's somethign called codepoints and surrogate pairs
// and this converts utf16 to a charachter in javascript. see more here:
//https://mathiasbynens.be/notes/javascript-unicode
//https://mathiasbynens.be/notes/javascript-escapes#unicode-code-point
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
const charFromUtf16 = utf16 => String.fromCodePoint(...utf16.split('-').map(u => '0x' + u))
const charFromEmojiObj = obj => charFromUtf16(obj.unified)
const blacklistedEmojis = ['white_frowning_face', 'keycap_star', 'eject']

const isAndroid = Platform.OS == 'android'
const letterSpacing = 10
const defaultEmojiSize = 30
const padding = 5
const filteredEmojis = emoji.filter(e => isAndroid ? !!e.google : !includes(blacklistedEmojis, e.short_name))
// sort emojis by 'sort_order' then group them into categories
const groupedAndSorted = groupBy(orderBy(filteredEmojis, 'sort_order'), 'category')
// convert the emoji object to a character
const emojisByCategory = mapValues(groupedAndSorted, group => group.map(charFromEmojiObj))

const CATEGORIES = ['Activity', 'Foods', 'Nature', 'Places', 'Objects', 'Symbols', 'Flags', 'People']


class EmojiPicker extends Component {
  state = {
    categories: CATEGORIES.slice(0, 1),
  }

  componentWillUnmount() {
    clearTimeout(this._timeout)
  }

  loadNextCategory() {
    if (this.state.categories.length < CATEGORIES.length) {
      this.setState({categories: CATEGORIES.slice(0, this.state.categories.length + 1)})
    }
  }

  renderCategory(category) {
    return (
      <EmojiCategory
        {...this.props}
        key={category}
        category={category}
        finishedLoading={() => this._timeout = setTimeout(this.loadNextCategory.bind(this), 100)} />
      )
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <ScrollView>
          {this.state.categories.map(this.renderCategory.bind(this))}
        </ScrollView>
      </View>
    )
  }

}

class EmojiCategory extends Component {
  componentDidMount() {
    this.props.finishedLoading()
  }

  render() {
    let emojis = this.props.extended
      ? emojisByCategory[this.props.category].slice(0, 35)
      : emojisByCategory[this.props.category].slice(0, 14)
    let size = this.props.emojiSize || defaultEmojiSize
    let style = {
      fontSize: size - 4,
      color: 'black',
      height: (Metrics.screenWidth - 40) / 7,
      width: (Metrics.screenWidth - 40) / 7,
      // height: size + 12,
      // width: size + 12,
      textAlign: 'center',
      padding: padding,
    }

    return (
     <View style={style.categoryOuter}>
        <Text style={styles.groupName}>{this.props.category.toUpperCase()}</Text>
        <View style={styles.categoryInner}>
          {emojis.map(e =>
            <Text style={style}
              key={e}
              onPress={() => this.props.onEmojiSelected(e)}>
              {e}
            </Text>
          )}
        </View>
      </View>
    )
  }
}




EmojiPicker.propTypes = {
  onEmojiSelected: React.PropTypes.func,
  extended: React.PropTypes.bool
}

export { EmojiPicker as default }
