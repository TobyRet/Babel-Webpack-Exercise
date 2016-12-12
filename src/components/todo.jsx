import React, { Component } from 'react'
import AddTodo from './addTodo.jsx'
import TodoList from './todoList.jsx'

export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
    this.onAddTodo = this.onAddTodo.bind(this)
  }

  onAddTodo (todo)  {
    this.setState({
      todos: this.state.todos.concat(todo)
    })
  }

  render() {
    return (
      <div>
        <AddTodo onAddTodo={this.onAddTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}
