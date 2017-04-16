import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { actions as appActions } from '../actions/appState'
import { connect } from 'react-redux'
import CoreLayout from '../layouts/CoreLayout'

class LayoutContainer extends Component {
  static propTypes = {
    appActions: PropTypes.object,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    appState: PropTypes.object.isRequired
  }

  componentDidMount () {
    this.props.appActions.init()
  }

  render () {
    return (
      <CoreLayout appState={this.props.appState}>
        {this.props.children}
      </CoreLayout>
    )
  }
}

const mapStateToProps = (state) => ({
  appState: state.appState
})

const mapDispatchToProps = (dispatch) => ({
  appActions: bindActionCreators(appActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer)
