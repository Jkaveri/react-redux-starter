import React, { PropTypes } from 'react'
import truncate from '~/utils/truncate'

const PostItem = props => {
  const { post, ...otherProps } = props
  const style = {
    boxShadow: '0 0 3px rgba(0,0,0,0.3)',
    margin: '0 0 8px',
    height: '325px'
  }

  return (
    <div {...otherProps}>
      <div style={style} className='media'>
        <div>
          <a href='#'>
            <img className='media-object' src={post.get('picture')} alt='img' />
          </a>
        </div>
        <div className='media-body'>
          <h4 className='media-heading'>{post.get('name')}</h4>
          <p>{truncate(post.get('content'), 100)}</p>
        </div>
      </div>
    </div>
  )
}

PostItem.propTypes = {
  post: PropTypes.any
}

export default PostItem
