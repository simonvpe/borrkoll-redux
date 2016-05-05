import { routerActions } from 'react-router-redux'
import {
  AUTHENTICATION_LOGIN,
  AUTHENTICATION_SIGNUP,
  AUTHENTICATION_LOGOUT,
  AUTHENTICATION_CHECK_STATE,
  AUTHENTICATION_ERROR,
  AUTHENTICATION_STATE
} from '../modules/authentication'

const { AUTHENTICATED, UNAUTHENTICATED } = AUTHENTICATION_STATE

const errorAction = (err) => ({ type: AUTHENTICATION_ERROR, payload: err })
const loginAction = (user) => ({ type: AUTHENTICATED, payload: user })
const logoutAction = () => ({ type: UNAUTHENTICATED })
const logoutRedirect = () => (dispatch) => dispatch(routerActions.push('/login'))
const loginRedirect = () => (dispatch) => dispatch(routerActions.push('/profile'))

const getUser = (db, dispatch) => (username) => {
  return db.getUser(username, (err, response) => {
    if (err) {
      dispatch(errorAction(err))
      dispatch(logoutAction())
    } else {
      dispatch(loginAction(response))
    }
  })
}

const login = (db, dispatch) => (user) => {
  return db.login(user.email, user.password, (err, response) => {
    if (err) {
      dispatch(errorAction(err))
    } else {
      getUser(db, dispatch)(response.name).then(() => {
        dispatch(loginRedirect())
      })
    }
  })
}

const signup = (db, dispatch) => (user) => {
  return db.signup(user.email, user.password, {
    metadata: {
      companyId: user.companyId
    }
  }, (err, response) => {
    if (err) {
      dispatch(errorAction(err))
      dispatch(logoutAction())
    } else {
      login(db, dispatch)(user)
    }
  })
}

const logout = (db, dispatch) => () => {
  return db.logout((err, response) => {
    if (err) {
      dispatch(errorAction(err))
    } else {
      dispatch(logoutRedirect())
    }
  })
}

const checkAuthState = (db, dispatch) => () => {
  return db.getSession((err, response) => {
    if (err) {
      console.debug(err)
      dispatch(logoutAction())
    } else if (!response.userCtx.name) {
      console.log('No one logged in')
      dispatch(logoutAction())
    } else {
      console.log(response.userCtx.name, 'is logged in.')
      getUser(db, dispatch)(response.userCtx.name)
      dispatch(loginAction(response))
    }
  })
}

const createAuthenticationMiddleware = (db, dispatch) => {
  const actions = {
    [AUTHENTICATION_LOGIN]: login(db, dispatch),
    [AUTHENTICATION_SIGNUP]: signup(db, dispatch),
    [AUTHENTICATION_LOGOUT]: logout(db, dispatch),
    [AUTHENTICATION_CHECK_STATE]: checkAuthState(db, dispatch)
  }

  return (store) => (next) => (action) => {
    const payload = action.payload
    const hookAction = actions[action.type]
    if (hookAction) {
      hookAction(payload)
    }
    return next(action)
  }
}

export default createAuthenticationMiddleware
