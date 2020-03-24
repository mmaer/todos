import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_COMPLETED_STATUS,
  TOGGLE_EDITING_STATUS,
  EDIT_TODO_TITLE,
  REMOVE_COMPLETED_TODOS,
  TOGGLE_COMPLETED_STATUSES
} from "./constants";

import { filterActiveTodo } from "../utils";

const editTodo = (state, id, action) => [
  ...state.todos.slice(0, id),
  { ...state.todos[id], ...action },
  ...state.todos.slice(id + 1)
];

const ACTIONS = {
  [ADD_TODO]: (state, { newTodo }) => ({
    ...state,
    todos: [...state.todos, newTodo]
  }),
  [REMOVE_TODO]: (state, { id }) => ({
    ...state,
    todos: [...state.todos.slice(0, id), ...state.todos.slice(id + 1)]
  }),
  [TOGGLE_COMPLETED_STATUS]: (state, { id }) => ({
    ...state,
    todos: editTodo(state, id, { completed: !state.todos[id].completed })
  }),
  [TOGGLE_EDITING_STATUS]: (state, { id }) => ({
    ...state,
    todos: editTodo(state, id, { editing: !state.todos[id].editing })
  }),
  [EDIT_TODO_TITLE]: (state, { id, title }) => ({
    ...state,
    todos: editTodo(state, id, { title })
  }),
  [REMOVE_COMPLETED_TODOS]: state => ({
    ...state,
    todos: state.todos.filter(filterActiveTodo)
  }),
  [TOGGLE_COMPLETED_STATUSES]: (state, { completed }) => ({
    ...state,
    todos: state.todos.map(todo => ({ ...todo, completed }))
  })
};

export default ACTIONS;
