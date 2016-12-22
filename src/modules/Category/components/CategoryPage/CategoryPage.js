import React, { PropTypes } from 'react'
import Immutable from 'immutable'
import PostsList from '~/components/PostsList'

const CategoryPage = (props) => {
  const { category, posts } = props
  return (
    <div className='container'>
      <h1>{category.get('name')}</h1>
      <hr />
      <PostsList posts={posts} />
    </div>
  )
}

CategoryPage.propTypes = {
  category: PropTypes.instanceOf(Immutable.Map),
  posts: PropTypes.instanceOf(Immutable.Seq)
}

export default CategoryPage
