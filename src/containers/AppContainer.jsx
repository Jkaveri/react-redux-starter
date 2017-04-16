import React, { Component, PropTypes } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next' // as we build ourself via webpack
import i18n from '../i18n'

class AppContainer extends Component {
  static propTypes = {
    rootRoute: PropTypes.node.isRequired,
    store: PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { rootRoute, store } = this.props

    return (
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <div style={{ height: '100%' }}>
            <Router children={rootRoute} />
          </div>
        </I18nextProvider>
      </Provider>
    )
  }
}

export default AppContainer
