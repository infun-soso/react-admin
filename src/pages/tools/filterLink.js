import React from 'react'
import { connect } from 'react-redux'
import './index.less'

class FilterLink extends React.Component {
  onClick(name) {
    this.props.dispatch({
      type: 'CHANGE_FILTER',
      filter: this.props.filter
    })
  }

  render() {
    const { setVisibility, filter, name } = this.props
    return (
      <div className="todo-tab_item">
        <a style={{color: setVisibility.filter === filter ? '#f01414' : '#4d555d'}} onClick={() => this.onClick(name)}>{name}</a>
      </div>
    )
  }
}

export default connect((state) => ({
  setVisibility: state.todoReducer
}))(FilterLink)