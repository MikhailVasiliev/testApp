// @flow

import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  saveEvent: ['event']
})

export const EventsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  events: []
})

/* ------------- Reducers ------------- */

export const saveEvent = (state, {event}) => {
  let events = state.events
  events = events.concat(event)
  return state.merge({ events })
}



/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_EVENT]: saveEvent
})
