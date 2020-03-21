import React from "react";
import classNames from "classnames";

import "./TodoView.scss";

const TodoView = ({
  todo,
  id,
  removeTodo,
  toggleCompletedStatus,
  toggleEditingStatus
}) => {
  const { completed, title } = todo;

  const toggleEditing = () => toggleEditingStatus(id);
  const toggleCompleted = () => toggleCompletedStatus(id);
  const remove = () => removeTodo(id);

  const labelClassNames = classNames("todo-view__label", {
    "todo-view__label--completed": completed
  });

  return (
    <div className="todo-view" onDoubleClick={toggleEditing}>
      <input
        type="checkbox"
        className="todo-view__toggle"
        checked={completed}
        onChange={toggleCompleted}
      />
      <label className={labelClassNames}>{title}</label>
      <button className="todo-view__remove" onClick={remove} />
    </div>
  );
};

export default TodoView;
