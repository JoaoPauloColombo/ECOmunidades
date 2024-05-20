import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Section2Container = styled.section`
  min-height: calc(150vh - 224px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NumerosStyle = styled.div`
  flex-wrap: nowrap;
  width: 80%;
  height: 70%;
  border-radius: 10px;
  padding: 50px; 
  background-color: rgba(0, 0, 0, 0);
  box-shadow: 23px 5px 20px 14px rgba(99, 96, 96, 0.75);
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  color: white;
  background-color: black;
  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    flex-direction: column;
  }
`;

const Numero = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
  height: 100%;
  width: 100%;
  align-items: start;
  text-align: left;
  display: flex;
  flex-direction: column;
  border-right: gray solid;
  padding: 0 20px;
  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-bottom: gray solid;
    padding-bottom: 20px;
    text-align:center;
    align-items: center;
    justify-content: center;
  }
`;

const NumeroLast = styled(Numero)`
  border-right: none;
`;

const NumeroH1 = styled.h1`
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NumeroH2 = styled.h2`
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NumeroP = styled.p`
  width: 100%;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled(Link)`
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


function Numeros() {
  return (
    <Section2Container>
      <NumerosStyle>
        <Numero>
          <NumeroH1>68%</NumeroH1>
          <NumeroH2>População Urbana Global</NumeroH2>
          <NumeroP>
            Estima-se que até 2050, mais da metade dapopulação mundial vive atualmente em áreas
            urbanas.
          </NumeroP>
          <Button to="/projetos">
            Saiba mais
            <Icon viewBox="0 0 24 24" class="icon">
              <path clip-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                fill-rule="evenodd"></path>
            </Icon>
          </Button>
        </Numero>
        <Numero>
          <NumeroH1>75%</NumeroH1>
          <NumeroH2>Uso de Energia Eólica</NumeroH2>
          <NumeroP>
            Estima-se que até 2050, mais da metade da população mundial vive atualmente em áreas
            urbanas.
          </NumeroP>
          <Button to="/projetos">
            Saiba mais
            <Icon viewBox="0 0 24 24" class="icon">
              <path clip-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                fill-rule="evenodd"></path>
            </Icon>
          </Button>
        </Numero>
        <NumeroLast>
          <NumeroH1>30%</NumeroH1>
          <NumeroH2>Espaços Verdes Urbanos</NumeroH2>
          <NumeroP>
            Em muitas cidades, menos de 30% da área é para espaços verdes, como parques, impactando a
            vida urbana.
          </NumeroP>
          <Button to="/projetos">
            Saiba mais
            <Icon viewBox="0 0 24 24" class="icon">
              <path clip-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                fill-rule="evenodd"></path>
            </Icon>
          </Button>
        </NumeroLast>
      </NumerosStyle>
    </Section2Container>
  );
}

export default Numeros;