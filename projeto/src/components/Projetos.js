import React from 'react';
import styled from 'styled-components';
import projetosImage1 from "../assetsFinal/projetos-image1.png";
import projetosImage2 from "../assetsFinal/projetos-image2.png";
import projetosImage3 from "../assetsFinal/projetos-image3.png";
import { Link } from 'react-router-dom';

const Section3Container = styled.section`
	background-color: #136D58;
	min-height: calc(120vh - 50px);
	display: flex;
	flex: 20 1 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	@media (max-width: 768px) {
		flex-direction: column;
		position:relative;
	    top:50%
	}
`;

const ProjetosStyle = styled.div`
	width: 100%;
	height: 100%;
	@media (max-width: 768px) {
		padding: 20px;
	}
	overflow: hidden;
`;

const Section3H1 = styled.h1`
	position: relative;
	top: 40%;
	font-size: 60px;
	color: white;
	text-align:center;
	@media (max-width: 768px) {
		font-size: 40px;
	text-align: center;
		top: 0;
		left: 0;
	}
`;

const BottonProjetos = styled(Link)`
	padding: 15px 30px;
	border: 2px solid #2c2c2c;
	background-color: #1a1a1a;
	color: #ffffff;
	font-size: 1.2rem;
	cursor: pointer;
	border-radius: 30px;
	transition: all 0.4s ease;
	outline: none;
	position: relative;
	overflow: hidden;
	font-weight: bold;
    position: relative;
	text-decoration:none;

	width: 30%;
	margin: 20px auto;
	display: flex;
	align-items: center;
	justify-content: center;
	&:hover{
	background: radial-gradient(circle,
			rgba(255, 255, 255, 0.25) 0%,
			rgba(255, 255, 255, 0) 70%);
    }
    @media (max-width: 768px) {
		position: relative;
		top: 0;
		left: 0;
		display: block;
		width: 30%;
		margin: 20px auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

const ImagesProjetos = styled.div`
  max-height: 800px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center; 
  align-items: center; 
  position: relative;
  left: 0;
  bottom: 0;
  @media (max-width: 768px) {
    flex-direction: row;
    height: auto;
    width: 100%;
    left: 0;
    bottom: 0;
  }
`;

const ImageProjetosDiv = styled.div`
	padding: 5%;
	position: relative;
	height: 33.33%; 
	@media (max-width: 768px) {
		padding: 10px;
		height: 400px; 
	}
`;

const ImageProjetosImgStyle = styled.img`
	max-width: 100%;
	height: auto; 
	border: white 10px;
	@media (max-width: 768px) {
		height: 60%; 
		width: auto; 
	}
`;

function Projetos() {
	return (
		<Section3Container>
			<ProjetosStyle>
				<Section3H1>Principais <br /> Projetos</Section3H1>
				<ImagesProjetos>
					<ImageProjetosDiv>
						<ImageProjetosImgStyle src={projetosImage1} alt="" />
					</ImageProjetosDiv>
					<ImageProjetosDiv className="middle-projeto">
						<ImageProjetosImgStyle src={projetosImage2} alt="" />
					</ImageProjetosDiv>
					<ImageProjetosDiv>
						<ImageProjetosImgStyle src={projetosImage3} alt="" />
					</ImageProjetosDiv>
				</ImagesProjetos>
				<BottonProjetos to="/projetos">Ver todos projetos</BottonProjetos>
			</ProjetosStyle>
		</Section3Container>
	);
}

export default Projetos;