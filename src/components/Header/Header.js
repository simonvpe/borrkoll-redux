import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'
import { NavMenu } from 'routes/Authentication'

import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import IndexLinkContainer from 'react-router-bootstrap/lib/IndexLinkContainer'

export const Header = () => {

  const handleSelect = (evt) => {
    event.preventDefault()
  }

  return (
    <Nav bsStyle='tabs' activeKey={1} onSelect={handleSelect}>
      <IndexLinkContainer to='/'>
        <NavItem eventKey={1}>Borrkoll</NavItem>
      </IndexLinkContainer>
      <NavMenu />
    </Nav>
  )
}

export default Header
