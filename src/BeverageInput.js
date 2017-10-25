import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'

export default class BeverageInput extends Component {
  static propTypes = {
    addBeverage: PropTypes.func.isRequired
  }

  state = {
    name: '',
    description: ''
  }

  submit = e => {
    e.preventDefault()
    const { name, description } = this.state
    this.props.addBeverage({
      id: uuid(),
      name,
      description
    })
  }

  onInputChange = key => e => {
    this.setState({
      [key]: e.target.value
    })
  }

  render() {
    const { name, description } = this.state
    return (
      <form onSubmit={this.submit}>
        <input
          value={name}
          onChange={this.onInputChange('name')}
          type="text"
          placeholder="name"
        />
        <textarea
          value={description}
          onChange={this.onInputChange('description')}
          placeholder="description"
        />
        <input type="submit" value="add" />
      </form>
    )
  }
}
