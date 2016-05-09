/* @flow */

import React from 'react'

import { Link } from 'react-router'
import Button from 'react-bootstrap/lib/Button'
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import TagInput from './TagInput'

const ProjectDetail = (props: Props) => {
  const { _id, customer, address, tags } = props

  const addressString = `${customer.address.street}, ${customer.address.zipCode}`
  const customerString = `${customer.firstName} ${customer.lastName}, ${addressString}`
  const siteString = `${address.street}, ${address.zipCode}`
  const phones = customer.contacts
                         .filter((c) => c.kind === 'phone')
                         .map((c) => c.value)
  const emails = customer.contacts
                         .filter((c) => c.kind === 'email')
                         .map((c) => c.value)
  console.log("Project", props)
  
  return (
    <Row style={{ textAlign: 'left' }}>
      <Row>
        <Col xs={12} md={2}>
          <strong># {_id}</strong>
        </Col>
        <Col xs={12} md={10}>
          <TagInput field={{ value: tags }} />
        </Col>
      </Row>
    <Row style={{ textAlign: 'left' }}>
      <Col md={6} xs={12}>
        <Row>
          <Col xs={2} style={{ textAlign: 'right'}}><Glyphicon glyph='user' /></Col>
          <Col xs={10}>{customerString}</Col>
        </Row>
        <Row>
          <Col xs={2} style={{ textAlign: 'right'}}><Glyphicon glyph='pushpin' /></Col>
          <Col xs={10}>{siteString}</Col>
        </Row>
      </Col>

      <Col md={6} xs={12}>
        {phones.map((number, idx) => (
          <Row key={idx}>
            <Col xs={2} style={{ textAlign: 'right'}}><Glyphicon glyph='earphone'/></Col>
            <Col xs={10}>{number}</Col>
          </Row>
         ))}
         {emails.map((value, idx) => (
           <Row key={idx}>
             <Col xs={2} style={{ textAlign: 'right'}}><strong>@</strong></Col>
             <Col xs={10}>{value}</Col>
           </Row>
         ))}
      </Col>
    </Row>
    </Row>
  )
}

export default ProjectDetail
