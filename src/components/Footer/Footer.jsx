import React, { memo } from "react";

import Filters from "./Filters";

import { filterActiveTodo, filterCompletedTodo } from "../../utils";

import "./Footer.scss";

const Footer = memo(({ todos, removeCompletedTodos }) => {
  return (
    <footer className="footer">
      <span className="footer__todo-count">
        <strong>
          {todos.filter(filterActiveTodo).length}
          {` `}
        </strong>
        items left
      </span>
      <Filters />
      {!!todos.filter(filterCompletedTodo).length && (
        <button
          onClick={removeCompletedTodos}
          className="footer__clear-completed"
        >
          Clear completed
        </button>
      )}
    </footer>
  );
});

export default Footer;
