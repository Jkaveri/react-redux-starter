import React, { PropTypes } from 'react'

const Model = props => {
  const style = {
    display: props.isShowing ? 'block' : 'none',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: props.zIndex
  }

  return (
    <div style={style}>
      {props.children}
    </div>
  )
}

Model.propTypes = {
  isShowing: PropTypes.bool,
  children: PropTypes.element,
  zIndex: PropTypes.number
}

Model.defaultProps = {
  isShowing: false,
  zIndex: 9999
}

export default Model
