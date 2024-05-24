import React from 'react';
import styled from 'styled-components';
import ObjetivosImage1 from '../assetsFinal/ObjetivosImage1.webp';
import ObjetivosImage2 from '../assetsFinal/ObjetivosImage2.png';
import ObjetivosImage3 from '../assetsFinal/ObjetivosImage3.jpg';
import ObjetivosImage4 from '../assetsFinal/ObjetivosImage4.jpg';

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
const Image = styled.img`
  position:relative;
  text-align:center;
  width:80%;
  height:60%;
`

const ODS = () => {
    return (
        <Container>
            <Title>Objetivo de Desenvolvimento Sustentável 11: Cidades e Comunidades Sustentáveis</Title>
            <Paragraph>
                O Objetivo de Desenvolvimento Sustentável 11, estabelecido pela Organização das Nações Unidas (ONU), visa garantir que as cidades e os assentamentos humanos sejam inclusivos, seguros, resilientes e sustentáveis até 2030. Este objetivo aborda questões cruciais relacionadas ao desenvolvimento urbano, promovendo uma abordagem holística para melhorar a qualidade de vida nas áreas urbanas enquanto protege o meio ambiente.
            </Paragraph>
            <Subtitle>11.1 Construindo Infraestrutura Resiliente</Subtitle>
            <Paragraph>
                O ODS 11 visa construir infraestruturas resilientes, incluindo transporte, água, saneamento e energia, para garantir o acesso equitativo a serviços básicos e promover o desenvolvimento sustentável das cidades.
            </Paragraph>
            <Image src={ObjetivosImage1} alt=""></Image>
            <Subtitle>11.2 Fomentando a Inclusão Social e Econômica</Subtitle>
            <Paragraph>
                Uma parte fundamental do ODS 11 é promover a inclusão social e econômica, garantindo que todas as pessoas tenham acesso a moradias seguras, empregos dignos e oportunidades de participação na vida urbana.
            </Paragraph>
            <Image src={ObjetivosImage2} alt=""></Image>
            <Subtitle>11.3 Reduzindo o Impacto Ambiental das Cidades</Subtitle>
            <Paragraph>
                Este objetivo busca reduzir o impacto ambiental das cidades, promovendo práticas sustentáveis de gestão de resíduos, transporte e uso da terra, para enfrentar desafios como a poluição do ar e a degradação ambiental.
            </Paragraph>
            <Image src={ObjetivosImage3} alt=""></Image>
            <Subtitle>11.4 Fortalecendo a Resiliência às Mudanças Climáticas</Subtitle>
            <Paragraph>
                O ODS 11 busca fortalecer a resiliência das cidades às mudanças climáticas, adaptando infraestruturas e implementando medidas de mitigação para proteger as comunidades urbanas dos impactos adversos das mudanças no clima.
            </Paragraph>
            <Image src={ObjetivosImage4} alt=""></Image>
        </Container>
    );
};

export default ODS;