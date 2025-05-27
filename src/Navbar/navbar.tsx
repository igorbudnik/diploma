import React, { useContext } from "react";
import headerStyle from "./navbar.module.css";
import { useNavigate } from "react-router-dom";
import { SyntheticEvent } from "react";
import Button from "../Button/button";
import { UserContext } from "../context";
import "./navbar.css";
import iconClick from "../iconClick.png";

function Navbar() {
  const navigate = useNavigate();
  const state = useContext(UserContext);
  const changePage = (e: SyntheticEvent, url: string, stateWillBe: string) => {
    e.preventDefault();
    state?.setMapState(stateWillBe);
    navigate(url);
  };

  return (
    <header className={headerStyle.header}>
      <nav className={headerStyle.nav}>
        <Button onClick={(e) => changePage(e, "/", "about")} size="large">
          <span>О проекте</span>
        </Button>
        <section className={headerStyle.logo}>ЛОГОТИП</section>
        {state?.mapState !== "about" ? (
          <div className={headerStyle.side_bar}>
            <div
              className={headerStyle.switchText}
              style={{ color: state?.mapState === "map" ? "black" : "gray" }}
            >
              Карта
            </div>
            <label className="switch-container">
              <input
                type="checkbox"
                onClick={() => (
                  state?.setMapState(
                    state.mapState === "table" ? "map" : "table"
                  ),
                  navigate(state?.mapState === "table" ? "/map" : "/table")
                )}
                className="switch-input"
              />
              <span className="switch-slider"></span>
            </label>
            <div
              className={headerStyle.switchText}
              style={{
                color: state?.mapState === "table" ? "black" : "gray",
              }}
            >
              Таблица
            </div>
          </div>
        ) : (
          <div className={headerStyle.side_bar}>
            <div className={headerStyle.switchText} style={{ color: "gray" }}>
              Карта
            </div>
            <label className="switch-container">
              <input
                type="checkbox"
                onClick={() => (state?.setMapState("map"), navigate("/map"))}
                className="switch-input"
                checked={true}
              />
              <span className="switch-slider-off">
                <img className="icon" src={iconClick} width={30} height={30} />
              </span>
            </label>
            <div className={headerStyle.switchText} style={{ color: "gray" }}>
              Таблица
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
