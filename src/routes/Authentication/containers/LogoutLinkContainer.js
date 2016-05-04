import { connect } from 'react-redux'
import { logout } from '../modules/authentication'

import LogoutLink from '../components/LogoutLink'

const mapActionCreators = {
  onLogout: logout
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, mapActionCreators)(LogoutLink)
