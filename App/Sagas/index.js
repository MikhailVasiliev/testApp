import { takeLatest } from 'redux-saga'
import API from '../Services/Api'
import DebugSettings from '../Config/DebugSettings'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { LoginTypes } from '../Redux/LoginRedux'
import { EventsTypes } from '../Redux/EventsRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'

import {
  saveEvent
} from './EventsSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.create()


/* ------------- Connect Types To Sagas ------------- */

const root = function * root () {
  yield [
    takeLatest(EventsTypes.SAVE_EVENT, saveEvent, api)
  ]
}

export default root
