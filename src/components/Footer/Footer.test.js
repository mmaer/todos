import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount } from "enzyme";

import Footer from "./";

const TODOS = [{ completed: false }, { completed: false }, { completed: true }];

const mountWithRouter = Component => <MemoryRouter>{Component}</MemoryRouter>;

describe("Footer component", () => {
  it("Should match snapshot", () => {
    const wrapper = shallow(
      <Footer removeCompletedTodos={() => {}} todos={TODOS} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("Should not display 'Clear completed' button when there are no completed todos", () => {
    const mockRemoveCompletedTodosFunc = jest.fn();
    const wrapper = mount(
      mountWithRouter(
        <Footer
          removeCompletedTodos={mockRemoveCompletedTodosFunc}
          todos={[{ completed: false }]}
        />
      )
    );
    const button = wrapper.find(".footer__clear-completed");
    expect(button.length).toBe(0);
  });

  it("Should call removeCompletedTodos when 'Clear completed' is clicked", () => {
    const mockRemoveCompletedTodosFunc = jest.fn();
    const wrapper = mount(
      mountWithRouter(
        <Footer
          removeCompletedTodos={mockRemoveCompletedTodosFunc}
          todos={TODOS}
        />
      )
    );
    const button = wrapper.find(".footer__clear-completed");
    button.simulate("click");

    expect(mockRemoveCompletedTodosFunc.mock.calls.length).toBe(1);
  });
});
