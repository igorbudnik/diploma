import React, { useEffect, useState } from "react";
import "./App.css";
import MyMap from "./MyMap/mymap";
import Filter from "./Filter/filter";
import { DataContext, UserContext } from "./context";
import TableComponent from "./Table/table";
import Navbar from "./Navbar/navbar";
import places from "./places.json";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import About from "./About/about";

export interface IPlace {
  id: number;
  name: string;
  city: string;
  region: string;
  founding_year: string;
  coordinates: number[];
}

function App() {
  const [mapState, setMapState] = useState("map");
  const [dataState, setDataState] = useState<IPlace[]>([]);
  const [data, setData] = useState<IPlace[] | null>(null);
  const [isLoaded, setLoaded] = useState<boolean>(false);

  const getData = () =>
    new Promise<IPlace[]>((resolve) => {
      setTimeout(() => resolve(places), 1000);
    });

  useEffect(() => {
    getData()
      .then((d) => setData(d))
      .then(() => setLoaded(true))
      .then(() => console.log(data));
  }, []);

  return (
    <Router>
      <DataContext.Provider value={{ dataState, setDataState }}>
        <UserContext.Provider value={{ mapState, setMapState }}>
          <Navbar />

          <Routes>
            <Route path="/" element={<About />} />
            <Route
              path="/map"
              element={
                <>
                  <Filter />
                  <MyMap isLoaded={isLoaded} data={data} />
                </>
              }
            />
            <Route
              path="/table"
              element={
                <>
                  <Filter />
                  <TableComponent />
                </>
              }
            />
          </Routes>

          {/* {mapState === "map" ? (
          <MyMap isLoaded={isLoaded} data={data} />
        ) : (
          <TableComponent />
        )} */}
        </UserContext.Provider>
      </DataContext.Provider>
    </Router>
  );
}

export default App;
