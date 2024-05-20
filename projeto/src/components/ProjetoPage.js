import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: linear-gradient(to bottom, #136D58, #22c9a2);
  border-radius: 10px;
  overflow: hidden;
  perspective: 1000px;
  transform-style: preserve-3d;
  transform: rotateX(-10deg);
  transition: all 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  animation: form-animation 0.5s ease-in-out;
  font-weight: 800;
  width: 80%;
  position:relative;
  margin: 0 auto;
`;

const Title = styled.h1`
  padding: 10px;
  color: #fff;
  text-align:center;
`;

const Paragraph = styled.p`
  padding: 10px;
  color: #fff;
  text-align:center;
`;

const Subtitle = styled.h2`
  padding: 10px;
  color: #fff;
  position:relative;
  text-align:center;
`;

const ODS = () => {
    return (
        <Container>
            <Title>Objetivos de Desenvolvimento Sustentável</Title>
            <Paragraph>
                A Organização das Nações Unidas (ONU) estabeleceu 17 Objetivos de Desenvolvimento Sustentável (ODS) para serem alcançados até 2030. Esses objetivos abrangem uma ampla gama de questões, incluindo a erradicação da pobreza, a promoção da educação, a proteção do meio ambiente e a promoção da paz e da justiça.
            </Paragraph>
            <Subtitle>1. Erradicação da Pobreza</Subtitle>
            <Paragraph>
                Este objetivo visa acabar com a pobreza em todas as suas formas e em todos os lugares. Alguns dos principais desafios incluem a falta de acesso a serviços básicos, como água potável e saneamento, e a falta de oportunidades econômicas.
            </Paragraph>
            <Subtitle>2. Fome Zero</Subtitle>
            <Paragraph>
                Este objetivo visa acabar com a fome, alcançar a segurança alimentar e melhorar a nutrição e a agricultura sustentável. Alguns dos principais desafios incluem a mudança climática, a degradação do solo e a perda de biodiversidade.
            </Paragraph>
            <Subtitle>3. Saúde e Bem-Estar</Subtitle>
            <Paragraph>
                Este objetivo visa assegurar uma vida saudável e promover o bem-estar para todas as idades. Alguns dos principais desafios incluem a falta de acesso a cuidados de saúde, a epidemia de obesidade e a falta de atividade física.
            </Paragraph>
            <Subtitle>4. Educação de Qualidade</Subtitle>
            <Paragraph>
                Este objetivo visa assegurar uma educação inclusiva e equitativa e promover oportunidades de aprendizagem ao longo da vida para todas as pessoas. Alguns dos principais desafios incluem a falta de acesso a educação, a exclusão social e a desigualdade de gênero.
            </Paragraph>
            <Subtitle>5. Igualdade de Gênero</Subtitle>
            <Paragraph>
                Este objetivo visa alcançar a igualdade de gênero e capacitar todas as mulheres e meninas. Alguns dos principais desafios incluem a violência degênero, a desigualdade salarial e a falta de representação política.
            </Paragraph>
            <Subtitle>6. Água Limpa e Saneamento</Subtitle>
            <Paragraph>
                Este objetivo visa assegurar a disponibilidade e o gerenciamento sustentável da água e do saneamento para todos. Alguns dos principais desafios incluem a escassez de água, a poluição da água e a falta de infraestrutura de saneamento.
            </Paragraph>
            <Subtitle>7. Energia Acessível e Limpa</Subtitle>
            <Paragraph>
                Este objetivo visa assegurar o acesso a energia acessível, confiável, sustentável e moderna para as pessoas.
            </Paragraph>
        </Container>
    );
};

export default ODS;