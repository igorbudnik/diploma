import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./mymap.css";
import L, { LatLngExpression } from "leaflet";
import mapStyle from "./mymap.module.css";
import { IPlace } from "../App";
import MyMarker from "./marker";

interface IData {
  isLoaded: boolean;
  data: IPlace[] | null;
}

const MyMap = ({ isLoaded, data }: IData) => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [position, setPosition] = useState<LatLngExpression>([
    55.760181, 37.61858,
  ]);

  const icon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/3699/3699561.png",
    iconSize: [41, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  const onClickPlaceHandler = () => {
    setOpenModal(!isOpenModal);
  };

  // const positions: LatLngExpression[] = [
  //   [51.51, -0.08],
  //   [51.52, -0.07],
  //   [51.53, -0.09],
  //   [51.52, -0.1],
  // ];

  return (
    <div className={mapStyle.map}>
      <div className={mapStyle.border}>
        {isLoaded ? (
          <MapContainer
            className={mapStyle.mainMap}
            center={position}
            zoom={13}
            style={{ height: "680px", width: "98%" }}
          >
            {/* <Polygon
              pathOptions={{
                color: "red",
                fillColor: "blue",
                fillOpacity: 0.6,
              }}
              positions={positions}
            /> */}
            <TileLayer
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?lang=ru" // Можно регулировать прозрачность
            />
            {data?.map((place, i) => {
              return <MyMarker key={i} data={place} />;
            })}
          </MapContainer>
        ) : (
          <div className={mapStyle.loader}></div>
        )}
      </div>
    </div>
  );
};

export default MyMap;
