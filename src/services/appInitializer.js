import { apiResources } from './categoryManager'
import Q from 'q'

const init = () => Q.all([apiResources.getList()]).then((data) => ({
  categories: data[0]
}))

export default {
  init
}
