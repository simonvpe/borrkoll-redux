/* @flow */

import React, { Component, PropTypes } from 'react'
import classes from './TagInput.scss'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
let ReactTags = require('react-tag-input').WithContext

type Props = {
  field: Object
}

const style = {
  tags: classes.tags,
  tagInput: classes.tagInput,
  selected: classes.selected,
  tag: classes.tag,
  remove: classes.remove,
  suggestions: classes.suggestions
}

class TagInput extends Component {
  props: Props

  state = {
    tags: this.props.field.value,
    suggestions: ['Borrlov', 'Klar']
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({ tags: nextProps.field.value })
  }

  handleDelete = (idx) => {
    const { onChange } = this.props.field
    let tags = [...this.state.tags]
    tags.splice(idx, 1)
    this.setState({ tags })
    onChange(tags)
  }

  handleAddition = (tag) => {
    const { onChange } = this.props.field
    let tags = [...this.state.tags]
    tags.push({ id: tags.length + 1, text: tag, date: new Date() })
    this.setState({ tags })
    onChange(tags)
  }

  handleDrag = (tag, currPos, newPos) => {
    const { onChange } = this.props.field
    let tags = [...this.state.tags]
    tags.splice(currPos, 1)
    tags.splice(newPos, 0, tag)
    this.setState({ tags })
    onChange(tags)
  }

  shouldRenderSuggestions = (...args) => {
    return false
  }

  render = () => {
    const { suggestions } = this.state
    const tags = typeof this.state.tags === 'object' ? this.state.tags : []
    return (
      <ReactTags tags={tags}
        suggestions={suggestions}
        handleDelete={this.handleDelete}
        handleAddition={this.handleAddition}
        handleDrag={this.handleDrag}
        shouldRenderSuggestions={this.shouldRenderSuggestions}
        classNames={style}
      />
    )
  }
}

TagInput.propTypes = {
  field: PropTypes.object.isRequired
}

export default TagInput
