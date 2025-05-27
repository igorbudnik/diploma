import React, { useState } from "react";
import Button from "../Button/button";
import FormFilters from "../FormFilters/formfilters";
import filterStyle from "./filter.module.css";

const Filter = () => {
  const [isOpen, setOpen] = useState(false);

  const setOpenFilters = () => {
    setOpen(!isOpen);
  };
  return (
    <div className={filterStyle.main_bar}>
      <div className={filterStyle.bar}>
        {isOpen ? (
          <FormFilters isOpen={isOpen} setOpen={setOpen} />
        ) : (
          <Button onClick={(e) => setOpenFilters()}>Поиск</Button>
        )}
      </div>
    </div>
  );
};

export default Filter;
