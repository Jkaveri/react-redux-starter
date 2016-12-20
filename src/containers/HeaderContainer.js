import Header from '../components/Header'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  let categories = state.categories.valueSeq()
  return {
    categories
  }
}

export default connect(mapStateToProps)(Header)
