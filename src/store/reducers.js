import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import { reducer as auth } from 'routes/Authentication'

export const reducers = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    router,
    form,
    auth,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(reducers(store.asyncReducers))
}

export default reducers
