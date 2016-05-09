/* @flow */

import React from 'react'
import { connect } from 'react-redux'
import type User from '../interfaces'

type Props = {
  user: User,
  children: Node
}

class RequiresAuthentication extends React.Component {
  props: Props

  render = () => this.props.user ? this.props.children : null

}

RequiresAuthentication.propTypes = {
  user: React.PropTypes.object
}

const mapActionCreators = {
}

const mapStateToProps = (state) => ({
  user: state.auth.user
})

export default connect(mapStateToProps, mapActionCreators)(RequiresAuthentication)
