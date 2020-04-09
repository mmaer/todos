import React from "react";
import { mount } from "enzyme";

import { ENTER_KEY, ESCAPE_KEY } from "../../../../constants";

import TodoEdit from "./";

describe("TodoEdit component", () => {
  let mockEditTodoTitleFunc;
  let mockToggleEditingStatusFunc;
  let mockRemoveTodoFunc;
  let wrapper;

  const TODO = {
    title: "title",
    completed: false,
    editing: true,
    id: 1,
    removeTodo: () => {},
    editTodoTitle: () => {},
    toggleEditingStatus: () => {},
  };

  const newTitle = "new-title";

  const simulate = (wrapper, value, keyCode) => {
    wrapper.simulate("change", { target: { value } });
    wrapper.simulate("keyup", { persist: () => {}, keyCode });
  };

  beforeEach(() => {
    mockEditTodoTitleFunc = jest.fn();
    mockToggleEditingStatusFunc = jest.fn();
    mockRemoveTodoFunc = jest.fn();

    wrapper = mount(
      <TodoEdit
        {...TODO}
        editTodoTitle={mockEditTodoTitleFunc}
        toggleEditingStatus={mockToggleEditingStatusFunc}
        removeTodo={mockRemoveTodoFunc}
      />
    );
  });

  it("Should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("Should call editTodoTitle and toggleEditingStatus functions when new value is passed and enter key is pressed", () => {
    simulate(wrapper, newTitle, ENTER_KEY);

    expect(mockEditTodoTitleFunc).toBeCalledWith(TODO.id, newTitle);
    expect(mockToggleEditingStatusFunc).toBeCalledWith(TODO.id);
  });

  it("Should call removeTodo function when value is empty and enter key is pressed", () => {
    simulate(wrapper, "", ENTER_KEY);

    expect(mockRemoveTodoFunc).toBeCalledWith(TODO.id);
  });

  it("Should call toggleEditingStatus function when escape key is pressed", () => {
    simulate(wrapper, newTitle, ESCAPE_KEY);

    expect(mockToggleEditingStatusFunc).toBeCalledWith(TODO.id);
    expect(wrapper.find("input").props().value).toEqual(TODO.title);
  });

  it("Should do nothing when editing prop is equal false", () => {
    wrapper.setProps({ editing: false });
    simulate(wrapper, newTitle, ENTER_KEY);

    expect(mockEditTodoTitleFunc.mock.calls.length).toBe(0);
    expect(mockToggleEditingStatusFunc.mock.calls.length).toBe(0);
    expect(mockRemoveTodoFunc.mock.calls.length).toBe(0);
  });
});
