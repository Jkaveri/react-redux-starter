import 'bootstrap.css'
import 'jquery'
import 'bootstrap'

import React, { PropTypes } from 'react'
import './CoreLayout.scss'
import Header from '../../containers/HeaderContainer'
import Modal from '../../components/Common/Modal'

export const CoreLayout = ({ children, appState }) => (
  <div className='wrapper' style={{ height: '100%' }}>
    <Modal isShowing={!appState.get('isInitialized')} />
    <Header />
    { children }
  </div>
)

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired,
  appState: PropTypes.object.isRequired
}

export default CoreLayout
