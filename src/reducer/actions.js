import { useReducer } from "react";

import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_COMPLETED_STATUS,
  TOGGLE_EDITING_STATUS,
  EDIT_TODO_TITLE,
  REMOVE_COMPLETED_TODOS,
  TOGGLE_COMPLETED_STATUSES,
} from "./constants";

export const useTodos = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (newTodo) => dispatch({ type: ADD_TODO, newTodo });

  const removeTodo = (id) => dispatch({ type: REMOVE_TODO, id });

  const toggleCompletedStatus = (id) =>
    dispatch({ type: TOGGLE_COMPLETED_STATUS, id });

  const toggleEditingStatus = (id) =>
    dispatch({ type: TOGGLE_EDITING_STATUS, id });

  const editTodoTitle = (id, title) =>
    dispatch({ type: EDIT_TODO_TITLE, id, title });

  const removeCompletedTodos = () => dispatch({ type: REMOVE_COMPLETED_TODOS });

  const toggleCompletedStatuses = (completed) =>
    dispatch({ type: TOGGLE_COMPLETED_STATUSES, completed });

  return {
    state,
    addTodo,
    removeTodo,
    toggleCompletedStatus,
    toggleEditingStatus,
    editTodoTitle,
    removeCompletedTodos,
    toggleCompletedStatuses,
  };
};
