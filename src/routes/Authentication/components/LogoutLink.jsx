import React from 'react'

type Props = {
  onLogout: Function
}

const LogoutLink = (props: Props) => (
  <a onClick={onLogout}>
    {props.children}
  </a>
)

export default LogoutLink
