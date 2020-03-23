import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

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
    removeCompletedTodos,
    toggleCompletedStatuses,
    ...actions
  } = useTodos(
    reducer,
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || initialState
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  }, [state]);

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
            <Switch>
              <Route path="/" exact>
                <TodoList todos={todos} filter={FILTER_ALL} {...actions} />
              </Route>
              {FILTERS.map(filter => (
                <Route path={`/${filter}`} key={`todo-list-${filter}`}>
                  <TodoList todos={todos} filter={filter} {...actions} />
                </Route>
              ))}
            </Switch>
          </section>
          <Footer todos={todos} removeCompletedTodos={removeCompletedTodos} />
        </>
      )}
    </div>
  );
};

export default App;
