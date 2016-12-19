import React from 'react'
import './CoreLayout.scss'

export const CoreLayout = ({ children }) => (
  <div className='container text-center'>
    {children}
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
