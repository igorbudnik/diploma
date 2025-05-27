import React, { Dispatch, SetStateAction, SyntheticEvent } from "react";
import formStyle from "./formfilters.module.css";
import "./formfilters.css";
import Button from "../Button/button";

interface IForm {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const fields = ["Наименование", "Регион", "Город", "Описание"];

const FormFilters = ({ isOpen, setOpen }: IForm) => {
  const returnFilters = () => {
    setOpen(!isOpen);
  };

  return (
    <form className={formStyle.form}>
      <section className={formStyle.section}>
        {fields.map((x) => {
          return <input className={formStyle.field} placeholder={x} />;
        })}
        <div>
          <Button onClick={(e) => alert("Применить")}>Применить</Button>
          <Button onClick={(e) => returnFilters()}>Отмена</Button>
        </div>
      </section>
    </form>
  );
};

export default FormFilters;
