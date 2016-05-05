import { connect } from 'react-redux'

import ProfilePage from '../components/ProfilePage'

const mapActionCreators = {

}

const mapStateToProps = (state) => ({
  user: state.auth.user
})

export default connect(mapStateToProps, mapActionCreators)(ProfilePage)
