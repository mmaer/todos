import React from "react";

import TodoView from ".";

export default {
  title: "TodoView"
};

const TODO = { title: "Todo", editing: false, completed: false, id: 1 };

export const todoView = () => <TodoView {...TODO} />;
