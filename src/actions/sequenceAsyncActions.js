import Q from 'q'
import R from 'ramda'

function thunkFactory (action, data) {
  if (typeof action === 'function') {
    return (dispatch, getState) => {
      return Q.promised(action.bind(null, dispatch, getState, data))()
    }
  }
  return (dispatch) => {
    return Q.promised(() => dispatch(action))()
  }
}

const buildActionTasks = (dispatch, getState) => R.reduce((result, action) => {
  if (result === null) {
    result = dispatch(thunkFactory(action))
  } else {
    result = result.then((data) => dispatch(thunkFactory(action, data)))
  }
  return result
}, null)

/**
* @function sequenceAsyncActions
* @param  {array} actions actions list with can contains 2 types: async promise function, plain action object.
* @return {any} {description}
*/
export default (actions) => (dispatch, getState) => {
  return buildActionTasks(dispatch, getState)(actions)
}
