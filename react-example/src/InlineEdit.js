import React, { Component } from 'react'

export default class InlineEdit extends Component {
  constructor () {
    super()
    this.state = {
      editable: false,
      currentText: 'Please edit me...'
    }
  }

  changeEditableState (isEditable) {
    this.setState({
      editable: isEditable,
      currentText: this.state.currentText
    })
  }

  changeText (event) {
    this.setState({
      currentText: event.target.value
    })
  }

  paragraphMode () {
    const { currentText } = this.state
    return (
      <p onClick={() => this.changeEditableState(true)}> { currentText }</p>
    )
  }

  editableMode () {
    return (
      <input
        name='text_input'
        value={this.state.currentText}
        onChange={this.changeText.bind(this)}
        onBlur={() => this.changeEditableState(false)} />
    )
  }

  render () {
    const { editable } = this.state
    return (
      <div>
        {
          editable
          ? this.editableMode()
          : this.paragraphMode()
        }
      </div>
    )
  }
}
