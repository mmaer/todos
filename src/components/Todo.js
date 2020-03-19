import React from "react";
import classnames from "classnames";

import TodoInlineInput from "./TodoInlineInput";
import TodoView from "./TodoView";

const Todo = ({ editTodoTitle, toggleCompletedStatus, ...props }) => {
  return (
    <li
      className={classnames({
        completed: props.todo.completed,
        editing: props.todo.editing
      })}
    >
      <TodoView {...props} toggleCompletedStatus={toggleCompletedStatus} />
      <TodoInlineInput {...props} editTodoTitle={editTodoTitle} />
    </li>
  );
};

export default Todo;
