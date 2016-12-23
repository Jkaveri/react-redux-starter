import { apiResources } from '../services/postManager'

/**
 * ACTION TYPES
 */
export const FETCH_POSTS_SUCCEED = 'FETCH_POSTS_SUCCEED'
export const CLEAR_POSTS = 'posts/clear'
export const SEARCH_POSTS_PROCESSING = 'SEARCH_POSTS_PROCESSING'
export const SEARCH_POSTS_SUCCEED = 'SEARCH_POSTS_SUCCEED'

/**
 * ACTION CREATORS
 */

let lastFetched = null

export const fetchPosts = (start, limit, orderBy, orderDir) => (dispatch) => {
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
export function searchPostSucceed (keyword, posts) {
  return {
    type: SEARCH_POSTS_SUCCEED,
    posts,
    keyword
  }
}
export const searchPosts = (keyword) => (dispatch) => {
  return dispatch((disp) => disp({
    type: SEARCH_POSTS_PROCESSING
  })).then((disp) => {
    return apiResources
      .searchPosts(keyword)
      .then((posts) => disp(searchPostSucceed(keyword, posts)))
  })
}

export const actions = {
  fetchPosts,
  fetchPostsByCategoryId,
  fetchPostsSucceed,
  searchPosts,
  searchPostSucceed,
  clearPosts
}

