import PouchDb from 'pouchdb'
PouchDb.plugin(require('pouchdb-authentication'))
PouchDb.debug.disable()

import { AUTHENTICATION_STATE } from 'routes/Authentication/modules/authentication'
const { AUTHENTICATED, UNAUTHENTICATED } = AUTHENTICATION_STATE

const setupDatabase = (url, state) => (user) => {
  state.local = PouchDb(user.name + '_' + user.companyId)
  state.remote = PouchDb(url + '/company_' + user.companyId)
  state.syncHandle = state.local.sync(state.remote, { live: true, retry: true })
}

const teardownDatabase = (state) => () => {
  if (state.syncHandle) {
    state.syncHandle.on('complete', () => {
      state.local.destroy() // Do not store local data when logging out!
      delete state.local
      delete state.remote
      console.debug('Destroyed db')
    })
    state.syncHandle.cancel()
  }
}

export const createCompanyDbMiddleware = (url, dispatch) => {

  let state = {}

  const actions = {
    [AUTHENTICATED]: setupDatabase(url, state),
    [UNAUTHENTICATED]: teardownDatabase(state)
  }

  return (store) => (next) => (action) => {
    const payload = action.payload
    const hookAction = actions[action.type]
    if (hookAction) {
      hookAction(payload)
    }
    next(action)
  }
}
