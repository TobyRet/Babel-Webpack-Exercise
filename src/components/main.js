'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

document.addEventListener("DOMContentLoaded", function() { 
  var AddTodo = React.createClass({
    getInitialState() {
      return {
        todoText: ''
      }
    },

    onChange(e) {
      this.setState({
        todoText: e.target.value
      })
    },

    addTodo(e) {
      e.preventDefault()
      this.props.onAddTodo(this.state.todoText)
      this.setState({
        todoText: ''
      })
    },

    render() {
      var inputProps = {
        onChange: this.onChange,
        value: this.state.todoText
      }

      var buttonProps = {
        onClick:  this.addTodo
      }

      return React.createElement('form', {}, [
        React.createElement('input', inputProps),
        React.createElement('button', buttonProps, 'add todo')
      ])
     }
  })

  var TodoItem = function(props) {
    return React.createElement('li', {}, props.todo)
  }

  var TodoList = function(props) {
    return React.createElement('ul', {}, 
      props.todos.map(function(todo) { 
        return React.createElement(TodoItem, {todo: todo})
      }
    ))
  }

  var App = React.createClass({
    getInitialState() {
      return {
        todos: []
      }
    },

    addTodo(todo) {
      this.setState({
        todos: this.state.todos.concat(todo)
      })
    },

    render() {
      return React.createElement('div', {}, [
        //React.createElement('h1', {}, 'test'),
        //React.createElement('p', {}, 'hello world'),
        React.createElement(AddTodo, {onAddTodo: this.addTodo}),
        React.createElement(TodoList, {todos: this.state.todos})
      ])
    }
  })


  console.log('mount app')
  var mountPoint = document.getElementById('app')
  var app = React.createElement(App)
  ReactDOM.render(app, mountPoint)
});
