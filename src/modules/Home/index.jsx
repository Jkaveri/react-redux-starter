import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import HomeView from './containers/HomeViewContainer'

class HomeRoute extends Component {
  render () {
    return (<Route exact path='/' component={HomeView} />)
  }
}

export default HomeRoute
