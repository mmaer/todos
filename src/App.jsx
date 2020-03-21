import React, { useEffect, useState } from "react";

import { useTodos } from "./reducer/actions";
import reducer from "./reducer";
import initialState from "./reducer/initialState";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import ToggleCompletedStatuses from "./components/ToggleCompletedStatuses";

import { LOCAL_STORAGE_KEY, FILTERS, FILTER_ALL } from "./constants";

import "./App.scss";

const App = () => {
  const {
    state,
    addTodo,
    removeTodo,
    toggleCompletedStatus,
    toggleEditingStatus,
    editTodoTitle,
    removeCompletedTodos,
    toggleCompletedStatuses
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
    <div className="app">
      <header>
        <h1 className="app__title">Todos</h1>
        <AddTodo addTodo={addTodo} />
      </header>
      {!!todos.length && (
        <>
          <section className="app__main">
            <ToggleCompletedStatuses
              todos={todos}
              toggleCompletedStatuses={toggleCompletedStatuses}
            />
            <TodoList
              todos={todos}
              filter={filter}
              editTodoTitle={editTodoTitle}
              removeTodo={removeTodo}
              toggleCompletedStatus={toggleCompletedStatus}
              toggleEditingStatus={toggleEditingStatus}
            />
          </section>
          <Footer
            todos={todos}
            filter={filter}
            setFilter={setFilter}
            removeCompletedTodos={removeCompletedTodos}
          />
        </>
      )}
    </div>
  );
};

export default App;
