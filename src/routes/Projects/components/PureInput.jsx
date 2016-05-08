/* @flow */

import React, { Component, PropTypes } from 'react'

import FormControl from 'react-bootstrap/lib/FormControl'

type Props = {
  componentClass: Component
}

class PureInput extends Component {
  props: Props

  shouldComponentUpdate = (nextProps) => {
    return this.props.field !== nextProps.field
  }

  render = () => {
    const { field, ...rest } = this.props
    return <this.props.componentClass {...field} {...rest}/>
  }
}

PureInput.propTypes = {
  field: PropTypes.object.isRequired
}

PureInput.defaultProps = {
  componentClass: FormControl
}

export default PureInput
