/* @flow */

import React from 'react'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import Col from 'react-bootstrap/lib/Col'
import PureInput from './PureInput'

type Props = {
  street: string,
  city: string,
  zipCode: string
}

class AddressForm extends React.Component {
  props: Props

  shouldComponentUpdate = (nextProps) => (
    this.props.street !== nextProps.street ||
    this.props.city !== nextProps.city ||
    this.props.zipCode !== nextProps.zipCode
  )

  render = () => {
    const { street, city, zipCode } = this.props

    return (
      <div>
        <FormGroup>
          <ControlLabel className='col-xs-4'>Street</ControlLabel>
          <Col xs={8}>
            <PureInput name='street' type='text' field={street} title={street.error} />
          </Col>
        </FormGroup>

        <FormGroup>
          <ControlLabel className='col-xs-4'>City</ControlLabel>
          <Col xs={8}>
            <PureInput name='city' type='text' field={city} title={city.error}/>
          </Col>
        </FormGroup>

        <FormGroup>
          <ControlLabel className='col-xs-4'>Zip code</ControlLabel>
          <Col xs={8}>
            <PureInput name='zipCode' type='text' field={zipCode} title={zipCode.error}/>
          </Col>
        </FormGroup>

      </div>
    )
  }
}

export default AddressForm
