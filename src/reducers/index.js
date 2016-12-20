import combineReducers from './combineReducers'
import locationReducer from './location'
import categoryReducer from '../reducers/categories'
import appState from '../reducers/appState'
import posts from '../reducers/posts'
import user from '../reducers/user'
export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    categories: categoryReducer,
    user,
    posts,
    appState,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
