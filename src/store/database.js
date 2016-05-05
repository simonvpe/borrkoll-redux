import PouchDb from 'pouchdb'

import { AUTHENTICATION_STATE } from 'routes/Authentication/modules/authentication'
const { AUTHENTICATED, UNAUTHENTICATED } = AUTHENTICATION_STATE

export const REMOTE_URL = 'https://localhost:6984'

PouchDb.plugin(require('pouchdb-authentication'))
export const remote = PouchDb(REMOTE_URL, { skipSetup: true })

const setupDatabase = (state) => (user) => {
  state.local = PouchDb(user.name + '_' + user.companyId)
  state.remote = PouchDb(REMOTE_URL + '/company_' + user.companyId)
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

export const createCompanyDbMiddleware = (dispatch) => {

  let state = {}

  const actions = {
    [AUTHENTICATED]: setupDatabase(state),
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
