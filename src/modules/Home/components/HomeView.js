import React, { PropTypes } from 'react'
import './HomeView.scss'
import PostsList from '../../../components/PostsList'
import Immutable from 'immutable'

export const HomeView = (props) => {
  const { posts } = props
  return (
    <div className='container'>
      <PostsList posts={posts} />
    </div>
  )
}

HomeView.propTypes = {
  posts: PropTypes.instanceOf(Immutable.Seq)
}

export default HomeView
