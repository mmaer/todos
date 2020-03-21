import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useTodos } from "./reducer/actions";
import reducer from "./reducer";
import initialState from "./reducer/initialState";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import ToggleCompletedStatuses from "./components/ToggleCompletedStatuses";

import { LOCAL_STORAGE_KEY, FILTERS } from "./constants";

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
              {FILTERS.map(filter => (
                <Route path={`/${filter}`} key={`todo-list-${filter}`}>
                  <TodoList
                    todos={todos}
                    filter={filter}
                    editTodoTitle={editTodoTitle}
                    removeTodo={removeTodo}
                    toggleCompletedStatus={toggleCompletedStatus}
                    toggleEditingStatus={toggleEditingStatus}
                  />
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
