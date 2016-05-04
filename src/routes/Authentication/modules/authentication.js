import { routerActions } from 'react-router-redux'

export const AUTHENTICATION_LOGIN = 'AUTHENTICATION_LOGIN'
export const AUTHENTICATION_SIGNUP = 'AUTHENTICATION_SIGNUP'
export const AUTHENTICATION_LOGOUT = 'AUTHENTICATION_LOGOUT'
export const AUTHENTICATION_CHECK_STATE = 'AUTHENTICATION_CHECK_STATE'
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR'

export const AUTHENTICATION_STATE = {
  AUTHENTICATED: 'AUTHENTICATED',
  UNAUTHENTICATED: 'UNAUTHENTICATED'
}

const { AUTHENTICATED, UNAUTHENTICATED } = AUTHENTICATION_STATE

export const login = (payload) => ({ type: AUTHENTICATION_LOGIN, payload })
export const signup = (payload) => ({ type: AUTHENTICATION_SIGNUP, payload })
export const logout = () => ({ type: AUTHENTICATION_LOGOUT })
export const checkAuthState = () => ({ type: AUTHENTICATION_CHECK_STATE })

const ACTION_HANDLERS = {
  [AUTHENTICATED]: (state, action) => Object.assign({}, state, {
    user: action.payload
  }),

  [UNAUTHENTICATED]: (state, action) => Object.assign({}, state, {
    user: undefined
  })
}

const INITIAL_STATE = {
  user: undefined
}

export const reducer = (state = INITIAL_STATE, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
