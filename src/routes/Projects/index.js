import { injectReducer } from '../../store/reducers'
import { requireAuth } from '../Authentication'

const EditProjectRoute = (store) => ({
  path: 'edit/:id',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const ProjectEdit = require('./containers/ProjectFormContainer').default
      cb(null, ProjectEdit)
    }, 'projects-edit')
  }
})

const CreateProjectRoute = (store) => ({
  path: 'create',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const ProjectEdit = require('./containers/ProjectFormContainer').default

      cb(null, ProjectEdit)
    }, 'projects-edit')
  }
})

export const ProjectsRoute = (store) => ({
  path: 'projects',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Projects = require('./containers/ProjectListContainer').default
      const reducer = require('./modules/projects').reducer
      console.log('Injecting reducer')
      injectReducer(store, { key: 'projects', reducer })

      cb(null, Projects)
    }, 'projects')
  },
  onEnter: requireAuth(store),
  childRoutes: [
    EditProjectRoute(store),
    CreateProjectRoute(store)
  ]
})
