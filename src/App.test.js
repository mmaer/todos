import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";

import { ENTER_KEY } from "./constants";

import App from "./App";

describe("App component", () => {
  it("Should match snapshot", () => {
    const wrapper = mount(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should display todo list when todo is added", () => {
    const wrapper = mount(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const addTodoInput = wrapper.find(".add-todo");

    addTodoInput.simulate("change", { target: { value: "new-todo" } });
    addTodoInput.simulate("keyPress", { persist: () => {}, which: ENTER_KEY });

    expect(wrapper.find(".app__main").length).toBe(1);
  });
});
