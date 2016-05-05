import PouchDb from 'pouchdb'
import PouchMiddleware from 'pouch-redux-middleware'
PouchDb.plugin(require('pouchdb-authentication'))
PouchDb.debug.disable()

import { AUTHENTICATION_STATE } from 'routes/Authentication/modules/authentication'
const { AUTHENTICATED, UNAUTHENTICATED } = AUTHENTICATION_STATE

const installPouchMiddleware = (state) => {
  state.middleware = [
    // PouchMiddleware({
    //   path: '/projects',
    //   db: state.local,
    //   actions: {
    //   }
    // })
  ]
}

const setupSync = (url, state) => (user) => {
  state.local = PouchDb(user.name + '_' + user.companyId)
  state.remote = PouchDb(url + '/company_' + user.companyId)
  state.syncHandle = state.local.sync(state.remote, { live: true, retry: true })
}

const tearDownDb = (state) => {
  state.syncHandle.on('complete', () => {
    state.local.destroy() // Do not store local data when logging out!
    delete state.local
    delete state.remote
    console.debug('Destroyed db')
  })
  state.syncHandle.cancel()
}

const tearDown = (state) => () => {
  if (state.syncHandle) {
    tearDownDb(state)
  }
}

export const createCompanyDbMiddleware = (url, dispatch) => {

  let state = {
    local: undefined,
    remote: undefined,
    syncHandle: undefined,
    middleware: []
  }

  const actions = {
    [AUTHENTICATED]: () =>  {
      setupSync(url, state)
      installPouchMiddleware(state)
    },
    [UNAUTHENTICATED]: tearDown(state)
  }

  return (store) => (next) => (action) => {
    const payload = action.payload
    const hookAction = actions[action.type]
    if (hookAction) {
      hookAction(payload)
    }
    state.middleware.map((mw) => mw(store)(next)(action))
    next(action)
  }
}
