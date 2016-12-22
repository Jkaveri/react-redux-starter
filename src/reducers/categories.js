import createReducer from './createReducer'
import { CATEGORIES_FETCHED } from '../actions/categories'
import Immutable from 'immutable'
import R from 'ramda'

const initialState = Immutable.fromJS({})
const reducer = createReducer({
  [CATEGORIES_FETCHED]: (prevState = initialState, action) => {
    const indexedById = R.indexBy(R.prop('id'), action.categories)
    return prevState.merge(indexedById)
  }
}, initialState)

export default reducer
