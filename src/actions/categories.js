import categoryService from '../services/category'

export const CATEGORIES_FETCHED = 'CATEGORIES_FETCHED'

export const categoriesFetched = (categories) => ({
  type: CATEGORIES_FETCHED,
  categories
})
export const fetchCategories = () => (dispatch) => {
  categoryService.getList().then((categories) => {
    dispatch(categoriesFetched(categories))
  })
}

export const types = {
  CATEGORIES_FETCHED
}

export const actions = {
  fetchCategories,
  categoriesFetched
}
