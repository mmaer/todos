import React from "react";
import { shallow, mount } from "enzyme";

import ToggleCompletedStatuses from "./";

const TODOS = [{ completed: false }];

describe("ToggleCompletedStatuses component", () => {
  it("Should match snapshot", () => {
    const wrapper = shallow(
      <ToggleCompletedStatuses
        toggleCompletedStatuses={() => {}}
        todos={TODOS}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("Should display checked checkbox when all todos are completed", () => {
    const wrapper = shallow(
      <ToggleCompletedStatuses
        toggleCompletedStatuses={() => {}}
        todos={[{ completed: true }, { completed: true }]}
      />
    );
    const checkbox = wrapper.find("input");
    expect(checkbox.props().checked).toBeTruthy();
  });

  it("Should display not checked checkbox when not all todos are completed", () => {
    const wrapper = shallow(
      <ToggleCompletedStatuses
        toggleCompletedStatuses={() => {}}
        todos={[{ completed: false }, { completed: true }]}
      />
    );
    const checkbox = wrapper.find("input");
    expect(checkbox.props().checked).toBeFalsy();
  });

  it("Should call toggleCompletedStatuses function when checkbox is clicked", () => {
    const mockToggleCompletedStatusesFunc = jest.fn();
    const wrapper = mount(
      <ToggleCompletedStatuses
        toggleCompletedStatuses={mockToggleCompletedStatusesFunc}
        todos={[{ completed: false }, { completed: true }]}
      />
    );
    const checkbox = wrapper.find("input");
    checkbox.simulate("change", { target: { checked: true } });

    expect(mockToggleCompletedStatusesFunc.mock.calls.length).toBe(1);
  });
});
