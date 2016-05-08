/* @flow */

import React from 'react'

import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import Tooltip from 'react-bootstrap/lib/Tooltip'
import Col from 'react-bootstrap/lib/Col'
import InputGroup from 'react-bootstrap/lib/InputGroup'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger'
import Button from 'react-bootstrap/lib/Button'

import PureInput from './PureInput'
import TagInput from './TagInput'

type Props = {
  kind: string,
  depth: number,
  idx: number,
  onRemove: Function
}

class HoleForm extends React.Component {
  props: Props

  shouldComponentUpdate = (nextProps) => (
    this.props.kind !== nextProps.kind ||
    this.props.depth !== nextProps.depth
  )

  render = () => {
    const { onRemove, idx, kind, depth, tags } = this.props
    const removeTooltip = <Tooltip><strong>Remove</strong></Tooltip>

    let label
    switch (kind.value) {
      case 'energy': label = 'Energy'; break
      case 'water': label = 'Water'; break
      default: label = 'unknown'
    }

    return (
    <tr>
      <td>
        {label}
      </td>
      <td>
        <PureInput name='depth' type='number' field={depth} title={depth.error}/>
      </td>
      <td>
        <TagInput field={tags} />
      </td>
      <td>
        <OverlayTrigger placement='right' overlay={removeTooltip}>
          <Button className='btn btn-danger' onClick={onRemove}>
            <Glyphicon glyph='trash'/>
          </Button>
        </OverlayTrigger>
      </td>
    </tr>
    )
  }
}

export default HoleForm
