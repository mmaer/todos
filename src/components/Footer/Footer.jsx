import React from "react";

import FilterBox from "./FilterBox";

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
      <FilterBox filter={filter} setFilter={setFilter} />
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
