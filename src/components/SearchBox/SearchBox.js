import React, { PropTypes } from 'react'

const SearchBox = props => {
  const { placeholder, onSearch, ...others } = props
  const ENTER = 13
  const onKeyUp = (event) => {
    const keyCode = event.which || event.keyCode
    if (keyCode === ENTER) {
      onSearch(event.target.value, event)
    }
  }
  return (
    <input className='form-control' type='text' placeholder={placeholder} onKeyUp={onKeyUp} {...others} />
  )
}

SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}

SearchBox.defaultProps = {
  placeholder: 'Search...'
}
export default SearchBox
