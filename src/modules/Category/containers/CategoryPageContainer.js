import CategoryPage from '../components/CategoryPage'
import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { actions as categoryActions } from '../../../actions/category'

class CategoryPageContainer extends Component {
  static propTypes = {
    categories: PropTypes.array.isRequired,
    categoryActions: PropTypes.object.isRequired
  }

  render () {
    return (
      <CategoryPage categories={this.props.categories} />
    )
  }
}

const mapStateToProps = (state) => {
  const { categories } = state
  return {
    categories: categories ? categories.toJS() : []
  }
}

const mapDispatchToProps = (dispatch) => ({
  categoryActions: bindActionCreators(categoryActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPageContainer)

