import initialState from './initialState.json'
import Immutable from 'immutable'
import R from 'ramda'
let _cached = null
export default (key) => {
  if (_cached === null) {
    const keyToImmutable = R.mapObjIndexed((map) => Immutable.fromJS(map))
    if (window.__initialState__) {
      _cached = keyToImmutable(window.__initialState__)
    } else {
      _cached = keyToImmutable(initialState)
    }
  }

  return R.isEmpty(key) ? _cached : _cached[key]
}
