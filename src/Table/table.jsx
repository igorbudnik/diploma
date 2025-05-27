import tableStyle from "./table.module.css"; // Стили для таблицы (создайте этот файл)
import "./table.css";
import { useContext } from "react";

import Paginator from "../Paginator/paginator";
import { DataContext } from "../context";

const TableComponent = () => {
  const state = useContext(DataContext);
  // Заголовки столбцов
  const columns = [
    "ID",
    "Наименование",
    "Город",
    "Регион",
    "Дата основания",
    "Координаты",
  ];

  // Данные для таблицы

  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {state.dataState?.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.city}</td>
              <td>{row.region}</td>
              <td>{row.founding_year}</td>
              <td>{row.coordinates}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Paginator />
    </div>
  );
};

export default TableComponent;
