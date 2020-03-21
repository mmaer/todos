import React, { useState, memo } from "react";

import { ENTER_KEY } from "../../constants";

import "./AddTodo.scss";

const AddTodo = memo(({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleOnChange = ({ target }) => {
    setValue(target.value);
  };

  const handleEnter = event => {
    event.persist();
    if (event.which === ENTER_KEY) {
      if (value !== "") {
        addTodo({
          title: value,
          completed: false,
          editing: false
        });
        setValue("");
      }
    }
  };

  return (
    <input
      className="add-todo"
      placeholder="What needs to be done?"
      onKeyPress={handleEnter}
      onChange={handleOnChange}
      value={value}
    />
  );
});

export default AddTodo;
