import createReducer from './createReducer'
import { POSTS_FETCHED } from '../actions/post'
import initialStateFactory from '../store/initialStateFactory'

const initialState = initialStateFactory('posts')

export default createReducer({
  [POSTS_FETCHED]: (prevState, action) => {
    return prevState.merge(action.posts)
  }
}, initialState)
