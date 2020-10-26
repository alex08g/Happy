import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;

  aside {
    width: 27%;
    background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);

    padding: 80px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .leaflet-container {
    z-index: 5;
  }
`;

export const ContainerHeader = styled.header`
  h2 {
    font-size: 4rem;
    font-weight: 800;

    line-height: 42px;
    margin-top: 64px;
  }

  p {
    line-height: 28px;
    margin-top: 24px;
  }
`;

export const ContainerFooter = styled.footer`
  display: flex;
  flex-direction: column;

  line-height: 24px;

  strong {
    font-weight: 800;
  }
`;

export const CustomLink = styled(Link)`
  z-index: 10;

  position: absolute;
  right: 40px;
  bottom: 40px;

  width: 64px;
  height: 64px;

  background: #15c3d6;
  
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.4s ease;

  &:hover {
    background: #17d6eb;
  }
`;
