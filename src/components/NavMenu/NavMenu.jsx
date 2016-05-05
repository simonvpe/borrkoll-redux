import React from 'react'

import NavItem from 'react-bootstrap/lib/NavItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import IndexLinkContainer from 'react-router-bootstrap/lib/IndexLinkContainer'
import LogoutLink from 'routes/Authentication/containers/LogoutLinkContainer'

type Props = {
  user: Object
}

const NavMenu = (props: Props) => {
  const { user } = props

  if (user) {
    return (
      <NavDropdown title={props.user ? 'Profile' : 'Login'} eventKey={100} id='nav-menu'>
        <IndexLinkContainer to='/profile'>
          <MenuItem eventKey='100.1'>Profile</MenuItem>
        </IndexLinkContainer>
        <LogoutLink>
          <MenuItem eventKey='100.2'>Logout</MenuItem>
        </LogoutLink>
      </NavDropdown>
    )
  } else  {
    return (
      <NavItem>
        <IndexLinkContainer to='/login'>
          <MenuItem eventKey='100.3'>Login</MenuItem>
        </IndexLinkContainer>
      </NavItem>
    )
  }
}

export default NavMenu
