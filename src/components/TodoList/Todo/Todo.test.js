import React from "react";
import { mount } from "enzyme";

import Todo from "./";

describe("Todo component", () => {
  it("Should match TodoEdit snapshot", () => {
    const wrapper = mount(<Todo editing />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should match TodoView snapshot", () => {
    const wrapper = mount(<Todo editing={false} />);
    expect(wrapper).toMatchSnapshot();
  });
});
