/* @flow */

import React from 'react';
import { reduxForm } from 'redux-form';
import Form from 'react-bootstrap/lib/Form'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import Button from 'react-bootstrap/lib/Button'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Textarea from 'react-textarea-autosize'
import DropdownButton from 'react-bootstrap/lib/DropdownButton'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import Datagrid from 'react-datagrid'
import Table from 'react-bootstrap/lib/Table'

import TagInput from './TagInput'
import PureInput from './PureInput'
import CustomerForm from './CustomerForm'
import AddressForm from './AddressForm'
import HoleForm from './HoleForm'

export const FIELDS = [
  '_id',
  'customer.firstName',
  'customer.lastName',
  'customer.address.street',
  'customer.address.city',
  'customer.address.zipCode',
  'customer.contacts[].kind',
  'customer.contacts[].value',
  'address.street',
  'address.city',
  'address.zipCode',
  'holes[].kind',
  'holes[].depth',
  'holes[].notes[].username',
  'holes[].notes[].date',
  'holes[].notes[].text',
  'holes[].tags',
  'notes[].username',
  'notes[].date',
  'notes[].text',
  'tags'
]

type Props = {
  handleSubmit: Function,
  fields: Object
}

class ProjectForm extends React.Component {
  props: Props
  
  removeHole = (idx) => {
    this.props.fields.holes.removeField(idx)
  }

  addEnergyHole = (evt) => {
    evt.preventDefault()
    this.props.fields.holes.addField({ kind: 'energy' })
  }

  addWaterHole = (evt) => {
    evt.preventDefault()
    this.props.fields.holes.addField({ kind: 'water' })
  }

  render = () => {
    const {
      fields: { _id, customer, address, holes, notes, tags },
      handleSubmit,
      handleDismiss
    } = this.props

    if (this.props.project) {
      console.log("Has project", this.props.project)
    }

    return (
      <Form horizontal onSubmit={handleSubmit}>
        <Row>
          <h1 style={{textAlign: 'left'}}># {_id.value}</h1>
          <TagInput field={tags} onlyUnique />
        </Row>
        <Row>
          <Col className='col-xs-12 col-md-6'>
            <legend>Customer</legend>
            <CustomerForm {...customer}/>
          </Col>
          <Col xs={12} md={6}>
            <legend>Drilling site</legend>
            <AddressForm {...address} />
          </Col>
        </Row>
        <FormGroup>
          <DropdownButton className='btn btn-success' title='Add hole'>

            <MenuItem eventKey={1} onClick={this.addEnergyHole}>
              Energy well
            </MenuItem>

            <MenuItem eventKey={2} onClick={this.addWaterHole}>
              Water well
            </MenuItem>

          </DropdownButton>
        </FormGroup>
        <Table>
          <thead>
            <tr>
              <th className='col-xs-1'>Kind</th>
              <th className='col-xs-2'>Depth</th>
              <th>Tags</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {holes.map((hole, idx) =>
              <HoleForm key={idx} {...hole} onRemove={() => this.removeHole(idx)} />
             )}
          </tbody>
        </Table>
        <Button onClick={handleDismiss}>Cancel</Button>        
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

ProjectForm.propTypes = {
  handleSubmit: React.PropTypes.func,
  fields: React.PropTypes.object.isRequired
}

export default reduxForm(
  {
    form: 'project',
    fields: FIELDS
  }
)(ProjectForm)
