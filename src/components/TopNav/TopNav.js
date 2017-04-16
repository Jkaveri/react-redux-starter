import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'
import Immutable from 'immutable'
import { translate } from 'react-i18next'

const TopNav = (props) => {
  const { categories, t } = props
  let categoryList

  if (categories.size > 0) {
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
          <a className='navbar-brand' href='#'>{t('common:hello')}</a>
        </div>
        <div id='navbar' className='navbar-collapse collapse'>
          <ul className='nav navbar-nav'>
            <li className='active'><Link to='/'>{t('home')}</Link></li>
            {categoryList}
          </ul>
        </div>{/* /.nav-collapse */}
      </div>
    </nav>
  )
}

TopNav.propTypes = {
  categories: PropTypes.instanceOf(Immutable.Seq),
  t: PropTypes.func
}

export default translate(['topnav'])(TopNav)
