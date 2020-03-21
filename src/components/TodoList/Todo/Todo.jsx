import React, { memo } from "react";

import TodoEdit from "./TodoEdit";
import TodoView from "./TodoView";

import "./Todo.scss";

const Todo = memo(({ editTodoTitle, toggleCompletedStatus, ...props }) => (
  <li className="todo">
    {props.editing ? (
      <TodoEdit {...props} editTodoTitle={editTodoTitle} />
    ) : (
      <TodoView {...props} toggleCompletedStatus={toggleCompletedStatus} />
    )}
  </li>
));

export default Todo;
