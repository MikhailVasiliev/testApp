// @flow

import { StyleSheet } from 'react-native'
import {
  Colors,
  Metrics,
  Fonts
} from '../../Themes/'

export default StyleSheet.create({
  mainOuter:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage:{
    flex: 1,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    resizeMode: 'cover'
  },
  welcomeText: {
    ...Fonts.style.h4,
    fontSize: 23,
    margin: 20,
    color: 'white',
    marginBottom: 15,
  },
  loginInput: {
    alignSelf: 'stretch',
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    color: 'white',
    margin: 15,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    fontFamily: 'Avenir Next'
  },
  passInput: {
    alignSelf: 'stretch',
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    color: 'white',
    margin: 15,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    fontFamily: 'Avenir Next'
  },
  loginBtn: {
    flex: 1,
    alignSelf: 'stretch',
    height: 40,
    backgroundColor: Colors.transparent,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white'
  },
  loginBtnText: {
    ...Fonts.style.h4,
    fontSize: 18,
    color: 'white'
  },
  loginGoogleBtn: {
    height: 40,
    width: 40,
    backgroundColor: Colors.transparent,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white'
  },
  loginGoogleBtnText: {
    width: 20,
    height: 20,
    tintColor: 'white'
  },
  loginFbBtn: {
    width: 40,
    height: 40,
    backgroundColor: Colors.transparent,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white'
  },
  loginFbBtnText: {
    width: 20,
    height: 20,
    tintColor: 'white'
  },
  loginSmsBtn: {
    width: 40,
    height: 40,
    backgroundColor: Colors.transparent,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white'
  },
  loginSmsBtnText: {
    color: 'white'
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
  },
  createAccountButton: {
    margin: 30,
  },
  createAccountText: {
    ...Fonts.style.normal,
    color: 'white',
    textDecorationLine: 'underline'
  },
})
