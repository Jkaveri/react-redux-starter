import React, { PropTypes } from 'react'
import './HomeView.scss'
import PostsList from '../../../components/PostsList'
import SearchBox from '~/components/SearchBox'
import Immutable from 'immutable'

export const HomeView = (props) => {
  const { posts, onSearch, appState } = props
  const isShowSearchResult = appState.get('isShowSearchResult')
  const isSearching = appState.get('isSearching')
  let searchingStatusPanel = ''
  if (isSearching) {
    searchingStatusPanel = (<div className='panel panel-info'><p className='panel-body'>Searching....</p></div>)
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <SearchBox onSearch={onSearch} />
        </div>
      </div>
      {searchingStatusPanel}
      <hr />
      <PostsList posts={posts} isShowSearchResult={isShowSearchResult} />
    </div>
  )
}

HomeView.propTypes = {
  posts: PropTypes.instanceOf(Immutable.Seq),
  appState: PropTypes.instanceOf(Immutable.Map),
  onSearch: PropTypes.func
}

HomeView.defaultProp = {
  onSearch: () => { }
}

export default HomeView
