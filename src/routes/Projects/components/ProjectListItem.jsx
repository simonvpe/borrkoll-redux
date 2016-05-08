/* @flow */

import React from 'react'

import type { Project } from '../interfaces'

import { Link } from 'react-router'
import Button from 'react-bootstrap/lib/Button'

type Props = {
  project: Project
}

const ProjectListItem = (props: Props) => {
  const { project  } = props
  return (
    <div>
      {JSON.stringify(project)}
    </div>
  )
}

export default ProjectListItem
