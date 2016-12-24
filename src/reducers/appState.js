import createReducer from './createReducer'
import R from 'ramda'
import {
  APP_INITIALIZED,
  APP_SEARCH,
  APP_SEARCH_SUCCEED,
  APP_SEARCH_CLEAR
} from '../actions/appState'
import initialStateFactory from '../store/initialStateFactory'

const initialState = initialStateFactory('appState')

export default createReducer({
  [APP_INITIALIZED]: (prevState, action) => {
    return prevState.merge(action.appState)
  },
  [APP_SEARCH]: (prevState, action) => {
    return prevState.merge({
      keyword: action.keyword,
      isShowSearchResult: false,
      isSearching: true
    })
  },
  [APP_SEARCH_SUCCEED]: (prevState, action) => prevState.merge({
    isShowSearchResult: true,
    isSearching: false
  }),
  [APP_SEARCH_CLEAR]: (prevState, action) => prevState.merge({
    keyword: '',
    isShowSearchResult: false,
    isSearching: false
  })
}, initialState)
