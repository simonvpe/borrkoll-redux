import { connect } from 'react-redux'
import { logout } from 'routes/Authentication/modules/authentication'

import { NavMenu } from 'components/NavMenu'

const mapActionCreators = {
  onLogout: logout
}

const mapStateToProps = (state, ownProps) => ({
  user: state.auth.user,
  ...ownProps
})

export default connect(mapStateToProps, mapActionCreators)(NavMenu)
