import Q from 'q'
import R from 'ramda'

function thunkFactory (action) {
  if (typeof action === 'function') {
    return (dispatch, getState) => {
      return Q.promised(action.bind(null, dispatch, getState))()
    }
  }
  return Q.resolve(action)
}

const buildActionTasks = (dispatch, getState) => R.reduce((result, action) => {
  if (result === null) {
    result = dispatch(thunkFactory(action))
  } else {
    result = result.then(() => dispatch(thunkFactory(action)))
  }
  return result
}, null)

/**
* @function actionCreator
* @param  {array} actions actions list with can contains 2 types: async promise function, plain action object.
* @return {any} {description}
*/
export default (actions) => (dispatch, getState) => {
  return buildActionTasks(dispatch, getState)(actions)
}
