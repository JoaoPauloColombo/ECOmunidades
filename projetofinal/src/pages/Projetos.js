import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
import ObjetivosPage from '../components/ObjetivosPage';
import Background from "../assetsFinal/tropical-leaves.jpg";
import styled from 'styled-components';

const HomeContainer = styled.div`
	background-image: url(${Background});
`;

function Contato(){
    return(
        <HomeContainer>
            <Header/>
            <Main />
            <ObjetivosPage/>
            <Footer/>
        </HomeContainer>
    );
}
export default Contato