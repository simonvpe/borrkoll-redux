/* @flow */

import React, { Component, PropTypes } from 'react'
import PureInput from './PureInput'
import InputGroup from 'react-bootstrap/lib/InputGroup'
import InputGroupAddon from 'react-bootstrap/lib/InputGroupAddon'

class DepthInput extends Component {

  shouldComponentUpdate = (nextProps) => {
    return this.props.field !== nextProps.field
  }

  render = () => {
    const { field, ...rest } = this.props
    return (
      <InputGroup>
        <PureInput field={field} {...rest} />
        <InputGroupAddon>m</InputGroupAddon>
      </InputGroup>
    )
  }
}

export default DepthInput
