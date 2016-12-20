import React, { PropTypes } from 'react'
import R from 'ramda'
import { Link } from 'react-router'
import Immutable from 'immutable'

const isNullOrEmpty = R.either(R.isEmpty, R.isNil)
const TopNav = (props) => {
  const { categories } = props
  let categoryList

  if (!isNullOrEmpty(categories)) {
    categoryList = categories.map(cat => (
      <li key={cat.get('id')}>
        <Link to={'/category/' + cat.get('slug')}>{cat.get('name')}</Link>
      </li>))

    categoryList = (
      <li className='dropdown'>
        <a href='javascript:void(0);'
          className='dropdown-toggle'
          data-toggle='dropdown'
          role='button'
          aria-haspopup='true'
          aria-expanded='false'>Categories
        </a>
        <ul className='dropdown-menu'>
          {categoryList}
        </ul>
      </li>)
  }

  return (
    <nav className='navbar navbar-default navbar-static-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#navbar'
            aria-expanded='false'
            aria-controls='navbar'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar' />
            <span className='icon-bar' />
            <span className='icon-bar' />
          </button>
          <a className='navbar-brand' href='#'>Project name</a>
        </div>
        <div id='navbar' className='navbar-collapse collapse'>
          <ul className='nav navbar-nav'>
            <li className='active'><a href='#'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#contact'>Contact</a></li>
            {categoryList}
          </ul>
          <ul className='nav navbar-nav navbar-right'>
            <li><a href='../navbar/'>Default</a></li>
            <li className='active'><a href='./'>Static top <span className='sr-only'>(current)</span></a></li>
            <li><a href='../navbar-fixed-top/'>Fixed top</a></li>
          </ul>
        </div>{/* /.nav-collapse */}
      </div>
    </nav>
  )
}

TopNav.propTypes = {
  categories: PropTypes.instanceOf(Immutable.Seq)
}

export default TopNav
