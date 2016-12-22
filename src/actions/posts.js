import { apiResources } from '../services/postManager'

/**
 * ACTION TYPES
 */
export const FETCH_POSTS_SUCCEED = 'FETCH_POSTS_SUCCEED'
export const CLEAR_POSTS = 'posts/clear'

/**
 * ACTION CREATORS
 */

let lastFetched = null

export const fetchPosts = (start, limit, orderBy, orderDir) => (dispatch) => {
  apiResources.fetchList().then((posts) => dispatch(fetchPostsSucceed(posts)))
}

export const fetchPostsSucceed = (posts) => ({
  type: FETCH_POSTS_SUCCEED,
  posts,
  lastFetched
})

export const clearPosts = () => ({
  type: CLEAR_POSTS
})

export const fetchPostsByCategoryId = (id) => (dispatch) => {
  apiResources.fetchPostsByCategoryId(id).then((posts) => dispatch(fetchPostsSucceed(posts)))
}

export const actions = {
  fetchPosts,
  fetchPostsByCategoryId,
  fetchPostsSucceed,
  clearPosts
}

