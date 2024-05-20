import React, {  } from 'react';
import styled from 'styled-components';
import LogoImage from "../assetsFinal/logo.png";

const FooterContainer = styled.footer`
  height: 300px; /* fixed height */
  flex: 1 1 100vw;
  display: flex;
  flex-direction: column;
  background-color: #136D58;
  @media (max-width: 768px) {
    height: auto;
  }
`;

const Menu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`;

const LogoFooter = styled.div`
  width: 400px;
  height: 100%;
  @media (max-width: 768px) {
    width: 100%;
    flex: 1;
  }
`;

const LogoFooterImg = styled.img`
  width: 200px;
  height: 200px;
  position: relative;
  left: 5%;
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    left: 0;
  }
`;

const LogoFooterP = styled.p`
  width: 300px;
  position: absolute;
  left: 2%;
  top: 60%;
  font-size: 15px;
  color: white;
  font-weight: 800;
  @media (max-width: 768px) {
    position: relative;
    top: 0;
    left: 0;
    text-align: center;
    margin-top: 10px;
  }
`;

const Termos = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  left: 30%;
  top:20%;
  font-weight: 800;
  background-color: #136D58;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    left: 0;
    top: 0;
    padding: 20px;
  }
`;

const FooterHr = styled.hr`
  position: relative;
  left: 40%;
  top:20%;
  transform: translate(-50%, -50%);
  width: 80%;
  @media (max-width: 768px) {
    width: 50%;
  }
`;
const TermosP = styled.p`
  padding: 20px;
  color:white;
  @media (max-width: 768px) {
    padding: 10px;
  }
`

function Footer() {
  return (
    <FooterContainer>
      <Menu>
        <LogoFooter>
          <LogoFooterImg src={LogoImage} alt="" />
          <LogoFooterP>Construindo cidades sustentáveis, conectadas e resilientes para um futuro próspero.</LogoFooterP>
        </LogoFooter>

      </Menu>
      <FooterHr />
      <Termos>
        <TermosP>© ECOmunidades 2023</TermosP>
        <TermosP>Termos de serviço</TermosP>
        <TermosP>Politica de Privacidade</TermosP>
      </Termos>
    </FooterContainer>
  );
}

export default Footer;