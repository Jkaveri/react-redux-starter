import Q from 'q'
import config from '../config'
import data from './data.json'

const delay = config.simulate_network_delay

export const fetchList = () => {
  const deferred = Q.defer()

  setTimeout(() => {
    deferred.resolve(data.posts)
  }, delay)

  return deferred.promise
}

export default {
  fetchList
}
