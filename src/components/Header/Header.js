import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'
import LogoutLink from 'routes/Authentication'

export const Header = () => (
  <div>
    <h1>React Redux Starter Kit</h1>
    <IndexLink to='/' activeClassName={classes.activeRoute}>
      Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName={classes.activeRoute}>
      Counter
    </Link>
    <Link to='/login' activeClassName={classes.activeRoute}>
      Login
    </Link>
    <Link to='/signup/103156c1078bb91a0b45a1b7b300027a' activeClassName={classes.activeRoute}>
      Signup
    </Link>
  </div>
)

export default Header
