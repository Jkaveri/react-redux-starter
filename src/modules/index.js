// We only need to import the modules necessary for initial render
import LayoutContainer from '../containers/LayoutContainer'
import Home from './Home'
import Category from './Category'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path        : '/',
  component   : LayoutContainer,
  indexRoute  : Home,
  childRoutes : [
    Category(store)
  ]
})

export default createRoutes
