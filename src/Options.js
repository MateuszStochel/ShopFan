import React from "react";
import FilterContent from "./FilterContent";
import Aside from "./navigation/Aside";

const Options = ({ close, isActive, setCategoryFilter, categoryFilter }) => {
  return (
    <Aside asideTitle="Filters" side="left" onClose={close} isActive={isActive}>
      <FilterContent
        setCategoryFilter={setCategoryFilter}
        categoryFilter={categoryFilter}
      />
    </Aside>
  );
};

export default Options;
