import config from '../config'
import R from 'ramda'
import data from './data.json'
const categories = data.categories
const delay = config.simulate_network_delay

const findById = (id) => R.find(R.propEq('id', id))

export const apiResources = {
  getList () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categories)
      }, delay)
    })
  },

  getSingle (id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(findById(id)(categories))
      }, delay)
    })
  }
}

export default {
  /**
   * @param slug {string}
   * @param categories {Immutable.Seq}
   * @returns {Immutable.Map}
   */
  findBySlug (slug, categories) {
    return categories.find((cat) => cat.get('slug') === slug)
  }
}
