import React from "react";
import classnames from "classnames";

import { FILTERS } from "../constants";

const FilterBox = ({ setFilter, filter }) => (
  <ul className="filters">
    {FILTERS.map((link, index) => (
      <li key={index}>
        <a
          href={`/${link}`}
          className={classnames({ selected: filter === link })}
          onClick={() => setFilter(link)}
        >
          {link[0].toUpperCase() + link.slice(1)}
        </a>
      </li>
    ))}
  </ul>
);

export default FilterBox;
