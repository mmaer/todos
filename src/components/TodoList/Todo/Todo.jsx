import React from "react";

import TodoInlineInput from "./TodoEdit";
import TodoView from "./TodoView";

import "./Todo.scss";

const Todo = ({ editTodoTitle, toggleCompletedStatus, ...props }) => (
  <li className="todo">
    {props.todo.editing ? (
      <TodoInlineInput {...props} editTodoTitle={editTodoTitle} />
    ) : (
      <TodoView {...props} toggleCompletedStatus={toggleCompletedStatus} />
    )}
  </li>
);

export default Todo;
