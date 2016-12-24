import appInitializer from '../services/appInitializer'
import { actions as categoryActions } from './categories'
import sequenceAsyncActions from './sequenceAsyncActions'

// ========================================
// ACTION TYPES
// ========================================

/**
* @function APP_INITIALIZED
* @param  {string} export const APP_INITIALIZED = 'APP_INITIALIZED' action type name
* @return {string} action name when app is initialized
*/
export const APP_INITIALIZED = 'app/initialized'

export const APP_SEARCH = 'app/search'
export const APP_SEARCH_SUCCEED = 'app/search/succeed'
export const APP_SEARCH_CLEAR = 'app/search/clear'

// ==========================================
// ACTION METHODs
// ==========================================

/**
* @function init app
* @return {type} {description}
*/
export const init = () => sequenceAsyncActions([
  (dispatch) => {
    return appInitializer.init().then(
      (data) => dispatch(categoryActions.categoriesFetched(data.categories))
    )
  },
  appInitialized({
    isInitialized: true
  })
])

export const appInitialized = (appState) => ({
  type: APP_INITIALIZED,
  appState
})

export const search = (keyword, searchObject) => ({
  type: APP_SEARCH,
  keyword,
  searchObject
})

export const searchSucceed = (keyword, searchObject, result) => ({
  type: APP_SEARCH_SUCCEED,
  keyword,
  searchObject,
  result
})

export const clearSearch = (searchObject) => ({
  type: APP_SEARCH_CLEAR
})

export const actions = {
  init,
  appInitialized,
  search,
  searchSucceed,
  clearSearch
}
