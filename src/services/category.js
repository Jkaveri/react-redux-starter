import config from '../config'
import R from 'ramda'
import data from './data.json'

const categories = data.categories
const delay = config.simulate_network_delay

const findById = (id) => R.find(R.propEq('id', id))

class CategoryService {
  getList () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categories)
      }, delay)
    })
  }

  getSingle (id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(findById(id)(categories))
      }, delay)
    })
  }
}

// singleton categoryService
export default new CategoryService()
