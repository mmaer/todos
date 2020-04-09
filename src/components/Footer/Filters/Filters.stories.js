import React from "react";
import { MemoryRouter } from "react-router-dom";

import Filters from ".";

export default {
  title: "Filters",
};

export const filters = () => (
  <MemoryRouter>
    <Filters />
  </MemoryRouter>
);
