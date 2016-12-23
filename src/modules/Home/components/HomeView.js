import React, { PropTypes } from 'react'
import './HomeView.scss'
import PostsList from '../../../components/PostsList'
import SearchBox from '~/components/SearchBox'
import Immutable from 'immutable'

export const HomeView = (props) => {
  const { posts, onSearch } = props
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <SearchBox onSearch={onSearch} />
        </div>
      </div>
      <hr />
      <PostsList posts={posts} />
    </div>
  )
}

HomeView.propTypes = {
  posts: PropTypes.instanceOf(Immutable.Seq),
  onSearch: PropTypes.func
}

HomeView.defaultProp = {
  onSearch: () => {}
}

export default HomeView
