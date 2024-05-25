import React from 'react';
import styled from 'styled-components';
import noticiasImage1 from "../assetsFinal/noticia1.jpg";
import noticiasImage2 from "../assetsFinal/noticia2.jpg";
import noticiasImage3 from "../assetsFinal/noticia3.jpg";
import { Link } from 'react-router-dom';

const Section4Container = styled.section`
  height: 600px;
  display: flex;
  flex: 20 1 100%;
  background-color: white;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: column;
	height: 1000px;
  }
`;

const Noticia = styled.div`
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Section4H1 = styled.h1`
  position: relative;
  text-align: center;
  font-size: 40px;
  @media (max-width: 768px) {
    font-size: 24px;
    text-align: center;
    top: 0;
    left: 0;
  }
`;

const GroupNoticias = styled.div`
  position: relative;
  left: 10%;
  width: 80%;
  height: 60%;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    text-align: center;
    align-items:center;
  }
`;

const BoxNoticias = styled.div`
  background-color: #17413A;
  width: 40%;
  height: 100%;
  margin-left: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  @media (max-width: 768px) {
    width: 65%;
    margin: 20px 0;
	  text-align: center;
    align-items:center;
    height: auto;
  }
`;

const BoxNoticiasImg = styled.img`
  margin-top: 40px;
  width: 90%;
  height: 50%;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 50%;
    height: 30%;
  }
`;

const BoxNoticiasP = styled.p`
  position: relative;
  top: 5%;
  width: 80%;
  height: 30%;
  text-align: center;
  color: white;
  @media (max-width: 768px) {
    position: relative;
    bottom:50%;
    height: auto;
    margin-bottom: 30px;
  }
`;

const Button = styled(Link)`
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

function Noticias() {
  return (
    <Section4Container>
      <Noticia>
        <Section4H1>Notícias</Section4H1>
        <GroupNoticias>
          <BoxNoticias>
            <BoxNoticiasImg src={noticiasImage1} alt="" />
            <BoxNoticiasP>
              Inaugurado Parque Urbano com Foco na Preservação Ambiental e Bem-Estar Comunitário
            </BoxNoticiasP>
          </BoxNoticias>
          <BoxNoticias>
            <BoxNoticiasImg src={noticiasImage2} alt="" /><BoxNoticiasP>
              Nova Ciclovia Conecta Bairros e Promove Mobilidade Sustentável
            </BoxNoticiasP>
          </BoxNoticias>
          <BoxNoticias>
            <BoxNoticiasImg src={noticiasImage3} alt="" />
            <BoxNoticiasP>
              Projeto Piloto de Habitação Social Integra Energias Renováveis e Eficiência Energética
            </BoxNoticiasP>
          </BoxNoticias>
        </GroupNoticias>
      </Noticia>
      <Button to="/noticias">
            Saiba mais
            <Icon viewBox="0 0 24 24" class="icon">
              <path clip-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                fill-rule="evenodd"></path>
            </Icon>
      </Button>
    </Section4Container>
  );
}

export default Noticias;