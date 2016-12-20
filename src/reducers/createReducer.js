export default (reducerMap, initialState = null) => {
  return (prevState, action) => {
    const { type } = action
    const reducer = reducerMap[type]

    if (typeof reducer !== 'function') {
      if (typeof (prevState) === 'undefined') {
        return initialState
      }

      return prevState
    }
    return reducer(prevState, action)
  }
}
