import React, {Component} from 'react'

export default class TodoList extends Component {
  constructor(props) {
    super(props)
  }

  renderTodo(todo, index) {
    return (
      <li key={index}>{todo}</li>
    )
  }

  render () {
    return (
      <ul>
        {this.props.todos.map(this.renderTodo)}
      </ul>
    )
  }
}
