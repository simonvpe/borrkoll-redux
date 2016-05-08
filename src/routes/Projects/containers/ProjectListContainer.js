import { connect } from 'react-redux'

import ProjectList from '../components/ProjectList'

const mapActionCreators = {
  
}

const mapStateToProps = (state) => ({
  projects: state.projects.docs
})

export default connect(mapStateToProps, mapActionCreators)(ProjectList)
