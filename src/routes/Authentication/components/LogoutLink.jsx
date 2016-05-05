import React from 'react'

type Props = {
  onLogout: Function,
  children: Node
}

const LogoutLink = (props: Props) => {
  const { children, onLogout, ...rest } = props

  return React.cloneElement(React.Children.only(children), Object.assign({}, rest, {
    onClick: onLogout
  }))
}

export default LogoutLink
