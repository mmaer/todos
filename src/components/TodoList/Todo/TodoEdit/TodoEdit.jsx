import React, { useState, memo } from "react";

import { ENTER_KEY, ESCAPE_KEY } from "../../../../constants";

import "./TodoEdit.scss";

const TodoEdit = memo(
  ({ title, editing, id, removeTodo, editTodoTitle, toggleEditingStatus }) => {
    const [value, setValue] = useState(title);

    const handleOnChange = ({ target }) => {
      setValue(target.value);
    };

    const saveTodo = () => {
      if (editing) {
        if (value === "") {
          removeTodo(id);
        } else {
          editTodoTitle(id, value);
          toggleEditingStatus(id);
        }
      }
    };

    const handleKeys = (event) => {
      event.persist();
      if (event.keyCode === ENTER_KEY) {
        saveTodo();
      } else if (event.keyCode === ESCAPE_KEY) {
        setValue(title);
        toggleEditingStatus(id);
      }
    };

    return (
      <input
        className="todo-editing"
        onKeyUp={handleKeys}
        onBlur={saveTodo}
        value={value}
        onChange={handleOnChange}
        autoFocus
      />
    );
  }
);

export default TodoEdit;
