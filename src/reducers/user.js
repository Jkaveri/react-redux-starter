import createReducer from './createReducer'
import initialStateFactory from '../store/initialStateFactory'

const initialState = initialStateFactory('user')
export default createReducer({}, initialState)

