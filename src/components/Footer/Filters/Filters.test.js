import React from "react";
import { shallow } from "enzyme";

import Filters from "./";

describe("Filters component", () => {
  it("Should match snapshot", () => {
    const wrapper = shallow(<Filters />);
    expect(wrapper).toMatchSnapshot();
  });
});
