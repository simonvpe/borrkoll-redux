/* @flow */

import React from 'react'

import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import Button from 'react-bootstrap/lib/Button'
import Col from 'react-bootstrap/lib/Col'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import DropdownButton from 'react-bootstrap/lib/DropdownButton'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import Row from 'react-bootstrap/lib/Row'

import PureInput from './PureInput'
import AddressForm from './AddressForm'
import ContactForm from './ContactForm'

type Props = {
  firstName: string,
  lastName: string,
  address: Object,
  contacts: Array<Object>
}

class CustomerForm extends React.Component {
  props: Props

  shouldComponentUpdate = (nextProps) => {
    return true // Improve this for performance
//    return this.props.firstName !== nextProps.firstName ||
//    this.props.lastName !== nextProps.lastName ||
//    this.props.address !== nextProps.address ||
//    this.props.contacts !== nextProps.contacts
  }

  addPhoneContact = (evt) => {
    evt.preventDefault()
    this.props.contacts.addField({
      kind: 'phone',
      value: ''
    })
  }

  addEmailContact = (evt) => {
    evt.preventDefault()
    this.props.contacts.addField({
      kind: 'email',
      value: ''
    })
  }

  render = () => {
    const { firstName, lastName, address, contacts } = this.props
    let contactsWithIdx = contacts.map((contact, idx) => ({ contact, idx }))
    const emails = contactsWithIdx.filter((contact) => contact.contact.kind.value === 'email')
    const phones = contactsWithIdx.filter((contact) => contact.contact.kind.value === 'phone')

    return (
      <div>
        <FormGroup>
          <ControlLabel className='col-xs-4'>First name</ControlLabel>
          <Col xs={8}>
            <PureInput name='firstName' type='text' field={firstName} title={lastName.error}/>
          </Col>
        </FormGroup>

        <FormGroup>
          <ControlLabel className='col-xs-4'>Last name</ControlLabel>
          <Col xs={8}>
            <PureInput name='lastName' type='text' field={lastName} title={lastName.error}/>
          </Col>
        </FormGroup>

        <AddressForm {...address}/>

        {
          phones.map((contact, idx) => (
            <ContactForm idx={idx + 1}
                         key={idx}
                         onRemove={() => contacts.removeField(contact.idx)}
                         {...contact.contact} />
          ))
        }
            {
              emails.map((contact, idx) => (
                <ContactForm idx={idx + 1}
                             key={idx}
                             onRemove={() => contacts.removeField(contact.idx)}
                             {...contact.contact} />
              ))
            }
        
                <FormGroup>
             <div style={{width:'100%'}}/>
          <DropdownButton className='btn btn-success' title='Add contact'>

            <MenuItem eventKey={1} onClick={this.addPhoneContact}>
              <Glyphicon glyph='earphone'/> Phone
            </MenuItem>

            <MenuItem eventKey={2} onClick={this.addEmailContact}>
              @ E-mail
            </MenuItem>

          </DropdownButton>
        </FormGroup>
      </div>
    )
  }
}

export default CustomerForm

