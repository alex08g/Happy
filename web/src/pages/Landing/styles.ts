import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
  
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  position: relative;
  
  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 680px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  /* background-image: url('../../img/location.svg') no-repeat ; */
`;

export const ContainerMain = styled.main`
  max-width: 358px;

  h1 {
    font-size: 7.6rem;
    font-weight: 900;
    line-height: 70px;
  }

  p {
    margin-top: 40px;
    font-size: 2.4rem;
    line-height: 34px;
  }
`;

export const CotaianerLocation = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  font-size: 2.4rem;
  line-height: 34px;

  display: flex;
  flex-direction: column;
  text-align: right;

  strong {
    font-weight: 800;
  }
`;

export const LinkEnterApp = styled(Link)`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 80px;
  height: 80px;
  background-color: #ffd666;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.3s ease-in-out;
  &:hover {
    background: #96feff;
  }
`;

export const ImageLocation = styled.div`
  position: absolute;
  top: 0;
  left: 40%;
`;
