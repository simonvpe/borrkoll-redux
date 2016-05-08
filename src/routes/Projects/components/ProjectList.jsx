/* @flow */

import React from 'react'

import type { Project } from '../interfaces'

import { Link } from 'react-router'
import ProjectListItem from './ProjectListItem'
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer'

import Button from 'react-bootstrap/lib/Button'

type Props = {
  user: Object,
  projects: Array<Project>
}

const ProjectList = (props: Props) => {
  const { projects, children } = props
  return (
    <div>
      <p>PROJECTS</p>
      <LinkContainer to='/projects/create'>
        <Button>Create</Button>
      </LinkContainer>
      {children}
      {projects.map((project) => <ProjectListItem project={project} />)}
    </div>
  )
}

export default ProjectList
