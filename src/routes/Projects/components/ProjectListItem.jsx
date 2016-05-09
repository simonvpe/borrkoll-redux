/* @flow */

import React from 'react'

import type { Project } from '../interfaces'

import { Link } from 'react-router'
import Button from 'react-bootstrap/lib/Button'
import Col from 'react-bootstrap/lib/Col'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import ProjectDetail from './ProjectDetail'

type Props = {
  project: Project,
  onEdit: Function,
  onRemove: Function
}

const ProjectListItem = (props: Props) => {
  const { project, onEdit, onRemove  } = props

  return (
    <tr>
      <td>
        <ProjectDetail {...project} />
      </td>
      <td>
        <Button className='btn btn-success' onClick={onEdit}><Glyphicon glyph='pencil'/></Button>
      </td>
      <td>
        <Button className='btn btn-danger' onClick={onRemove}><Glyphicon glyph='trash'/></Button>
      </td>
    </tr>
  )
}

export default ProjectListItem
