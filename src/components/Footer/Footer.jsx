import React from "react";

import Filters from "./Filters";

import { filterActiveTodo, filterCompletedTodo } from "../../utils";

import "./Footer.scss";

const Footer = ({ todos, filter, setFilter, removeCompletedTodos }) => {
  return (
    <footer className="footer">
      <span className="footer__todo-count">
        <strong>
          {todos.filter(filterActiveTodo).length}
          {` `}
        </strong>
        items left
      </span>
      <Filters filter={filter} setFilter={setFilter} />
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
};

export default Footer;
