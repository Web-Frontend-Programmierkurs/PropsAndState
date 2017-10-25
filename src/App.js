import React, { Component } from 'react'
import { v4 as uuid } from 'uuid'
import CreateTodo from './CreateTodo'
import TodoList from './TodoList'
import './App.css'

class App extends Component {

  state = {
    items: [],
  }

  render() {
    return (
      <div className="app">
        <h1>todo list</h1>
        <CreateTodo create={this.create} />
        <TodoList
          delete={this.delete}
          items={this.state.items}
          toggle={this.toggle}
        />
      </div>
    )
  }

  create = text => {
    const newItem = {
      id: uuid(),
      text,
    }
    const items = [newItem, ...this.state.items]
    this.setState({ items })
  }

  delete = id => {
    const items = [...this.state.items]
    const index = items.findIndex(item => item.id === id)
    if (index === -1) return
    items.splice(index, 1)
    this.setState({ items })
  }

  toggle = id => {
    const items = [...this.state.items]
    const index = items.findIndex(item => item.id === id)
    if (index === -1) return
    const toggledItem = { ...items[index], done: !items[index].done }
    items.splice(index, 1, toggledItem)
    this.setState({ items })
  }
}

export default App
