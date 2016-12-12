import React from 'react'

export default class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoText: ''
    }
    this.onChange = this.onChange.bind(this)
    this.addTodo = this.addTodo.bind(this)
  }


  onChange (e) {
    this.setState({
      todoText: e.target.value
    })
  }

  addTodo(e) {
    e.preventDefault()
    this.props.onAddTodo(this.state.todoText)
    this.setState({
      todoText: ''
    })
  }

  render() {
    const inputProps = {
      onChange: this.onChange,
      value: this.state.todoText
    }

    var buttonProps = {
      onClick:  this.addTodo
    }

    return (
        <form>
          <input {...inputProps} />
          <button {...buttonProps } type='submit'>Add to-do</button>
        </form>
    )
  }
}
