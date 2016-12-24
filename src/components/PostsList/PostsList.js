import React, { PropTypes } from 'react'
import PostItem from './PostItem'
import Immutable from 'immutable'

const PostsList = props => {
  const { posts, isShowSearchResult } = props
  let list
  if (posts.size > 0) {
    list = posts.map(post => (<PostItem key={post.get('id')} className='col-md-3' post={post} />))
  } else if (isShowSearchResult) {
    list = (<h2>No search result</h2>)
  } else {
    list = (<h2>Empty....</h2>)
  }
  return (
    <div className='row'>
      {list}
    </div>
  )
}

PostsList.propTypes = {
  posts: PropTypes.instanceOf(Immutable.Seq),
  isShowSearchResult: PropTypes.bool
}

export default PostsList
