// @flow

import React from 'react'
import { Text, View, TextInput, Scrollview, Listview, TouchableOpacity, Image } from 'react-native'
import { Actions as NavigationActions } from 'react-native-router-flux'
import EmojiPicker from '../Components/EmojiPicker'

// Redux
import { connect } from 'react-redux'
import EventsActions from '../Redux/EventsRedux'
// Styles
import styles from './Styles/EventDescScreenStyles'
import { Colors, Metrics, Images } from '../Themes'


// External libs
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import ImagePicker from 'react-native-image-picker';


class EmojiScreen extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      selectedEmoji: null,
      title: '',
      description: '',
      img: 'test'
    }

    this.options = {
      title: 'Select Image',
      customButtons: [
        {name: 'fb', title: 'Choose Photo from Facebook'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    }
  }

  componentWillMount(){
    NavigationActions.refresh({onRight: () => this.savePost()})
  }

  savePost(){
    let event = {
      message: this.state.description,
      time: `45 mins ago`,
      title: this.state.title,
      contentImg: this.state.img,
      icon: this.props.emoji
    }

    this.props.saveEvent(event);
    NavigationActions.popTo('presentationScreen');
  }


 makePhoto(){

    // Launch Camera:
    ImagePicker.launchCamera(this.options, (response)  => {
      console.tron.log('Response = ', response);

      if (response.didCancel) {
        console.tron.log('User cancelled image picker');
      }

      else if (response.error) {
        console.tron.log('ImagePicker Error: ', response.error);
      }

      else if (response.customButton) {
        console.tron.log('User tapped custom button: ', response.customButton);
      }

      else {
        let source = { uri: response.uri };
        this.setState({ img: source });
      }
    });
  }

 getImage(){

    // Launch Camera:
    ImagePicker.launchImageLibrary(this.options, (response)  => {
      console.tron.log('Response = ', response);

      if (response.didCancel) {
        console.tron.log('User cancelled image picker');
      }

      else if (response.error) {
        console.tron.log('ImagePicker Error: ', response.error);
      }

      else if (response.customButton) {
        console.tron.log('User tapped custom button: ', response.customButton);
      }

      else {
        let source = { uri: response.uri };
        this.setState({ img: source });
      }
    });
  }


  render () {
    return (
          <View style={styles.main}>
            <View style={styles.headerContainer}>
              <Text style={styles.icon}>{this.props.emoji}</Text>
              <TextInput
                style={styles.titleInput}
                placeholder={'Event Title'}
                onChangeText={(title) => this.setState({title})}
                value={this.state.title}
                multiline
                autoCapitalize={'sentences'}
                numberOfLines={2}
                placeholderTextColor={Colors.grey}
                underlineColorAndroid={Colors.transparent}
                />
            </View>
            <TextInput
              style={styles.descInput}
              placeholder={'Event Description'}
              onChangeText={(description) => this.setState({description})}
              value={this.state.description}
              multiline
              autoCapitalize={'sentences'}
              placeholderTextColor={Colors.grey}
              underlineColorAndroid={Colors.transparent}
              />
            {this.state.img !== 'test' && <Image style={styles.img} source={this.state.img}/>}
            <View style={styles.footer}>
              <TouchableOpacity onPress={()=> this.makePhoto()}>
                <Image style={styles.footerIcon} source={Images.photo}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> this.getImage()}>
                <Image style={styles.footerIcon} source={Images.gallery}/>
              </TouchableOpacity>
            </View>
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
    saveEvent: (event) => dispatch(EventsActions.saveEvent(event))
    // articleFetchAttempt: (path) => dispatch(ArticlesActions.articleFetchAttempt(path))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmojiScreen)
