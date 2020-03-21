import React from "react";

import "./ToggleCompletedStatuses.scss";

const ToggleCompletedStatuses = ({ toggleCompletedStatuses, todos }) => {
  const toggle = ({ target }) => {
    toggleCompletedStatuses(target.checked);
  };

  const allTodosCompleted = todos.every(({ completed }) => completed);

  return (
    <>
      <input
        id="toggle-completed-statuses"
        className="toggle-completed-statuses"
        type="checkbox"
        onChange={toggle}
        checked={allTodosCompleted}
      />
      <label htmlFor="toggle-completed-statuses">Mark all as complete</label>
    </>
  );
};

export default ToggleCompletedStatuses;
