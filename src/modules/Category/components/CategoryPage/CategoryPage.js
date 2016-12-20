import React, { PropTypes } from 'react'

const CategoryPage = (props) => {
  const { categories } = props

  let categoryList = categories.map((cat) => (<li key={cat.id}>{cat.name}</li>))

  return (
    <div>
      <h1>Category Page</h1>
      <ul>
        {categoryList}
      </ul>
    </div>
  )
}

CategoryPage.propTypes = {
  categories: PropTypes.array.isRequired
}

export default CategoryPage
