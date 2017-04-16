// We only need to import the modules necessary for initial render
import React, { Component } from 'react'
import LayoutContainer from '../containers/LayoutContainer'
import { Route } from 'react-router-dom'
import HomeRoute from './Home'
import CategoryRoute from './Category'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export class RootRoute extends Component {
  render () {
    return (
      <LayoutContainer>
        <HomeRoute />
        <CategoryRoute />
      </LayoutContainer>
    )
  }
}

export default RootRoute
