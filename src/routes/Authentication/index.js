export { login, logout, signup, checkAuthState, reducer } from './modules/authentication'
export { default as LogoutLink } from './containers/LogoutLinkContainer'
export { default as RequiresAuthentication } from './containers/RequiresAuthenticationContainer'

export const LoginRoute = (store) => ({
  path: 'login',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Login = require('./containers/LoginFormContainer').default

      /*  Return getComponent   */
      cb(null, Login)

    /* Webpack named bundle   */
    }, 'login')
  }
})

export const SignupRoute = (store) => ({
  path: 'signup/:companyId',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Signup = require('./containers/SignupFormContainer').default

      /*  Return getComponent   */
      cb(null, Signup)

    /* Webpack named bundle   */
    }, 'signup')
  }
})

export const requireAuth = (store) => (nextState, replace, asyncTransition) => {
  // TODO: If a user enters the URL directly the auth check will fail since
  // it is delayed in middleware. Not sure how to solve this yet.
  if (!store.getState().auth.user) {
    console.debug('Not logged in. Redirecting to /login')
    console.debug(store.getState())
    replace('/login')
  }
  asyncTransition()
}
