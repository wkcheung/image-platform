import {ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO} from '../constants/actionTypes'

// action creators
let nextTodoId = 0
export const addTodo = text => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id
  }
}

const uppyStateUpdate = (previous, next, patch) => ({
  type: 'UPPY_STATE_UPDATE',
  previous,
  next,
  patch
})