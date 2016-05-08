/* @flow */

import { connect } from 'react-redux'
import { insert, update, nextId } from '../modules/projects'
import { push } from 'react-router-redux'

import ProjectForm from '../components/ProjectForm'

const mapActionCreators = (dispatch, ownProps) => {
  const { params: { id } } = ownProps

  return {
    onSubmit: id
      ? (project) => dispatch(update(project))
      : (project) => {
        const toSubmit = Object.assign({}, project, { _id: nextId() })
        dispatch(insert(toSubmit))
        dispatch(push('/projects'))
      }
  }
}

const mapStateToProps = (state, ownProps) => {
  const { params: { id }, ...rest } = ownProps
  console.log(state)

  return {
    initialValues: {
      _id: id
        ? state.projects.docs.filter((project) => project._id === id)[0]
        : 'New project'
    },
    ...rest
  }
}

export default connect(mapStateToProps, mapActionCreators)(ProjectForm)
