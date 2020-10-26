import React from "react";

import { FiArrowRight } from "react-icons/fi";

import {
  Container,
  Wrapper,
  CotaianerLocation,
  LinkEnterApp,
  ContainerMain,
  ImageLocation,
} from "./styles";

import logo from "../../img/logo.svg";
import LandingImg from "../../img/landing.svg";

const landing: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <img src={logo} alt="Logo Happy" />

        <ContainerMain>
          <h1>Leve felicidade para o mundo</h1>

          <p>Visite orfanatos e mude o dia de muitas crianças</p>
        </ContainerMain>

        <ImageLocation>
          <img src={LandingImg} alt="happy kids" />
        </ImageLocation>

        <CotaianerLocation>
          <strong>São Luís</strong>
          <span>Maranhão</span>
        </CotaianerLocation>

        <LinkEnterApp to="/app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </LinkEnterApp>
      </Wrapper>
    </Container>
  );
};

export default landing;
