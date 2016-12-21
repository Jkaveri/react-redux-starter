import appInitializer from '../services/appInitializer'
import { actions as categoryActions } from './category'
import Q from 'q'

export const APP_INITIALIZED = 'APP_INITIALIZED'

export const init = () => (dispatch, getState) => {
  return dispatch((dispatch2) => appInitializer.init())
    .then((data) => dispatch(categoryActions.categoriesFetched(data.categories)))
    .then((data) => {
      return dispatch(appInitialized({
        isInitialized: true
      }))
    })
}

export const appInitialized = (appState) => ({
  type: APP_INITIALIZED,
  appState
})

export const actions = {
  init,
  appInitialized
}
