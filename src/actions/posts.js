import { apiResources } from '../services/postManager'
import sequenceAsyncActions from './sequenceAsyncActions'
import { actions as appActions } from './appState'
import Q from 'q'
/**
 * ACTION TYPES
 */
export const ADD_POST = 'posts/add'
export const CLEAR_POSTS = 'posts/clear'
export const FETCH_POSTS_SUCCEED = 'FETCH_POSTS_SUCCEED'
export const MERGE_POSTS = 'posts/merge'
export const REMOVE_POST = 'posts/remove'
export const REPLACE_POSTS = 'posts/replace'
export const SEARCH_POSTS_PROCESSING = 'SEARCH_POSTS_PROCESSING'
export const SEARCH_POSTS_SUCCEED = 'SEARCH_POSTS_SUCCEED'
export const UPDATE_POST = 'posts/update'

/**
 * ACTION CREATORS
 */

let lastFetched = null

export const fetchPosts = () => (dispatch) => {
  apiResources.fetchList().then((posts) => dispatch(fetchPostsSucceed(posts)))
}

export function fetchPostsSucceed (posts) {
  return {
    type: FETCH_POSTS_SUCCEED,
    posts,
    lastFetched
  }
}

export function clearPosts () {
  return {
    type: CLEAR_POSTS
  }
}

export const fetchPostsByCategoryId = (id) => (dispatch) => {
  apiResources.fetchPostsByCategoryId(id).then((posts) => dispatch(fetchPostsSucceed(posts)))
}

export const mergePosts = (posts) => ({
  type: MERGE_POSTS,
  posts
})

export const replacePosts = (posts) => ({
  type: REPLACE_POSTS,
  posts
})

export const search = (keyword) => sequenceAsyncActions([
  appActions.search(keyword, 'posts'),
  (dispatch) => {
    return apiResources
      .search(keyword)
      .then((posts) => dispatch(replacePosts(posts)))
  },
  (dispatch, getState, posts) => {
    console.log('app search success')
    return dispatch(appActions.searchSucceed(keyword, 'posts', posts))
  }
])

export const actions = {
  fetchPosts,
  fetchPostsByCategoryId,
  fetchPostsSucceed,
  search,
  clearPosts
}

