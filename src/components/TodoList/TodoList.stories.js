import React from "react";

import { FILTER_ALL } from "../../constants";

import TodoList from ".";

export default {
  title: "TodoList"
};

const TODOS = [
  { title: "Todo1", editing: false, completed: false, id: 1 },
  { title: "Todo2", editing: false, completed: false, id: 1 }
];

export const todoList = () => <TodoList todos={TODOS} filter={FILTER_ALL} />;
