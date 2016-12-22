import Q from 'q'
import config from '../config'
import data from './data.json'
import R from 'ramda'
const delay = config.simulate_network_delay

const findByCategoryId = (id, list) => R.filter(R.propEq('categoryId', id), list)

export const fetchList = () => {
  const deferred = Q.defer()

  setTimeout(() => {
    deferred.resolve(data.posts)
  }, delay)

  return deferred.promise
}

export const fetchPostsByCategoryId = (id) => {
  const deferred = Q.defer()

  setTimeout(() => {
    const posts = findByCategoryId(id, data.posts)
    deferred.resolve(posts)
  }, delay)

  return deferred.promise
}

export default {
  fetchList,
  fetchPostsByCategoryId
}
