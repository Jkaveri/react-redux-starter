import createReducer from './createReducer'
import {
  FETCH_POSTS_SUCCEED,
  CLEAR_POSTS,
  REPLACE_POSTS
} from '../actions/posts'
import initialStateFactory from '../store/initialStateFactory'
import R from 'ramda'
import Immutable from 'immutable'

const initialState = initialStateFactory('posts')
const indexById = R.indexBy(R.prop('id'))
const mergePosts = (oldPosts, newPosts) => oldPosts.merge(newPosts)

export default createReducer({
  [FETCH_POSTS_SUCCEED]: (prevState, action) => mergePosts(prevState, indexById(action.posts)),
  [REPLACE_POSTS]: (prevState, action) => Immutable.fromJS(indexById(action.posts)),
  [CLEAR_POSTS]: (prevState, action) => initialState
}, initialState)
