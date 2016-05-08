/* @flow */

import React from 'react'

import type { Contact } from '../interfaces'

import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import InputGroup from 'react-bootstrap/lib/InputGroup'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import Col from 'react-bootstrap/lib/Col'
import Button from 'react-bootstrap/lib/Button'
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger'
import Tooltip from 'react-bootstrap/lib/Tooltip'
import PureInput from './PureInput'

type Props = {
  kind: string,
  value: string,
  idx: number,
  onRemove: Function
}

class ContactForm extends React.Component {
  props: Props

  shouldComponentUpdate = (nextProps) => (
    this.props.kind !== nextProps.kind ||
    this.props.value !== nextProps.value
  )

  render = () => {
    const { onRemove, idx, kind, value } = this.props

    let label
    switch (kind.value) {
      case 'email': label = 'E-mail'; break
      case 'phone': label = 'Phone'; break
      default: label = 'unknown'
    }

    const removeTooltip = <Tooltip><strong>Remove</strong></Tooltip>

    return (
      <div>
        <FormGroup>
          <ControlLabel className='col-xs-4'>{label} #{idx}</ControlLabel>
          <Col xs={8}>
            <InputGroup>

              <InputGroup.Addon>
                {kind.value === 'email' ? '@' : <Glyphicon glyph='earphone'/>}
              </InputGroup.Addon>

              <PureInput name='value' type='text' field={value} title={value.error}/>

              <InputGroup.Button>
                <OverlayTrigger placement="right" overlay={removeTooltip}>
                  <Button className='btn btn-danger' onClick={onRemove}>
                    <Glyphicon glyph='trash'/>
                  </Button>
                </OverlayTrigger>
              </InputGroup.Button>

            </InputGroup>
          </Col>
        </FormGroup>
      </div>
    )
  }
}

export default ContactForm

