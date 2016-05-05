import { requireAuth } from 'routes/Authentication'


export const ProfileRoute = (store) => ({
  path: 'profile',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Profile = require('./containers/ProfilePageContainer').default
      cb(null, Profile)
    }, 'profile')
  },
  onEnter: requireAuth(store)
})
