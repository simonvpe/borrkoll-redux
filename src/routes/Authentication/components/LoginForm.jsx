import React from 'react'
import { reduxForm } from 'redux-form'

import Form from 'react-bootstrap/lib/Form'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import Button from 'react-bootstrap/lib/Button'

class LoginForm extends React.Component {
  render = () => {
    const { fields: { email, password }, handleSubmit } = this.props
    return (
      <Form onSubmit={handleSubmit}>

        <FormGroup controlId='email'>
          <ControlLabel>E-mail</ControlLabel>
          <FormControl type='text' placeholder='Enter your e-mail address...' {...email}/>
        </FormGroup>

        <FormGroup controlId='password'>
          <ControlLabel>Password</ControlLabel>
          <FormControl type='password' placeholder='Enter your password...' {...password}/>
        </FormGroup>

        <Button type='submit'>Login</Button>

      </Form>
    )
  }
}

export default reduxForm({
  form: 'login',
  fields: ['email', 'password']
})(LoginForm)

