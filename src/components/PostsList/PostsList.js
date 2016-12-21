import React, { PropTypes } from 'react'
import PostItem from './PostItem'
import Immutable from 'immutable'

const PostsList = props => {
  const { posts } = props
  let list
  if (posts && posts.size > 0) {
    list = posts.map(post => (<PostItem key={post.get('id')} className='col-md-3' post={post} />))
  }
  return (
    <div className='row'>
      {list}
    </div>
  )
}

PostsList.propTypes = {
  posts: PropTypes.instanceOf(Immutable.Seq)
}

export default PostsList
