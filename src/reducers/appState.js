import createReducer from './createReducer'
import { APP_INITIALIZED } from '../actions/app'
import initialStateFactory from '../store/initialStateFactory'

const initialState = initialStateFactory('appState')

export default createReducer({
  [APP_INITIALIZED]: (prevState, action) => {
    return prevState.merge(action.appState)
  }
}, initialState)
