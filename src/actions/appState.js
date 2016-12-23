import appInitializer from '../services/appInitializer'
import { actions as categoryActions } from './categories'
import actionCreator from './actionCreator'

// ========================================
// ACTION TYPES
// ========================================

/**
* @function APP_INITIALIZED
* @param  {string} export const APP_INITIALIZED = 'APP_INITIALIZED' action type name
* @return {string} action name when app is initialized
*/
export const APP_INITIALIZED = 'APP/INITIALIZED'

export const APP_SEARCH = 'APP/SEARCH'

/**
* @function init app
* @return {type} {description}
*/
// export const init = () => (dispatch, getState) => {
//   return dispatch((dispatch2) => appInitializer.init())
//     .then((data) => dispatch(categoryActions.categoriesFetched(data.categories)))
//     .then((data) => {
//       return dispatch(appInitialized({
//         isInitialized: true
//       }))
//     })
// }

export const init = () => actionCreator([
  (dispatch) => {
    return appInitializer.init().then(
      (data) => dispatch(categoryActions.categoriesFetched(data.categories))
    )
  },
  (dispatch, getState, data) => {
    return dispatch(appInitialized({
      isInitialized: true
    }))
  }
])

export const appInitialized = (appState) => ({
  type: APP_INITIALIZED,
  appState
})

export const actions = {
  init,
  appInitialized
}
