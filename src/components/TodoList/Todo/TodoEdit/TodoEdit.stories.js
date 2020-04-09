import React from "react";

import TodoEdit from ".";

export default {
  title: "TodoEdit",
};

const TODO = { title: "Todo", editing: true, id: 1 };

export const todoEdit = () => <TodoEdit {...TODO} />;
