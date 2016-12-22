import createReducer from './createReducer'
import { FETCH_POSTS_SUCCEED, CLEAR_POSTS } from '../actions/posts'
import initialStateFactory from '../store/initialStateFactory'
import R from 'ramda'

const initialState = initialStateFactory('posts')

export default createReducer({
  [FETCH_POSTS_SUCCEED]: (prevState, action) => {
    const indexedById = R.indexBy(R.prop('id'), action.posts)
    return prevState.merge(indexedById)
  },
  [CLEAR_POSTS]: (prevState, action) => initialState
}, initialState)
