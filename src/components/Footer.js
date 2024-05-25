import React from 'react';
import styled from 'styled-components';
import LogoImage from "../assetsFinal/logo.png";
import { Link } from 'react-router-dom';

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
    display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
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
`;

const Button = styled.a`
  margin-top: 20px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  padding-block: 1rem;
  padding-inline: 1.25rem;
  background-color: #136d58;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ffff;
  gap: 10px;
  font-weight: bold;
  border: 3px solid #ffffff4d;
  outline: none;
  overflow: hidden;
  font-size: 15px;
  text-decoration: none;
  align-self: center;
`;

const Icon = styled.svg`
  fill: #ffffff;
  height: 16px;
  width: 16px;
`;

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
        <TermosP>© ECOmunidades 2024</TermosP>
        <TermosP>Termos de serviço</TermosP>
        <TermosP>Politica de Privacidade</TermosP>
        <TermosP><Button href="https://regeneracaoglobal.com/home#googtrans(pt)">
            Link ONG
            <Icon viewBox="0 0 24 24" class="icon">
              <path clip-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                fill-rule="evenodd"></path>
            </Icon>
          </Button>
</TermosP>
      </Termos>
    </FooterContainer>
  );
}

export default Footer;