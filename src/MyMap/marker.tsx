import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./mymap.css";
import L, { LatLngExpression } from "leaflet";
import mapStyle from "./mymap.module.css";
import { IPlace } from "../App";
import Modal from "../Modal/modal";

interface IMarkerData {
  data: IPlace | null;
}

const MyMarker = ({ data }: IMarkerData) => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const icon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/3699/3699561.png",
    iconSize: [41, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  const onClickPlaceHandler = () => {
    setOpenModal(!isOpenModal);
  };

  return (
    <Marker
      position={data?.coordinates as number[] as LatLngExpression}
      icon={icon}
      eventHandlers={{ click: onClickPlaceHandler }}
    >
      {isOpenModal && (
        <Modal setClosed={onClickPlaceHandler}>
          <section className={mapStyle.head}>
            {/* <img src={data?.photo} width={500} height={280} /> */}
          </section>

          <div className={mapStyle.main}>
            <div>
              <div className={mapStyle.objName}>{data?.name}</div>
              <section className={mapStyle.objAddress}>{data?.city}</section>
            </div>
            <div className={mapStyle.objDesc}>{data?.founding_year}</div>
          </div>
        </Modal>
      )}
    </Marker>
  );
};

export default MyMarker;
