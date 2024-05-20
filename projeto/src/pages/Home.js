import React from 'react';
import styled from 'styled-components';
import Main from '../components/Main';
import Numeros from '../components/Numeros';
import Header from '../components/Header';
import Projetos from '../components/Projetos';
import Noticias from '../components/Noticias';
import Vagas from '../components/Vagas';
import Footer from '../components/Footer';
import Background from "../assetsFinal/tropical-leaves.jpg";

const HomeContainer = styled.div`
	background-image: url(${Background});
`;

function Home(){
    return(
        <HomeContainer>
            <Header/>
            <Main/>
            <Numeros/>
            <Projetos/>
            <Noticias/>
            <Vagas/>
            <Footer/>
        </HomeContainer>
    );
}

export default Home;