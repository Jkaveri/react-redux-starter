import React, { PropTypes } from 'react'
import truncate from '~/utils/truncate'

const PostItem = props => {
  const { post, ...otherProps } = props
  const style = {
    border: '1px solid rgba(0,0,0,0.3)',
    padding: '6px 8px',
    margin: '0 0 15px'
  }
  return (
    <div {...otherProps}>
      <div style={style}>
        <h3>{post.get('name')}</h3>
        <span>{truncate(post.get('content'), 100)}</span>
      </div>
    </div>
  )
}

PostItem.propTypes = {
  post: PropTypes.any
}

export default PostItem
