import React, { PropTypes } from 'react'
import TopNav from '../TopNav'
import Immutable from 'immutable'
const Header = (props) => {
  return (
    <TopNav categories={props.categories} />
  )
}
Header.propTypes = {
  categories: PropTypes.instanceOf(Immutable.Seq)
}

export default Header
