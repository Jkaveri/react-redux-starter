import createReducer from './createReducer'
import { POSTS_FETCHED } from '../actions/posts'
import initialStateFactory from '../store/initialStateFactory'
import R from 'ramda'

const initialState = initialStateFactory('posts')

export default createReducer({
  [POSTS_FETCHED]: (prevState, action) => {
    const indexedById = R.indexBy(R.prop('id'), action.posts)
    return prevState.merge(indexedById)
  }
}, initialState)
