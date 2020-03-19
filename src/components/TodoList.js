import React from "react";
import Todo from "./Todo";

import { FILTER_ACTIVE, FILTER_COMPLETED, FILTER_ALL } from "../constants";

const FILTERS = {
  [FILTER_ACTIVE]: completed => !completed,
  [FILTER_COMPLETED]: completed => completed,
  [FILTER_ALL]: () => true
};

const TodoList = ({ filter, ...props }) => (
  <ul className="todo-list">
    {props.todos
      .filter(({ completed }) => FILTERS[filter](completed))
      .map((todo, id) => (
        <Todo {...props} todo={todo} id={id} key={id} />
      ))}
  </ul>
);

export default TodoList;
