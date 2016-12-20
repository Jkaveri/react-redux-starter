import categoryService from './category'
import Q from 'q'

const init = () => Q.all([categoryService.getList()]).then((data) => ({
  categories: data[0]
}))

export default {
  init
}
