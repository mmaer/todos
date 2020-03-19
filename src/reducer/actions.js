import { useReducer } from "react";

import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_COMPLETED_STATUS,
  TOGGLE_EDITING_STATUS,
  EDIT_TODO_TITLE,
  REMOVE_COMPLETED_TODOS
} from "./constants";

export const useTodos = (initialState, reducer) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = value => dispatch({ type: ADD_TODO, value });

  const removeTodo = id => dispatch({ type: REMOVE_TODO, id });

  const toggleCompletedStatus = id =>
    dispatch({ type: TOGGLE_COMPLETED_STATUS, id });

  const toggleEditingStatus = id =>
    dispatch({ type: TOGGLE_EDITING_STATUS, id });

  const editTodoTitle = (id, title) =>
    dispatch({ type: EDIT_TODO_TITLE, id, title });

  const removeCompletedTodos = () => dispatch({ type: REMOVE_COMPLETED_TODOS });

  return {
    state,
    addTodo,
    removeTodo,
    toggleCompletedStatus,
    toggleEditingStatus,
    editTodoTitle,
    removeCompletedTodos
  };
};
