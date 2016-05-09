/* @flow */

import React from 'react'

import type { Project } from '../interfaces'

import { Link } from 'react-router'
import ProjectListItem from './ProjectListItem'
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer'
import Table from 'react-bootstrap/lib/Table'

import Button from 'react-bootstrap/lib/Button'

type Props = {
  user: Object,
  projects: Array<Project>,
  onEditProject: Function,
  onRemoveProject: Function
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
      <Table>
        <thead>
          <tr>
            <th className='col-xs-10'/>
            <th className='col-xs-1'>Edit</th>
            <th className='col-xs-1'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <ProjectListItem
              project={project}
              onEdit={() => props.onEditProject(project._id)}
              onRemove={() => props.onRemoveProject(project._id)}
            />
           ))}
        </tbody>
      </Table>
    </div>
  )
}

export default ProjectList
