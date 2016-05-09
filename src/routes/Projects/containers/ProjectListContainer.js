import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { remove } from '../modules/projects'

import ProjectList from '../components/ProjectList'

const mapActionCreators = (dispatch) => ({
  onEditProject: (id) => dispatch(push('/projects/edit/' + id)),
  onRemoveProject: (id) => dispatch(remove(id))
})

const mapStateToProps = (state) => ({
  projects: state.projects.docs
})

export default connect(mapStateToProps, mapActionCreators)(ProjectList)
