import React from 'react';
import styled from 'styled-components';
import noticiasImage1 from "../assetsFinal/noticia1.jpg";
import noticiasImage2 from "../assetsFinal/noticia2.jpg";
import noticiasImage3 from "../assetsFinal/noticia3.jpg";

const Section4Container = styled.section`
  height: 600px; /* fixed height */
  display: flex;
  flex: 20 1 100%;
  background-color: white;
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
  top: 10%;
  left: 10%;
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
  top: 10%;
  left: 10%;
  width: 80%;
  height: 60%;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;

  }
`;

const BoxNoticias = styled.div`
  background-color: #17413A;
  width: 40%;
  height: 100%;
  margin-left: 10px;
  border-radius: 10px;
  display: flex; /* Add this line */
  flex-direction: column; /* Add this line */
  justify-content: center; /* Add this line */
  align-items: center; /* Add this line */
  @media (max-width: 768px) {
    width: 50%;
    margin: 20px 0;
	text-align: center;
  }
`;

const BoxNoticiasImg = styled.img`
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
  top: 20%;
  left: 40%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 30%;
  text-align: center;
  color: white;
  @media (max-width: 768px) {
    height: auto;
    padding: 10px;
  }
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
    </Section4Container>
  );
}

export default Noticias;