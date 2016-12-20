/**
 * ACTION TYPES
 */
export const POSTS_FETCHED = 'POSTS_FETCHED'

/**
 * ACTION CREATORS
 */

let lastFetched = null

export const fetchPosts = (start, limit, orderBy, orderDir) => (dispatch) => {
  setTimeout(() => dispatch(postsLoaded([])), 1000)
}

export const postsLoaded = (posts) => ({
  type: POSTS_FETCHED,
  posts,
  lastFetched
})

