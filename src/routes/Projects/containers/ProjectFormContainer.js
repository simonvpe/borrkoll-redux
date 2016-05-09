/* @flow */

import { connect } from 'react-redux'
import { insert, update, nextId } from '../modules/projects'
import { push } from 'react-router-redux'

import ProjectForm from '../components/ProjectForm'

const mapActionCreators = (dispatch, ownProps) => {
  const { params: { id } } = ownProps

  return {
    onSubmit: id
      ? (project) => {
        dispatch(update(project))
        dispatch(push('/projects'))
      }
      : (project) => {
        const toSubmit = Object.assign({}, project, { _id: nextId() })
        dispatch(insert(toSubmit))
        dispatch(push('/projects'))
      },
    handleDismiss: () => dispatch(push('/projects'))
  }
}

const mapStateToProps = (state, ownProps) => {
  const { params: { id }, ...rest } = ownProps

  let initialValues

  if (id) {
    const project = state.projects.docs.filter((project) => project._id === id)[0]
    initialValues = { ...project }
  } else {
    initialValues = { id: 'New Project' }
  }

  return {
    initialValues,
    ...rest
  }
}

export default connect(mapStateToProps, mapActionCreators)(ProjectForm)
