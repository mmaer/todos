import React, { useEffect, useState } from "react";

import { useTodos } from "./reducer/actions";
import reducer from "./reducer";
import initialState from "./reducer/initialState";

import MainInput from "./components/MainInput";
import TodoList from "./components/TodoList";
import FilterBox from "./components/FilterBox";

import { filterActiveTodo, filterCompletedTodo } from "./utils";

import { LOCAL_STORAGE_KEY, FILTERS, FILTER_ALL } from "./constants";

import "./App.css";

const App = () => {
  const {
    state,
    addTodo,
    removeTodo,
    toggleCompletedStatus,
    toggleEditingStatus,
    editTodoTitle,
    removeCompletedTodos
  } = useTodos(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || initialState,
    reducer
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const [filter, setFilter] = useState(FILTER_ALL);

  useEffect(() => {
    const pathname = window.location.pathname.slice(1);
    if (FILTERS.includes(pathname)) {
      setFilter(pathname);
    } else {
      setFilter(FILTER_ALL);
    }
  }, []);

  const { todos } = state;

  return (
    <div>
      <header className="header">
        <h1>Todos</h1>
        <MainInput addTodo={addTodo} />
      </header>
      {!!todos.length && (
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <TodoList
            todos={todos}
            filter={filter}
            editTodoTitle={editTodoTitle}
            removeTodo={removeTodo}
            toggleCompletedStatus={toggleCompletedStatus}
            toggleEditingStatus={toggleEditingStatus}
          />
        </section>
      )}
      {!!todos.length && (
        <footer className="footer">
          <span className="todo-count">
            <strong>
              {todos.filter(filterActiveTodo).length}
              {` `}
            </strong>
            items left
          </span>
          <FilterBox filter={filter} setFilter={setFilter} />
          {!!todos.filter(filterCompletedTodo).length && (
            <button onClick={removeCompletedTodos} className="clear-completed">
              Clear completed
            </button>
          )}
        </footer>
      )}
    </div>
  );
};

export default App;
