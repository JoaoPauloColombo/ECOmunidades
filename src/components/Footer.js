import React from 'react';
import styled from 'styled-components';
import LogoImage from "../assetsFinal/logo.png";

const FooterContainer = styled.footer`
  height: 400px;
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
  width: 500px;
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
position: relative;
    bottom: 25%;
    left:10%;
  width: 300px;
  display: flex;
  text-align: left;
  align-items: center;
  justify-content: flex-start;
  font-size: 15px;
  color: white;
  font-weight: 800;
  @media (max-width: 768px) {
    display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  left:25%;
  }
`;

const Termos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-weight: 800;
  background-color: #136D58;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterHr = styled.hr`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 80%;
  @media (max-width: 768px) {
    width: 80%;
  }
`;
const TermosP = styled.p`
  padding: 20px;
  color: white;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
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