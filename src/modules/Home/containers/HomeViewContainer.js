import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import HomeView from '../components/HomeView'
import { actions as postsActions } from '../../../actions/posts'
import { actions as appActions } from '../../../actions/appState'

import Immutable from 'immutable'
class HomeViewContainer extends Component {

  static propTypes = {
    posts: PropTypes.instanceOf(Immutable.Seq),
    postsActions: PropTypes.object,
    appActions: PropTypes.object,
    appState: PropTypes.instanceOf(Immutable.Map)
  }

  constructor (props, context) {
    super(props, context)
    this.onSearch = this.onSearch.bind(this)
  }

  onSearch (keyword) {
    this.props.postsActions.search(keyword)
  }

  componentDidMount () {
    this.props.postsActions.fetchPosts()
  }

  render () {
    const { posts, appState } = this.props

    return (
      <HomeView posts={posts} onSearch={this.onSearch} appState={appState} />
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  postsActions: bindActionCreators(postsActions, dispatch),
  appActions: bindActionCreators(appActions, dispatch)
})

const mapStateToProps = (state) => ({
  posts: state.posts.valueSeq(),
  appState: state.appState
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeViewContainer)
