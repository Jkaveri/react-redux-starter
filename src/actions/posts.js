import postsService from '../services/posts'

/**
 * ACTION TYPES
 */
export const POSTS_FETCHED = 'POSTS_FETCHED'

/**
 * ACTION CREATORS
 */

let lastFetched = null

export const fetchPosts = (start, limit, orderBy, orderDir) => (dispatch) => {
  postsService.fetchList().then((posts) => dispatch(fetchPostsSucceed(posts)))
}

export const fetchPostsSucceed = (posts) => ({
  type: POSTS_FETCHED,
  posts,
  lastFetched
})

export const actions = {
  fetchPosts,
  fetchPostsSucceed
}

