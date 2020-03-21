import React, { useState } from "react";

import { ENTER_KEY, ESCAPE_KEY } from "../../../../constants";

import "./TodoEdit.scss";

const TodoEdit = ({
  todo,
  id,
  removeTodo,
  editTodoTitle,
  toggleEditingStatus
}) => {
  const { title, editing } = todo;
  const [value, setValue] = useState(title);

  const handleOnChange = ({ target }) => {
    setValue(target.value);
  };

  const save = () => {
    if (editing) {
      if (value === "") {
        removeTodo(id);
      } else {
        editTodoTitle(id, value);
        toggleEditingStatus(id);
      }
    }
  };

  const handleKeys = event => {
    event.persist();
    if (event.keyCode === ENTER_KEY) {
      save();
    } else if (event.keyCode === ESCAPE_KEY) {
      setValue(title);
      toggleEditingStatus(id);
    }
  };

  return (
    <input
      className="todo-editing"
      onKeyUp={handleKeys}
      onBlur={save}
      value={value}
      onChange={handleOnChange}
    />
  );
};

export default TodoEdit;
