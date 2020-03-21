import React, { memo } from "react";
import classnames from "classnames";

import { FILTERS } from "../../../constants";

import "./Filters.scss";

const Filters = memo(({ setFilter, filter }) => (
  <ul className="filters">
    {FILTERS.map((link, index) => (
      <li key={index} className="filters__filter">
        <a
          href={`/${link}`}
          className={classnames("filters__link", {
            "filters__link--selected": filter === link
          })}
          onClick={() => setFilter(link)}
        >
          {link[0].toUpperCase() + link.slice(1)}
        </a>
      </li>
    ))}
  </ul>
));

export default Filters;
