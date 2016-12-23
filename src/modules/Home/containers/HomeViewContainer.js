import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import HomeView from '../components/HomeView'
import { actions as postsActions } from '../../../actions/posts'
import Immutable from 'immutable'
import { info } from '~/utils/logger'

class HomeViewContainer extends Component {

  static propTypes = {
    posts: PropTypes.instanceOf(Immutable.Seq),
    postsActions: PropTypes.object
  }

  constructor (props, context) {
    super(props, context)
    this.onSearch = this.onSearch.bind(this)
  }

  onSearch (keyword) {
    info('keyword', keyword)
  }

  componentDidMount () {
    this.props.postsActions.fetchPosts()
  }

  render () {
    const { posts } = this.props

    return (
      <HomeView posts={posts} onSearch={this.onSearch} />
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  postsActions: bindActionCreators(postsActions, dispatch)
})

const mapStateToProps = (state) => ({
  posts: state.posts.valueSeq()
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeViewContainer)
