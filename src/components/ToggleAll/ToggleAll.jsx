import React from "react";

import "./ToggleAll.scss";

const ToggleAll = () => {
  return (
    <>
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </>
  );
};

export default ToggleAll;
