import React from 'react'
import FilterLink from './filterLink'
import { connect } from 'react-redux';
import { Checkbox } from 'antd'

import './index.less'

let nextTodoId = 0
class TodoList extends React.Component {
  handleSubmit(e) {
    e.preventDefault()
    if (!this.input.value.trim()) {
      return
    }
    this.props.dispatch({
      type: 'ADD_TODO',
      payload: {
        id: nextTodoId++,
        text: this.input.value,
        completed: false
      }
    })
    this.input.value = ''
  }

  render() {
    // console.log('store触发重新渲染') store跟新就会重新触发render
    const { todoList, setVisibility } = this.props
    let todos = todoList
    if (setVisibility.filter === 'SHOW_TODO') {
      todos = todoList.filter(item => !item.completed)
    } else if (setVisibility.filter === 'SHOW_COMPLETED'){
      todos = todoList.filter(item => item.completed)
    }
    return (
      <div className="todo-box">
        <div className="todo-innerBox">
          <div className="todo-tab">
            <FilterLink filter="SHOW_ALL" name="全部任务"></FilterLink>
            <FilterLink filter="SHOW_TODO" name="待办任务"></FilterLink>
            <FilterLink filter="SHOW_COMPLETED" name="已完成任务"></FilterLink>
          </div>
          <ul className="list-group">
            {
              todos.length !== 0 ? todos.map(todo =>
                <li className="todo-list_li" key={todo.id}>
                  <Checkbox 
                    checked={todo.completed} 
                    style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
                    onClick={() => this.props.dispatch({type: 'TOGGLE_TODO', id: todo.id})}
                    >{todo.text}</Checkbox>
                    <button className="todo-list_del" onClick={() => this.props.dispatch({type: 'DEL_TODO', id: todo.id})}>删除</button>
                </li>
              ) : <li className="todo-list_li">no data...</li>
            }
          </ul>
          <form onSubmit={(e) => this.handleSubmit(e)} className="todo-add">
            <input type="text" placeholder="你想做点什么？" ref={el => this.input = el} className="todo-input"/>
            <button type="submit" className="todo-btn">提交</button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect((state) => ({
  todoList: state.listReducer,
  setVisibility: state.todoReducer
}))(TodoList)