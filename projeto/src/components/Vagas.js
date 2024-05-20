import React from 'react';
import styled from 'styled-components';
import vagaImage from "../assetsFinal/vagas.png";

const VagasContainer = styled.section`
  height: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextVagas = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
  color: white;
  text-align: left;
  width:40%;
  font-size:35px;
  @media (max-width: 768px) {
    font-size: 25px;
    width: 90%;
    text-align: center;
  }
`;

const Section5Img = styled.img`
  width: 50%;
  height: 80%;
  border-radius: 25px;
  @media (max-width: 768px) {
    width: 80%;
    height: auto;
  }
`;

function Vagas() {
  return (
    <VagasContainer>
      <TextVagas>
        <p>Junte-se a nós para construir cidades sustentáveis! </p>
        <p>Sua participação é essencial para o sucesso do ODS 11.</p>
      </TextVagas>
      <Section5Img src={vagaImage} alt="" />
    </VagasContainer>
  );
}

export default Vagas;