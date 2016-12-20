import { LOCATION_CHANGE } from '../actions/location'
import createReducer from './createReducer'

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = null

export default createReducer({
  [LOCATION_CHANGE]: (prevState = initialState, action) => {
    if (action && action.payload) {
      return action.payload
    }
    return prevState
  }
}, initialState)
