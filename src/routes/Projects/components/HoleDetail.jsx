/* @flow */

import React from 'react'

import type { Hole } from '../interfaces'

import { Link } from 'react-router'
import Button from 'react-bootstrap/lib/Button'
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import ProjectDetail from './ProjectDetail'
import TagInput from './TagInput'

const HoleDetail = (props: Hole) => {
  const { index, kind, depth, tags  } = props

  return (
    <tr>
      <td>
        <strong># {index}</strong>
      </td>
      <td>
        {kind}
      </td>
      <td>
        {depth}
      </td>
      <td>
        <TagInput field={{ value: tags }} readOnly />
      </td>
    </tr>
  )
}

export default HoleDetail
