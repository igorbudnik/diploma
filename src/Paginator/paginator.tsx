import { useContext, useEffect, useMemo, useState } from "react";
import pagiStyle from "./paginator.module.css";
import { DataContext } from "../context";
import { IPlace } from "../App";

const data = [
  {
    id: 1,
    name: "АвтоВАЗ",
    city: "Тольятти",
    region: "Самарская область",
    founding_year: "1966",
    coordinates: [53.5078, 49.4204], // было "53.5078, 49.4204"
  },
  {
    id: 2,
    name: "КамАЗ",
    city: "Набережные Челны",
    region: "Татарстан",
    founding_year: "1969",
    coordinates: [55.7436, 52.3959],
  },
  {
    id: 3,
    name: "Уралмашзавод",
    city: "Екатеринбург",
    region: "Свердловская область",
    founding_year: "1933",
    coordinates: [56.8854, 60.6101],
  },
  {
    id: 4,
    name: "Северсталь",
    city: "Череповец",
    region: "Вологодская область",
    founding_year: "1940",
    coordinates: [59.1272, 37.9164],
  },
  {
    id: 5,
    name: "Магнитогорский металлургический комбинат",
    city: "Магнитогорск",
    region: "Челябинская область",
    founding_year: "1929",
    coordinates: [53.4117, 59.0476],
  },
  {
    id: 6,
    name: "Новолипецкий металлургический комбинат",
    city: "Липецк",
    region: "Липецкая область",
    founding_year: "1931",
    coordinates: [52.6052, 39.5716],
  },
  {
    id: 7,
    name: "ГАЗ (Горьковский автомобильный завод)",
    city: "Нижний Новгород",
    region: "Нижегородская область",
    founding_year: "1932",
    coordinates: [56.2624, 43.8933],
  },
  {
    id: 8,
    name: "Татнефть",
    city: "Альметьевск",
    region: "Татарстан",
    founding_year: "1950",
    coordinates: [54.9014, 52.2973],
  },
  {
    id: 9,
    name: "Сибур",
    city: "Тобольск",
    region: "Тюменская область",
    founding_year: "1995",
    coordinates: [58.1981, 68.2655],
  },
  {
    id: 10,
    name: "Роснефть (АНХК)",
    city: "Ангарск",
    region: "Иркутская область",
    founding_year: "1945",
    coordinates: [52.5449, 103.8824],
  },
  {
    id: 1,
    name: "АвтоВАЗ",
    city: "Тольятти",
    region: "Самарская область",
    founding_year: "1966",
    coordinates: [53.5078, 49.4204], // было "53.5078, 49.4204"
  },
  {
    id: 9,
    name: "Сибур",
    city: "Тобольск",
    region: "Тюменская область",
    founding_year: "1995",
    coordinates: [58.1981, 68.2655],
  },
  {
    id: 9,
    name: "Сибур",
    city: "Тобольск",
    region: "Тюменская область",
    founding_year: "1995",
    coordinates: [58.1981, 68.2655],
  },
  {
    id: 9,
    name: "Сибур",
    city: "Тобольск",
    region: "Тюменская область",
    founding_year: "1995",
    coordinates: [58.1981, 68.2655],
  },
  {
    id: 9,
    name: "Сибур",
    city: "Тобольск",
    region: "Тюменская область",
    founding_year: "1995",
    coordinates: [58.1981, 68.2655],
  },
  {
    id: 6,
    name: "Новолипецкий металлургический комбинат",
    city: "Липецк",
    region: "Липецкая область",
    founding_year: "1931",
    coordinates: [52.6052, 39.5716],
  },
  {
    id: 7,
    name: "ГАЗ (Горьковский автомобильный завод)",
    city: "Нижний Новгород",
    region: "Нижегородская область",
    founding_year: "1932",
    coordinates: [56.2624, 43.8933],
  },
  {
    id: 8,
    name: "Татнефть",
    city: "Альметьевск",
    region: "Татарстан",
    founding_year: "1950",
    coordinates: [54.9014, 52.2973],
  },
  {
    id: 9,
    name: "Сибур",
    city: "Тобольск",
    region: "Тюменская область",
    founding_year: "1995",
    coordinates: [58.1981, 68.2655],
  },
  {
    id: 10,
    name: "Роснефть (АНХК)",
    city: "Ангарск",
    region: "Иркутская область",
    founding_year: "1945",
    coordinates: [52.5449, 103.8824],
  },
];

const Paginator = () => {
  const state = useContext(DataContext);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const getInfoData = (page: number) => {
    // alert("API CALL " + `${page}`);
  };

  useEffect(() => {
    state?.setDataState(
      data.slice(
        currentPage === 1 ? 0 : 10 * (currentPage - 1),
        10 * currentPage
      )
    );
  }, [currentPage]);

  const pages = useMemo(() => {
    return Array.from(
      {
        length: data.length / 10,
      },
      (_, i) => i + 1
    );
  }, []);

  return (
    <div className={pagiStyle.paginator}>
      <span>{"<"}</span>
      {pages.map((page, i) => {
        return (
          <span
            key={i}
            onClick={() => (setCurrentPage(page), getInfoData(page))}
            className={currentPage === page ? pagiStyle.active : ""}
            style={{ pointerEvents: currentPage === page ? "none" : "auto" }}
          >
            {page}
          </span>
        );
      })}
      <span>{">"}</span>
    </div>
  );
};

export default Paginator;
