import React from "react";
import FilterContent from "./FilterContent";
import Aside from "./navigation/Aside";

const Options = ({ close, isActive }) => {
  return (
    <Aside asideTitle="Filters" side="left" onClose={close} isActive={isActive}>
      <FilterContent />
    </Aside>
  );
};

export default Options;
