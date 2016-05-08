import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { authenticationMiddleware } from 'routes/Authentication/middleware'
import { checkAuthState } from 'routes/Authentication'

import thunk from 'redux-thunk'
import reducers from './reducers'
import { remote, createCompanyDbMiddleware } from './database'

export default (initialState = {}, history) => {

  const url = 'https://localhost:6984'

  const authMiddleware = authenticationMiddleware(url, (action) => store.dispatch(action))
  const companyDbMiddleware = createCompanyDbMiddleware(url)

  let middleware = applyMiddleware(
    thunk,
    authMiddleware,
    companyDbMiddleware,
    routerMiddleware(history)
  )

  // Use DevTools chrome extension in development
  if (__DEBUG__) {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
      middleware = compose(middleware, devToolsExtension())
    }
  }

  const store = createStore(reducers(), initialState, middleware)

  store.asyncReducers = {}

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default

      store.replaceReducer(reducers)
    })
  }

  store.dispatch(checkAuthState())

  return store
}
