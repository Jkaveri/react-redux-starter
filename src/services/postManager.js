import Q from 'q'
import config from '../config'
import data from './data.json'
import R from 'ramda'
import { info } from '~/utils/logger'
const delay = config.simulate_network_delay

const findByCategoryId = (id, list) => R.filter(R.propEq('categoryId', id), list)
const filterByKeyword = (keyword, list) => R.filter(
  (val) =>
    R.isEmpty(keyword) ||
    R.test(new RegExp(keyword, 'im'), val.content)
)(list)

const fetchList = () => {
  const deferred = Q.defer()

  setTimeout(() => {
    deferred.resolve(data.posts)
  }, delay)

  return deferred.promise
}

const fetchPostsByCategoryId = (id) => {
  const deferred = Q.defer()

  setTimeout(() => {
    const posts = findByCategoryId(id, data.posts)
    deferred.resolve(posts)
  }, delay)

  return deferred.promise
}

const search = (keyword) => {
  return new Q.Promise((resolve) => {
    setTimeout(() => {
      const posts = filterByKeyword(keyword, data.posts)
      info('search result', posts)
      resolve(posts)
    }, delay)
  })
}

export const apiResources = {
  fetchList,
  fetchPostsByCategoryId,
  search
}

export default {
  findByCategoryId
}
