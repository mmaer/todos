import React from "react";
import { shallow, mount } from "enzyme";

import TodoView from "./";

const TODO = {
  title: "title",
  completed: false,
  id: 1,
  removeTodo: () => {},
  toggleCompletedStatus: () => {},
  toggleEditingStatus: () => {}
};

describe("TodoView component", () => {
  it("Should match snapshot", () => {
    const wrapper = shallow(<TodoView {...TODO} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should match snapshot when todo is completed", () => {
    const wrapper = shallow(<TodoView {...TODO} completed />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should call toggleEditingStatus function when component is double clicked", () => {
    const mockToggleEditingFunc = jest.fn();
    const wrapper = mount(
      <TodoView {...TODO} toggleEditingStatus={mockToggleEditingFunc} />
    );
    wrapper.simulate("doubleclick");

    expect(mockToggleEditingFunc.mock.calls.length).toBe(1);
  });

  it("Should call toggleCompletedStatus function when checkbox is clicked", () => {
    const mockToggleCompletedStatusFunc = jest.fn();
    const wrapper = mount(
      <TodoView
        {...TODO}
        toggleCompletedStatus={mockToggleCompletedStatusFunc}
      />
    );
    const checkbox = wrapper.find("input");
    checkbox.simulate("change");

    expect(mockToggleCompletedStatusFunc.mock.calls.length).toBe(1);
  });

  it("Should call removeTodo function when remove button is clicked", () => {
    const mockRemoveTodoFunc = jest.fn();
    const wrapper = mount(
      <TodoView {...TODO} removeTodo={mockRemoveTodoFunc} />
    );
    const checkbox = wrapper.find("button");
    checkbox.simulate("click");

    expect(mockRemoveTodoFunc.mock.calls.length).toBe(1);
  });
});
