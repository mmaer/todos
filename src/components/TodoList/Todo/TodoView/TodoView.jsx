import React, { memo } from "react";

import "./TodoView.scss";

const TodoView = memo(
  ({
    title,
    completed,
    id,
    removeTodo,
    toggleCompletedStatus,
    toggleEditingStatus,
  }) => {
    const toggleEditing = () => toggleEditingStatus(id);
    const toggleCompleted = () => toggleCompletedStatus(id);
    const remove = () => removeTodo(id);

    return (
      <div className="todo-view" onDoubleClick={toggleEditing}>
        <input
          type="checkbox"
          className="todo-view__toggle"
          checked={completed}
          onChange={toggleCompleted}
        />
        <label
          className={`todo-view__label${
            completed ? " todo-view__label--completed" : ""
          }`}
        >
          {title}
        </label>
        <button className="todo-view__remove" onClick={remove} />
      </div>
    );
  }
);

export default TodoView;
