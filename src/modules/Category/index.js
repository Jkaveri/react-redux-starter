export default (store) => ({
  path: '/category(/:category)',
  getComponent: (nextState, cb) => {
    require.ensure([], (require) => {
      // import component.
      const CategoryPageContainer = require('./containers/CategoryPageContainer').default
      cb(null, CategoryPageContainer)
    }, 'category')
  }
})
