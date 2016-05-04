import { connect } from 'react-redux'
import { signup } from '../modules/authentication'

import SignupForm from '../components/SignupForm'

const mapActionCreators = {
  onSubmit: signup
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, mapActionCreators)(SignupForm)
