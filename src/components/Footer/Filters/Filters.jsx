import React, { memo } from "react";
import { NavLink } from "react-router-dom";

import { FILTERS } from "../../../constants";

import "./Filters.scss";

const Filters = memo(() => (
  <ul className="filters">
    {FILTERS.map((link, index) => (
      <li key={`filter-${index}`} className="filters__filter">
        <NavLink
          className="filters__link"
          activeClassName="filters__link--selected"
          to={`/${link}`}
        >
          {link[0].toUpperCase() + link.slice(1)}
        </NavLink>
      </li>
    ))}
  </ul>
));

export default Filters;
