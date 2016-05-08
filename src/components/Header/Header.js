import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'
import NavMenu from 'containers/NavMenuContainer'

import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import IndexLinkContainer from 'react-router-bootstrap/lib/IndexLinkContainer'
import { RequiresAuthentication } from 'routes/Authentication'

export const Header = () => {

  const handleSelect = (evt) => {
    event.preventDefault()
  }

  return (
    <Nav bsStyle='tabs' activeKey={1} onSelect={handleSelect}>
      <IndexLinkContainer to='/'>
        <NavItem eventKey={1}>Borrkoll</NavItem>
      </IndexLinkContainer>
      <RequiresAuthentication>
        <IndexLinkContainer to='/projects'>
          <NavItem eventKey={2}>Projects</NavItem>
        </IndexLinkContainer>
      </RequiresAuthentication>
      <NavMenu />
    </Nav>
  )
}

export default Header
