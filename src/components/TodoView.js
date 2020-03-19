import React from "react";

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

  return (
    <div className="view" onDoubleClick={toggleEditing}>
      <input
        type="checkbox"
        className="toggle"
        checked={completed}
        onChange={toggleCompleted}
      />
      <label>{title}</label>
      <button className="destroy" onClick={remove} />
    </div>
  );
};

export default TodoView;
