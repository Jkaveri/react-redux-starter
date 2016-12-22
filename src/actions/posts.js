import postsService from '../services/posts'

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
  postsService.fetchList().then((posts) => dispatch(fetchPostsSucceed(posts)))
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
  postsService.fetchPostsByCategoryId(id).then((posts) => dispatch(fetchPostsSucceed(posts)))
}

export const actions = {
  fetchPosts,
  fetchPostsByCategoryId,
  fetchPostsSucceed,
  clearPosts
}

