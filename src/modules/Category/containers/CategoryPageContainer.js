import CategoryPage from '../components/CategoryPage'
import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { actions as categoryActions } from '../../../actions/categories'
import { actions as postsActions } from '~/actions/posts'
import { withRouter } from 'react-router'
import Immutable from 'immutable'
import categoryManager from '~/services/categoryManager'

class CategoryPageContainer extends Component {
  static propTypes = {
    category: PropTypes.instanceOf(Immutable.Map),
    posts: PropTypes.instanceOf(Immutable.Seq),
    slug: PropTypes.string.isRequired,
    postsActions: PropTypes.object
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.category !== this.props.category) {
      const { category, postsActions } = nextProps
      if (category.size > 0) {
        postsActions.fetchPostsByCategoryId(category.get('id'))
      }
    }
  }

  componentDidMount () {
    this.props.postsActions.clearPosts()
  }

  render () {
    return (
      <CategoryPage category={this.props.category} posts={this.props.posts} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { categories, posts, appState } = state
  const { router } = ownProps
  const { slug } = router.params
  let category
  if (appState.get('isInitialized')) {
    if (slug) {
      category = categoryManager.findBySlug(slug, categories)
    }
    if (!category) {
      throw new Error(`slug:${slug} not found`)
    }
  } else {
    category = Immutable.fromJS({})
  }

  return {
    slug,
    category: category,
    posts: category.size > 0
      ? posts.valueSeq().filter((p) => p.get('categoryId') === category.get('id')).toList().toSeq()
      : Immutable.fromJS([]).toSeq()
  }
}

const mapDispatchToProps = (dispatch) => ({
  categoryActions: bindActionCreators(categoryActions, dispatch),
  postsActions: bindActionCreators(postsActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CategoryPageContainer))

