import { connect } from 'react-redux'
import { saveData } from '../actions/main'
import Home from '../components/home'

function mapStateToProps (state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    saveData: (data) => {
      dispatch(saveData(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)