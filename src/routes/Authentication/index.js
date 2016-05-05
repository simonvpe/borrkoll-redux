export { login, logout, signup, checkAuthState, reducer } from './modules/authentication'
export { default as LogoutLink } from './containers/LogoutLinkContainer'
export { default as NavMenu } from './containers/NavMenuContainer'

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

export const ProfileRoute = (store) => ({
  path: 'profile',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Profile = require('./containers/ProfilePageContainer').default
      cb(null, Profile)
    }, 'profile')
  }
})

export const requireAuth = (db) => (nextState, replace, asyncTransition) => {
  return db.getSession((err, response) => {
    if (err) {
      console.debug(err)
      replace('/login')
    } else if (!response.userCtx.name) {
      console.debug('No one logged in', response)
      replace('/login')
    } else {
      console.debug(response.userCtx.name, 'is logged in.')
    }
    asyncTransition()
  })
}
