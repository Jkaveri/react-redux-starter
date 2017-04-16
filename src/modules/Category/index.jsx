import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Bundle from 'components/Common/Bundle'
import CategoryPageContainerLoad from 'bundle-loader?lazy!./containers/CategoryPageContainer'

const LazyCategoryPageContainer = (props) => (
  <Bundle load={CategoryPageContainerLoad}>
    {
      (CategoryPageContainer) => CategoryPageContainer ? <CategoryPageContainer {...props} /> : (<h1>Loading...</h1>)
    }
  </Bundle>
)

class CategoryRoute extends Component {
  render () {
    return (<Route path='/category/:slug' component={LazyCategoryPageContainer} />)
  }
}

export default CategoryRoute
