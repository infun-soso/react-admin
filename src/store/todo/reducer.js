let defaultState1 = {
  filter: 'SHOW_ALL'
}
export const todoReducer = (state = defaultState1, action) => {
  switch(action.type) {
    case 'CHANGE_FILTER':
      return {...state, filter: action.filter}
    default:
      return state
  }
}

let defaultList = [{
  id: -3,
  text: 'play basketball',
  completed: false
}, {
  id: -2,
  text: 'coding',
  completed: true
}, {
  id: -1,
  text: 'have dinner',
  completed: false
}]

export const listReducer = (state = defaultList, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.payload
      ]
    case 'TOGGLE_TODO':
      return state.map(item => {
        if (item.id !== action.id) {
          return item
        }
        return Object.assign({}, item, {
          completed: !item.completed
        })
      })
    case 'DEL_TODO':
      return state.filter(item => {
        return item.id !== action.id
      })
    default: 
      return state
  }
}