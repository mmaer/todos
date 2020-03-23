import React from "react";
import { shallow, mount } from "enzyme";

import { ENTER_KEY } from "../../constants";

import AddTodo from "./";

describe("AddTodo component", () => {
  it("Should match snapshot", () => {
    const wrapper = shallow(<AddTodo addTodo={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should add new todo when enter key is pressed", () => {
    const mockAddTodoFunc = jest.fn();
    const wrapper = mount(<AddTodo addTodo={mockAddTodoFunc} />);
    const input = wrapper.find("input");

    input.simulate("change", { target: { value: "new-todo" } });
    input.simulate("keyPress", { persist: () => {}, which: ENTER_KEY });

    expect(mockAddTodoFunc).toBeCalledWith({
      completed: false,
      editing: false,
      title: "new-todo"
    });
  });

  it("Should not add new todo when value is equal ''", () => {
    const mockAddTodoFunc = jest.fn();
    const wrapper = mount(<AddTodo addTodo={mockAddTodoFunc} />);
    const input = wrapper.find("input");

    input.simulate("keyPress", { persist: () => {}, which: ENTER_KEY });

    expect(mockAddTodoFunc.mock.calls.length).toBe(0);
  });
});
