import React from "react";
import { mount } from "enzyme";

import { FILTER_ACTIVE, FILTER_COMPLETED, FILTER_ALL } from "../../constants";

import TodoList from "./";

const TODOS = [
  { completed: false },
  { completed: false },
  { completed: true },
  { completed: false },
  { completed: true },
  { completed: false },
  { completed: false },
];

describe("TodoList component", () => {
  it("Should match snapshot", () => {
    const wrapper = mount(<TodoList todos={TODOS} filter={FILTER_ALL} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should display all todos", () => {
    const wrapper = mount(<TodoList todos={TODOS} filter={FILTER_ALL} />);
    const todos = wrapper.find("li");
    expect(todos.length).toBe(7);
  });

  it("Should display only active todos", () => {
    const wrapper = mount(<TodoList todos={TODOS} filter={FILTER_ACTIVE} />);
    const todos = wrapper.find("li");
    expect(todos.length).toBe(5);
  });

  it("Should display only completed todos", () => {
    const wrapper = mount(<TodoList todos={TODOS} filter={FILTER_COMPLETED} />);
    const todos = wrapper.find("li");
    expect(todos.length).toBe(2);
  });
});
