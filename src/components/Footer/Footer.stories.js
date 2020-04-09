import React from "react";
import { MemoryRouter } from "react-router-dom";

import Footer from ".";

export default {
  title: "Footer",
};

const TODOS = [{ completed: false, active: true }];

export const footer = () => (
  <MemoryRouter>
    <Footer todos={TODOS} />
  </MemoryRouter>
);
