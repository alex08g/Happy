import React from "react";

import {
  Container,
  ContainerHeader,
  ContainerFooter,
  CustomLink,
} from "./styles";

import happyImg from "../../img/map-maker.svg";

import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <aside>
        <ContainerHeader>
          <img src={happyImg} alt="happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperndo sua visita :)</p>
        </ContainerHeader>

        <ContainerFooter>
          <strong>São Luís</strong>
          <span>Maranhão</span>
        </ContainerFooter>
      </aside>

      <Map
        center={[-2.5431587, -44.2952528]}
        zoom={15}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>

      <CustomLink to="/">
        <FiPlus size={32} color="fff" />
      </CustomLink>
    </Container>
  );
};

export default OrphanagesMap;
