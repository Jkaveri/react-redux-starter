import config from '../config'
import R from 'ramda'
import data from './data.json'

const categories = data.categories
const delay = config.simulate_network_delay

const findById = (id) => R.find(R.propEq('id', id))

export const getList = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(categories)
    }, delay)
  })
}

export const getSingle = (id) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(findById(id)(categories))
  }, delay)
})

export default {
  getList,
  getSingle
}
