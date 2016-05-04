import { connect } from 'react-redux'
import { login } from '../modules/authentication'

import LoginForm from '../components/LoginForm'

const mapActionCreators = {
  onSubmit: login
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, mapActionCreators)(LoginForm)
